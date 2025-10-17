"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Grid3X3,
  List,
  ShoppingCart,
  Loader2,
  Check,
} from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Base URL for Supabase images (update this if needed)
const SUPABASE_URL = "https://hridnstmdhiuypqsgcnf.supabase.co";
const BUCKET_PATH = "/storage/v1/object/public/product-images/products/";

interface Product {
  id: string;
  name: string;
  category: string;
  categoryId?: string;
  brand: string;
  brandId?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  review_count: number;
  image_url: string;
  badge?: string | null;
  inStock: boolean;
  description?: string;
}

interface AnimatedProductGridProps {
  filters?: any;
}

export function AnimatedProductGrid({ filters }: AnimatedProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [addedToCartId, setAddedToCartId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const { addItem, openCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      category: product.category,
      categoryId: product.categoryId,
      brand: product.brand,
      brandId: product.brandId,
    });
    setAddedToCartId(product.id);
    openCart();
    setTimeout(() => setAddedToCartId(null), 1000);
  };

  const handleCardClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  // ✅ Fetch products client-side only
  useEffect(() => {
    if (!mounted) return;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();

        filters?.categories?.forEach((id: string) =>
          queryParams.append("categories[]", id)
        );
        filters?.brands?.forEach((id: string) =>
          queryParams.append("brands[]", id)
        );

        if (filters?.priceRange) {
          const [min, max] = filters.priceRange;
          queryParams.append("minPrice", String(min));
          queryParams.append("maxPrice", String(max));
        }

        const res = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await res.json();

        console.log("✅ Products fetched:", data);

        // ✅ Normalize image URLs
        const normalized = (Array.isArray(data) ? data : []).map((p: any) => {
          let imageUrl = p.image_url || "";

          // If image_url is missing but file name is provided (like `p.image`)
          if (!imageUrl && p.image) {
            imageUrl = `${SUPABASE_URL}${BUCKET_PATH}${p.image}`;
          }

          // If image_url doesn't start with "http" or "/"
          if (imageUrl && !imageUrl.startsWith("http") && !imageUrl.startsWith("/")) {
            imageUrl = `${SUPABASE_URL}${BUCKET_PATH}${imageUrl}`;
          }

          // Final fallback
          if (!imageUrl) {
            imageUrl = "/placeholder.svg";
          }

          return { ...p, image_url: imageUrl };
        });

        setProducts(normalized);
      } catch (error) {
        console.error("❌ Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [filters, mounted]);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Toolbar */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-gradient-to-r from-card to-card/50 rounded-xl border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          {loading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading products...</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground font-medium">
              {sortedProducts.length} products found
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-lg overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : sortedProducts.length === 0 ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            No products found matching your criteria.
          </p>
          <Button variant="outline">Clear Filters</Button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {viewMode === "grid" && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="grid"
            >
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden h-full cursor-pointer"
                    onClick={() => handleCardClick(product.id)}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground shadow-lg">
                          {product.badge}
                        </Badge>
                      )}
                      {!product.inStock && (
                        <Badge
                          variant="secondary"
                          className="absolute top-3 right-3 bg-red-500/90 text-white"
                        >
                          Out of Stock
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-4 flex-1">
                      <div className="text-xs text-muted-foreground mb-1 font-medium">
                        {product.category} / {product.brand}
                      </div>
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium ml-1">
                          {product.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({product.review_count})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        disabled={!product.inStock}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        {addedToCartId === product.id ? (
                          <>
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                            Added!
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
