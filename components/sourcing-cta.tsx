"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search, MessageSquare, Truck } from "lucide-react"

export function SourcingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
              Can&apos;t find what you need?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              We source the machines that aren&apos;t on our website.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              The catalogue shows what we stock. Our network reaches a lot further. Send us your specification —
              capacity, power, duty cycle, certifications, budget — and we will come back with options, lead times
              and a real quote.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              No obligation, no call-centre runaround. Just a straight answer from someone who understands the
              equipment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                Browse Catalogue
              </Link>
            </div>
          </motion.div>

          {/* Process cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              {
                icon: Search,
                step: "01",
                title: "Tell us what you need",
                body: "Specs, volume, delivery location, target budget — as much or as little as you have.",
              },
              {
                icon: MessageSquare,
                step: "02",
                title: "We come back with options",
                body: "Usually within 1–2 working days. Honest pricing, real lead times, alternative models if helpful.",
              },
              {
                icon: Truck,
                step: "03",
                title: "Approve & we deliver",
                body: "From order to dispatch — including crating, shipping and the paperwork for export.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-orange-400">{item.step}</span>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300">{item.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
