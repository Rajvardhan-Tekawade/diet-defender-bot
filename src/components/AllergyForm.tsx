
import React from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState, useEffect } from 'react';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const allergySchema = z.object({
  allergies: z.string().min(1, { message: "Please enter at least one allergy" })
});

const AllergyForm = () => {
  const [user, setUser] = useState<any>(null);
  const [existingAllergies, setExistingAllergies] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof allergySchema>>({
    resolver: zodResolver(allergySchema),
    defaultValues: {
      allergies: ''
    },
  });

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        await fetchUserAllergies(session.user.id);
      }
    };

    checkSession();
  }, []);

  const fetchUserAllergies = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_allergies')
        .select('allergies')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching allergies:', error);
        return;
      }

      if (data) {
        setExistingAllergies(data.allergies);
        form.setValue('allergies', data.allergies.join(', '));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onSubmit = async (values: z.infer<typeof allergySchema>) => {
    if (!user) {
      toast({
        title: "Error",
        description: "Please sign in to save your allergies",
        variant: "destructive"
      });
      return;
    }

    const allergiesArray = values.allergies
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    try {
      const { data, error } = await supabase
        .from('user_allergies')
        .upsert(
          { 
            user_id: user.id, 
            allergies: allergiesArray,
            updated_at: new Date().toISOString()
          },
          { onConflict: 'user_id' }
        );

      if (error) {
        throw error;
      }

      setExistingAllergies(allergiesArray);
      toast({
        title: "Success",
        description: "Your allergies have been saved",
      });
    } catch (error: any) {
      console.error('Error saving allergies:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save allergies",
        variant: "destructive"
      });
    }
  };

  if (!user) {
    return (
      <Alert>
        <AlertDescription>
          Please sign in to manage your allergies.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="allergies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Allergies</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. peanuts, milk, eggs" {...field} />
                </FormControl>
                <FormDescription>
                  Enter allergies separated by commas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-health-green hover:bg-health-green/90">
            Save Allergies
          </Button>
        </form>
      </Form>

      {existingAllergies.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium">Your Current Allergies:</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {existingAllergies.map((allergy, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
              >
                {allergy}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllergyForm;
