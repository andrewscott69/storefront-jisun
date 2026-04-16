import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ | Jinsun Machineries",
  description:
    "Answers to common questions about ordering, shipping, warranty, custom sourcing and technical support at Jinsun Machineries.",
}

const faqs = [
  {
    category: "Ordering & Quotes",
    items: [
      {
        q: "How do I place an order?",
        a: "You can order directly through our website by adding products to your cart and checking out. For large machinery, bulk purchases or custom configurations, we recommend requesting a quote first — email us at support@jinsunmachineries.com or use the Contact page and we will come back to you with pricing, lead time and shipping options.",
      },
      {
        q: "Do you offer trade or bulk pricing?",
        a: "Yes. We offer volume and trade pricing for resellers, contractors and recurring industrial buyers. Get in touch with your requirements and we will prepare a tailored quote.",
      },
      {
        q: "Can you source machinery that is not on your website?",
        a: "In most cases, yes. Our website lists the equipment we stock and sell regularly, but we have strong relationships with manufacturers across Asia and can source specialised or heavy machinery on request. Send us the specifications you need and we will see what we can do.",
      },
      {
        q: "What are your payment terms?",
        a: "We accept major credit cards, bank transfer and (for established trade customers) approved account terms. Large orders typically require a deposit with balance on shipping. Payment details are confirmed at quote or checkout.",
      },
      {
        q: "Will I receive a VAT invoice or receipt?",
        a: "Yes, a tax invoice is issued for every order. If you need the invoice made out to a specific company entity or with additional details, please tell us at the time of ordering.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "Where do you ship?",
        a: "We ship throughout Hong Kong and the Greater Bay Area, and export to Southeast Asia, the Middle East, Europe and other markets on request. Large machinery is shipped by sea freight; smaller items go by courier or air.",
      },
      {
        q: "How long does delivery take?",
        a: "In-stock items within Hong Kong typically dispatch within 1–3 working days. International and heavy-machinery shipments depend on destination and freight method — we confirm the expected lead time on every quote.",
      },
      {
        q: "Is shipping free?",
        a: "Standard delivery within Hong Kong is free on qualifying orders (see our Shipping page for the current threshold). Export shipments and oversized machinery are quoted per consignment to reflect the actual freight and handling cost.",
      },
      {
        q: "Who handles customs and duties on export orders?",
        a: "Unless otherwise agreed, export orders are shipped on a basis where the buyer is responsible for import duties, taxes and customs clearance in the destination country. We can arrange freight and provide the export paperwork; we recommend consulting a local broker for duty estimates.",
      },
    ],
  },
  {
    category: "Warranty & After-Sales",
    items: [
      {
        q: "What warranty do your products come with?",
        a: "Most new industrial machinery we sell is covered by a 2-year warranty against manufacturing defects. Wearing parts, consumables and items sold as clearance or ex-demo are covered differently — the warranty terms are shown on the product page or quote.",
      },
      {
        q: "What does the warranty cover?",
        a: "The warranty covers defects in materials or workmanship under normal industrial use. It does not cover damage caused by misuse, unauthorised modification, operator error, failure to maintain, or use outside the manufacturer's specifications.",
      },
      {
        q: "How do I make a warranty claim?",
        a: "Contact us at support@jinsunmachineries.com with your order number, a description of the issue and, if possible, photos or a short video. Our team will triage the issue and advise on repair, replacement parts or return — usually within 2 working days.",
      },
      {
        q: "Do you provide technical support after the sale?",
        a: "Yes. Our team answers setup, operation and troubleshooting questions by email during our normal business hours. For urgent production issues we do our best to respond the same day.",
      },
    ],
  },
  {
    category: "Returns",
    items: [
      {
        q: "Can I return a product?",
        a: "Unused, unopened items in original packaging can be returned within 14 days of delivery, subject to a restocking fee. Custom-ordered, special-configuration or commissioned machinery is not returnable. See our Returns page for full details.",
      },
      {
        q: "What if my order arrives damaged?",
        a: "Inspect every shipment on arrival and note any visible damage on the carrier's paperwork before signing. Take photos and email us within 48 hours of delivery. We will arrange repair, replacement or refund based on the situation.",
      },
    ],
  },
  {
    category: "About Jinsun",
    items: [
      {
        q: "Where are you based?",
        a: "Our office and main warehouse are at 182-190 Tai Lin Pai Road, Kwai Chung, Hong Kong. The location is purpose-chosen for proximity to the Kwai Tsing container terminals.",
      },
      {
        q: "Can I visit your showroom?",
        a: "Trade visits are welcome by appointment. Please email us in advance so we can have the right team member available and prepare any equipment you would like to see.",
      },
      {
        q: "What are your opening hours?",
        a: "Monday to Friday, 8:00 AM – 6:00 PM. Saturday, 9:00 AM – 4:00 PM. Closed on Sundays and Hong Kong public holidays. Email enquiries are monitored outside these hours and replied to on the next working day.",
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Help &amp; Information</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Quick answers to the questions we hear most often. Cannot find what you are looking for?{" "}
          <a href="/contact" className="text-orange-600 hover:underline">
            Contact us
          </a>{" "}
          and a real person will get back to you.
        </p>

        <div className="space-y-10">
          {faqs.map((group) => (
            <section key={group.category}>
              <h2 className="text-xl font-bold mb-4">{group.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {group.items.map((item, idx) => (
                  <AccordionItem key={item.q} value={`${group.category}-${idx}`}>
                    <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t pt-8">
          <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Email us at{" "}
            <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
              support@jinsunmachineries.com
            </a>{" "}
            or visit our{" "}
            <a href="/contact" className="text-orange-600 hover:underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
