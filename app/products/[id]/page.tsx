"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Minus, Plus, ArrowLeft, Star, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { Footer } from "@/components/footer"

interface Product {
  id: string;
  name: string;
  category: string;
  brand?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  review_count?: number;
  image_url?: string[];
  badge?: string | null;
  inStock: boolean;
  stockCount?: number;
  description?: string;
  specifications?: Record<string, string>;
  features?: string[];
  warranty?: string;
  shipping?: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem, openCart } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);

        // Fetch related products by category (limit 4)
        const relatedRes = await fetch(`/api/products?category=${data.category}&limit=4`);
        if (relatedRes.ok) {
          const relatedData = await relatedRes.json();
          // Exclude current product
          setRelatedProducts(relatedData.filter((p: Product) => p.id !== data.id));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params?.id]);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image_url?.[0] || "/placeholder.svg",
        category: product.category,
      });
    }
    openCart();
  };

  const increaseQuantity = () => {
    if (product && quantity < (product.stockCount || 10)) setQuantity(q => q + 1);
  };
  const decreaseQuantity = () => { if (quantity > 1) setQuantity(q => q - 1); };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading product details...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Product not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Link href="/products" className="hover:text-foreground flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </motion.div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative overflow-hidden rounded-2xl bg-muted">
              <motion.img
                key={selectedImage}
                src={product.image_url?.[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {product.badge && <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{product.badge}</Badge>}
            </div>

            {/* Thumbnails */}
            {Array.isArray(product.image_url) && product.image_url.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.image_url.map((img, idx) => (
                  <motion.button
                    key={idx}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-primary" : "border-transparent"}`}
                    onClick={() => setSelectedImage(idx)}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold">${product.price.toLocaleString()}</span>
              {product.originalPrice && <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

            {/* Quantity + Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="sm" onClick={decreaseQuantity} disabled={quantity <= 1} className="h-10 w-10"><Minus className="h-4 w-4" /></Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={increaseQuantity} disabled={quantity >= (product.stockCount || 10)} className="h-10 w-10"><Plus className="h-4 w-4" /></Button>
                </div>
                <span className="text-sm text-muted-foreground">Total: ${(product.price * quantity).toLocaleString()}</span>
              </div>

              <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" onClick={handleAddToCart} disabled={!product.inStock}>
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Tabs: Specs, Features, Warranty, Shipping */}
        <div className="mt-12">
          <Tabs defaultValue="specs" className="space-y-4">
            <TabsList>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="warranty">Warranty</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="specs">
              {product.specifications && Object.keys(product.specifications).length > 0 ? (
                <ul className="list-disc list-inside">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <li key={key}><strong>{key}:</strong> {val}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specifications available.</p>
              )}
            </TabsContent>

            <TabsContent value="features">
              {product.features && product.features.length > 0 ? (
                <ul className="list-disc list-inside">{product.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
              ) : (
                <p className="text-muted-foreground">No features listed.</p>
              )}
            </TabsContent>

            <TabsContent value="warranty"><p>{product.warranty || "No warranty info."}</p></TabsContent>
            <TabsContent value="shipping"><p>{product.shipping || "No shipping info."}</p></TabsContent>
          </Tabs>
        </div>

        <Separator className="my-12" />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <Card key={p.id} className="hover:shadow-lg transition-shadow">
                  <Link href={`/products/${p.id}`}>
                    <CardContent className="p-4">
                      <img src={p.image_url?.[0] || "/placeholder.svg"} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                      <h3 className="font-semibold">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">${p.price.toLocaleString()}</p>
                    </CardContent>
                  </Link>
                  <CardFooter>
                    <Button size="sm" variant="outline" className="w-full" onClick={() => {
                      addItem({ id: p.id, name: p.name, price: p.price, image: p.image_url?.[0] || "/placeholder.svg", category: p.category });
                      openCart();
                    }}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
