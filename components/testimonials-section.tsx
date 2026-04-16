"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We needed a replacement CNC lathe on short notice after a machine failure. Jinsun had a unit in stock, answered every technical question the same day and had it crated and en route to our Dongguan plant within the week. That kind of responsiveness is rare.",
    name: "Marcus Chan",
    title: "Operations Manager",
    company: "Pacifica Precision Engineering, HK",
    rating: 5,
  },
  {
    quote:
      "Most suppliers will sell you anything. Jinsun actually told us the first model we asked about was overkill for our duty cycle and recommended a cheaper unit. It saved us close to 30% and works exactly as described.",
    name: "Priya Menon",
    title: "Procurement Lead",
    company: "NovaSteel Fabrication, Singapore",
    rating: 5,
  },
  {
    quote:
      "Sourced three hydraulic presses for our shipyard refit line. Paperwork for export was clean, delivery schedule held, and their team was on WhatsApp at 10pm answering commissioning questions. We've already placed a second order.",
    name: "Daniel Lam",
    title: "Project Engineer",
    company: "Eastwind Marine Works, Kowloon",
    rating: 5,
  },
  {
    quote:
      "The welding equipment we bought has been running two shifts a day for eight months without a single issue. When a consumable cable went down, Jinsun shipped a replacement under warranty in three days — no arguments, no paperwork marathon.",
    name: "Ahmad Rizki",
    title: "Workshop Owner",
    company: "Rizki Metalworks, Jakarta",
    rating: 5,
  },
  {
    quote:
      "I was sceptical about buying heavy machinery online. A quick call, a detailed quote and a site visit to their Kwai Chung warehouse changed my mind. Professional outfit, and the machines are exactly as described.",
    name: "Sophia Leung",
    title: "Plant Manager",
    company: "Goldcrest Industrial Group, HK",
    rating: 5,
  },
  {
    quote:
      "Good pricing, honest lead times and a team that knows the difference between selling equipment and supporting it. That's why we keep coming back for the whole contractor fleet.",
    name: "Benedict Tan",
    title: "Director",
    company: "Tan & Ko Construction Supplies, Malaysia",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            What Our Customers Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by workshops, manufacturers and contractors across Asia.
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from the buyers we supply every day — from Hong Kong precision shops to Southeast Asian
            shipyards and mainland manufacturing plants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative bg-card rounded-xl border p-6 flex flex-col"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-500/10" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
