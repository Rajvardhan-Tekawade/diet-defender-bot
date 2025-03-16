
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      }
    );

    // Get user ID from session
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    
    if (userError) {
      console.log("User error:", userError);
      // Allow search even without authentication
    }

    // Get request data
    const requestData = await req.json();
    const { barcode } = requestData;

    console.log("Searching for barcode:", barcode);

    if (!barcode) {
      return new Response(
        JSON.stringify({ error: "Barcode is required" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Search for product in database
    const { data: products, error: productsError } = await supabaseClient
      .from("products")
      .select("*")
      .eq("barcode", barcode)
      .single();

    if (productsError) {
      console.log("Products error:", productsError);
      return new Response(
        JSON.stringify({ 
          error: "Product not found",
          message: "We couldn't find this product in our database" 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
      );
    }

    // If user is authenticated, check their allergies
    let isSafe = true;
    let userAllergies = [];
    let detectedAllergens = [];

    if (user) {
      const { data: allergiesData, error: allergiesError } = await supabaseClient
        .from("user_allergies")
        .select("allergies")
        .eq("user_id", user.id)
        .single();

      if (!allergiesError && allergiesData) {
        userAllergies = allergiesData.allergies;
        
        // Check if product allergens overlap with user allergies
        if (products.allergens && products.allergens.length > 0) {
          detectedAllergens = products.allergens.filter(allergen => 
            userAllergies.includes(allergen)
          );
          
          isSafe = detectedAllergens.length === 0;
        }

        // Log scan in history
        await supabaseClient
          .from("scan_history")
          .insert({
            user_id: user.id,
            product_id: products.id,
            is_safe: isSafe,
            detected_allergens: detectedAllergens
          });
      }
    }

    return new Response(
      JSON.stringify({
        product: products,
        isSafe,
        userAllergies,
        detectedAllergens
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
