"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plus } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

type Product = {
  id: string
  name: string
  description?: string
  price: number
  original_price?: number | null
  image_url?: string | null
  category?: { name: string } | null
  rating: number
  review_count: number
  is_featured: boolean
}

export function ProductShowcase() {
  const { addItem, openCart } = useCartStore()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products?featured=true")
        if (!res.ok) throw new Error("Failed to fetch featured products")
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error("Error loading featured products:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url || "/placeholder.jpg",
      category: product.category?.name || "Uncategorized",
    })
    openCart()
  }

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">Loading featured products...</p>
      </section>
    )
  }

  if (!products.length) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">No featured products available.</p>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Equipment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular industrial machinery, trusted by manufacturers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.is_featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
                <Button
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleAddToCart(product)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {product.category?.name || "Uncategorized"}
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.review_count} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
                  {product.original_price && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.original_price.toLocaleString()}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
