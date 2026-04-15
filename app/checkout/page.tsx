"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Truck, Shield, CreditCard, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          totalPrice,
          items,
        }),
      });

      const data = await res.json();
      if (data.success) {
        clearCart();
        setShowSuccess(true);
      } else {
        alert(data.error || "Failed to place order");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while placing your order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/products" className="flex items-center text-gray-600 hover:text-blue-600 mb-6">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Products
          </Link>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                  <CardDescription>Enter your contact and delivery details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" onChange={handleChange} value={formData.firstName} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" onChange={handleChange} value={formData.lastName} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" onChange={handleChange} value={formData.email} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" onChange={handleChange} value={formData.phone} />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" onChange={handleChange} value={formData.company} />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" onChange={handleChange} value={formData.address} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" onChange={handleChange} value={formData.city} />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" onChange={handleChange} value={formData.state} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" onChange={handleChange} value={formData.zip} />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select onValueChange={(v) => setFormData({ ...formData, country: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="Mexico">Mexico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.length === 0 ? (
                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                  ) : (
                    <>
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <span className="text-sm">{item.name} × {item.quantity}</span>
                          <span className="text-sm font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}

                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${totalPrice.toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Button size="lg" className="w-full" onClick={handleSubmit} disabled={loading}>
                {loading ? "Placing Order..." : "Submit Quote Request"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
              Order Placed Successfully!
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 mb-4">
            Thank you for your order. Our team will contact you within 24 hours with your quote details.
          </p>
          <Button asChild className="w-full" onClick={() => setShowSuccess(false)}>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
