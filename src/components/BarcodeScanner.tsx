
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertCircle, CheckCircle2, SearchIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const { toast } = useToast();

  const scanBarcode = async () => {
    if (!barcode) {
      toast({
        title: "Error",
        description: "Please enter a barcode",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      // Call the Supabase edge function directly
      const { data, error } = await supabase.functions.invoke('scan-barcode', {
        body: { barcode }
      });

      if (error) {
        console.error('Error scanning barcode:', error);
        toast({
          title: "Error",
          description: error.message || "Failed to scan barcode",
          variant: "destructive"
        });
        return;
      }

      console.log('Scan result:', data);
      setScanResult(data);
      setShowResult(true);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeResult = () => {
    setShowResult(false);
    setScanResult(null);
    setBarcode('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter barcode number"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          className="flex-grow"
        />
        <Button 
          onClick={scanBarcode} 
          disabled={isLoading}
          className="bg-health-green hover:bg-health-green/90"
        >
          {isLoading ? 'Scanning...' : 'Scan'}
          <SearchIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan Result</DialogTitle>
            <DialogDescription>
              Allergen detection results for this product
            </DialogDescription>
          </DialogHeader>

          {scanResult && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Product</h3>
                <p>{scanResult.product.product_name}</p>
              </div>

              {scanResult.product.ingredients && (
                <div>
                  <h3 className="font-medium">Ingredients</h3>
                  <p className="text-sm text-muted-foreground">{scanResult.product.ingredients}</p>
                </div>
              )}

              <Alert variant={scanResult.isSafe ? "default" : "destructive"}>
                {scanResult.isSafe ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertTitle>
                  {scanResult.isSafe ? "Safe to consume" : "Warning: Allergens detected"}
                </AlertTitle>
                <AlertDescription>
                  {scanResult.isSafe 
                    ? "This product appears to be safe based on your allergy profile."
                    : `This product contains allergens you're sensitive to: ${scanResult.detectedAllergens.join(', ')}`
                  }
                </AlertDescription>
              </Alert>

              <div className="flex justify-end">
                <Button onClick={closeResult}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BarcodeScanner;
