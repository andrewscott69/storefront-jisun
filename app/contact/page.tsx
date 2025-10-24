"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    
    {
      icon: Mail,
      title: "Email",
      details: ["support@jinsunmachineries.com", "Jinsunwentoumachineries.hk@gmail.com"],
      description: "24/7 Response Time",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["182-190 Tai Lin Pai road", "Kwai Chung,Hung Kong"],
      description: "Visit Our Showroom",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 4pm"],
      description: "Closed Sundays",
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
                Get in <span className="text-accent">Touch</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Have questions about our machinery? Our expert team is here to help you find the perfect equipment for
                your business needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-card p-6 rounded-lg border hover:border-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <info.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-accent font-medium">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder=""
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder=""
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder=""
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder=""
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Product inquiry, support request, etc."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your machinery needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Visit Our Showroom</h3>
                  <p className="text-muted-foreground mb-6">
                    See our machinery in action at our state-of-the-art showroom. Schedule a visit to explore our full
                    range of industrial equipment and speak with our technical experts.
                  </p>

                  {/* Map Placeholder */}
                  <div className="relative h-[300px] rounded-lg overflow-hidden bg-muted border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Interactive Map</p>
                        <p className="text-xs text-muted-foreground">182-190 Tai Lin Pai road,Kwai Chung,Hung Kong</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Expert Consultation</p>
                        <p className="text-sm text-muted-foreground">Free technical advice from industry specialists</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Fast Response Time</p>
                        <p className="text-sm text-muted-foreground">24-hour response guarantee on all inquiries</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Flexible Solutions</p>
                        <p className="text-sm text-muted-foreground">Custom packages tailored to your needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Nationwide Support</p>
                        <p className="text-sm text-muted-foreground">Service centers across the country</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our products and services.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                
                {
                  q: "Do you offer installation services?",
                  a: "Yes, we provide professional installation services by certified technicians for all machinery purchases.",
                },
                {
                  q: "What warranty do you provide?",
                  a: "All equipment comes with a manufacturer's warranty, typically 1-3 years depending on the product. Extended warranties are available.",
                },
                {
                  q: "Can I schedule a product demonstration?",
                  a: "Contact us to schedule a live demonstration at our showroom or request a virtual demo.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
