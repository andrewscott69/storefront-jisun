"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Eye } from "lucide-react"

type Product = {
  id: string
  name: string
  description?: string
  price: number
  original_price?: number | null
  image_url?: string | null
  category?: {
    name: string
  } | null
  brand?: {
    name: string
  } | null
  rating?: number
  review_count?: number
  is_best_seller?: boolean
  is_new?: boolean
}

export function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await fetch("/api/products?limit=4&offset=0")
        if (!response.ok) throw new Error("Failed to fetch products")

        const data = await response.json()
        setProducts(data.slice(0, 4)) // top 4 popular items
      } catch (error) {
        console.error("Error fetching popular products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPopularProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Products</h2>
            <p className="text-slate-600 text-lg">Loading popular machinery...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-slate-200 rounded-lg mb-4" />
                <div className="h-4 bg-slate-200 rounded mb-2" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Products</h2>
          <p className="text-slate-600 text-lg">Most sought-after industrial equipment</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white border-slate-200 hover:shadow-xl transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={
                        product.image_url
                          ? product.image_url
                          : `https://source.unsplash.com/featured/?${encodeURIComponent(product.name)}`
                      }
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Popular</Badge>
                    </div>

                    {product.original_price && product.original_price > product.price && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="destructive">
                          {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      {product.category && (
                        <p className="text-slate-500 text-sm mt-1">{product.category.name}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-slate-500 text-sm">
                        ({product.rating?.toFixed(1) || "4.9"})
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-slate-900">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.original_price && product.original_price > product.price && (
                          <span className="text-slate-400 line-through text-sm">
                            ${product.original_price.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.brand && (
                        <p className="text-slate-500 text-sm">by {product.brand.name}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-slate-300 hover:bg-slate-100 bg-transparent"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
