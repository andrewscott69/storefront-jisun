"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductCarousel } from "@/components/product-carousel"
import { PopularProducts } from "@/components/popular-products"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductCarousel />
        <PopularProducts />

        <motion.section
          className="py-16 text-center bg-gradient-to-br from-background to-muted/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/products">
              <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all shadow-lg">
                View All Products
              </button>
            </Link>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
