"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  original_price?: number | null
  image_url?: string | null
  category?: { name: string } | null
  brand?: { name: string } | null
  rating?: number
  review_count?: number
}

export function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // ✅ Fetch featured products
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("/api/products?featured=true&limit=6")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching featured products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  // ✅ Auto-slide every 3s
  useEffect(() => {
    if (products.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3))
    }, 3000)
    return () => clearInterval(interval)
  }, [products.length])

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Equipment</h2>
            <p className="text-slate-300 text-lg">Loading our premium machinery...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-slate-700 rounded-lg mb-4" />
                <div className="h-4 bg-slate-700 rounded mb-2" />
                <div className="h-4 bg-slate-700 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Equipment</h2>
          <p className="text-slate-300 text-lg">No featured products available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Equipment</h2>
          <p className="text-slate-300 text-lg">Discover our premium industrial machinery collection</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `${-currentIndex * (100 / 4)}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ width: `${(products.length / 4) * 100}%` }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0"
                style={{ width: `${100 / products.length}%` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={product.image_url || "/placeholder.jpg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Featured</Badge>
                      </div>
                      {product.original_price && product.original_price > product.price && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="destructive">
                            Save ${(product.original_price - product.price).toLocaleString()}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-white text-lg leading-tight line-clamp-2 group-hover:text-orange-400 transition-colors">
                          {product.name}
                        </h3>
                        {product.category && (
                          <p className="text-slate-400 text-sm mt-1">{product.category.name}</p>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-slate-400 text-sm">
                          ({product.review_count || 0})
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">
                              ${product.price.toLocaleString()}
                            </span>
                            {product.original_price && product.original_price > product.price && (
                              <span className="text-slate-400 line-through text-sm">
                                ${product.original_price.toLocaleString()}
                              </span>
                            )}
                          </div>
                          {product.brand && (
                            <p className="text-slate-400 text-sm">by {product.brand.name}</p>
                          )}
                        </div>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white group-hover:bg-orange-600 transition-colors">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.max(1, products.length - 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-slate-600 hover:bg-slate-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
