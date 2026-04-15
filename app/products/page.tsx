"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { ProductFilters } from "@/components/product-filters";
import { AnimatedProductGrid } from "@/components/animated-product-grid";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";

export default function ProductsPage() {
  const [filters, setFilters] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ✅ ensures this page only renders client-side content
  }, []);

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Industrial Machinery
          </h1>
          <p className="text-muted-foreground">
            Discover our comprehensive collection of professional-grade industrial equipment.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Filters Sidebar */}
          <motion.aside
            className="lg:w-64 flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mounted && <ProductFilters onFiltersChange={handleFiltersChange} />}
          </motion.aside>

          {/* ✅ Products Grid */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {mounted && <AnimatedProductGrid filters={filters} />}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
