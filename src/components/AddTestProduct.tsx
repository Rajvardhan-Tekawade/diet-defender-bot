
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

const AddTestProduct = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    barcode: '',
    product_name: '',
    ingredients: '',
    allergens: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert allergens string to array
      const allergensArray = formData.allergens
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0);

      const { data, error } = await supabase
        .from('products')
        .insert({
          barcode: formData.barcode,
          product_name: formData.product_name,
          ingredients: formData.ingredients,
          allergens: allergensArray
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product added successfully",
      });

      // Reset form and close dialog
      setFormData({
        barcode: '',
        product_name: '',
        ingredients: '',
        allergens: ''
      });
      setOpen(false);
    } catch (error: any) {
      console.error('Error adding product:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to add product",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          Add Test Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Test Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="barcode" className="block text-sm font-medium">Barcode</label>
            <Input
              id="barcode"
              name="barcode"
              value={formData.barcode}
              onChange={handleChange}
              required
              placeholder="e.g. 123456789012"
            />
          </div>
          <div>
            <label htmlFor="product_name" className="block text-sm font-medium">Product Name</label>
            <Input
              id="product_name"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
              placeholder="e.g. Chocolate Chip Cookies"
            />
          </div>
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium">Ingredients</label>
            <Textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="List of ingredients..."
              rows={3}
            />
          </div>
          <div>
            <label htmlFor="allergens" className="block text-sm font-medium">Allergens</label>
            <Input
              id="allergens"
              name="allergens"
              value={formData.allergens}
              onChange={handleChange}
              placeholder="e.g. milk, eggs, nuts (comma separated)"
            />
            <p className="text-xs text-gray-500 mt-1">Enter allergens separated by commas</p>
          </div>
          <div className="flex justify-end">
            <Button type="button" variant="outline" className="mr-2" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Product'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTestProduct;
