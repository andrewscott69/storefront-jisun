"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Award, Users, Globe, TrendingUp, Shield, Wrench } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Years in Business", value: "25+" },
    { label: "Happy Clients", value: "5,000+" },
    { label: "Countries Served", value: "50+" },
    { label: "Products Delivered", value: "15,000+" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every machine undergoes rigorous testing to meet international standards and exceed expectations.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize your needs with dedicated support and personalized solutions for your business.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving industries worldwide with reliable shipping and local support in over 50 countries.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Constantly evolving our product line with cutting-edge technology and industry advancements.",
    },
    {
      icon: Wrench,
      title: "Expert Service",
      description: "Professional installation, maintenance, and repair services by certified technicians.",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Recognized excellence with multiple awards for quality, innovation, and customer satisfaction.",
    },
  ]

  const team = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      image: "/team-ceo.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image: "/team-operations.jpg",
    },
    {
      name: "David Martinez",
      role: "Technical Director",
      image: "/team-technical.jpg",
    },
    {
      name: "Emily Williams",
      role: "Customer Relations",
      image: "/team-customer.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Building the Future of <span className="text-accent">Industrial Excellence</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                For over 25 years, Jinsun Machineries has been the trusted partner for businesses worldwide, delivering premium
                industrial machinery and unparalleled service excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1999, Jinsun began with a simple mission: to provide businesses with reliable,
                    high-quality industrial machinery that drives productivity and growth. What started as a small
                    operation has grown into a global leader in the industrial equipment sector.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation, strategic partnerships with leading
                    manufacturers, and an unwavering commitment to customer satisfaction. Today, we serve over 5,000
                    clients across 50 countries, from small workshops to large-scale manufacturing facilities.
                  </p>
                  <p>
                    We believe that the right equipment can transform businesses. That's why we carefully curate our
                    product selection, ensuring every machine meets our rigorous standards for quality, performance, and
                    durability.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/modern-industrial-machinery-factory-floor-with-adv.jpg"
                  alt="MachinePro factory floor"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are as a company.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-card p-6 rounded-lg border hover:border-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <value.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
       

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Jinsun for their industrial equipment needs.
              </p>
              <motion.button
                className="bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
