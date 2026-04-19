"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Cog, Flame, Wrench, Gauge, SunMedium, HardHat, ArrowRight } from "lucide-react"

const categories = [
  {
    name: "CNC Machines",
    description: "Lathes, milling and machining centres for precision production.",
    icon: Cog,
  },
  {
    name: "Welding Equipment",
    description: "MIG, TIG, stick and plasma systems for fabrication workshops.",
    icon: Flame,
  },
  {
    name: "Power & Industrial Tools",
    description: "Drills, grinders, saws, measuring gear and metalworking accessories.",
    icon: Wrench,
  },
  {
    name: "Hydraulic Systems",
    description: "Presses, pumps, cylinders and hydraulic components.",
    icon: Gauge,
  },
  {
    name: "Solar Energy Systems",
    description: "Panels, inverters, batteries and balance-of-system for off-grid and commercial installs.",
    icon: SunMedium,
  },
  {
    name: "Safety Equipment",
    description: "PPE and workplace safety gear for industrial environments.",
    icon: HardHat,
  },
]

export function CategoriesShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Our Range</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by category</h2>
          <p className="text-muted-foreground text-lg">
            Six focused product families — curated from manufacturers we trust, stocked in Hong Kong and supported
            by a team that knows the equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href="/products"
                className="group relative block h-full rounded-xl border bg-card p-6 transition-all hover:border-orange-500 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                    <cat.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{cat.name}</h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
