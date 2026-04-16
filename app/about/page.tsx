import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Factory, Globe2, ShieldCheck, Wrench, Users, Target } from "lucide-react"

export const metadata = {
  title: "About Us | Jinsun Machineries",
  description:
    "Jinsun Machineries is a Hong Kong based supplier of industrial machinery, serving manufacturers, contractors and workshops across Asia and beyond.",
}

const whyUs = [
  {
    title: "Curated range, not a catalogue dump.",
    body: "We only list equipment we would recommend to our own team. Quality first; variety second.",
  },
  {
    title: "Technical answers, from technical people.",
    body: "Pre-sales questions are answered by staff who understand the equipment — not just the stock codes.",
  },
  {
    title: "Real warranty support.",
    body: "Our 2-year warranty on qualifying equipment is backed by an in-house process, not a call centre script.",
  },
  {
    title: "Honest lead times.",
    body: "Where we can ship from stock we do. Where we cannot, we tell you the real timeline up front.",
  },
  {
    title: "Kwai Chung logistics.",
    body: "A Hong Kong port-side base means faster inbound stock and simpler export paperwork for overseas buyers.",
  },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "We describe what we sell accurately. If a product is not right for your job, we will say so.",
  },
  {
    icon: Users,
    title: "Partnership",
    body: "Our customers come back because we treat the relationship as long-term, not transactional.",
  },
  {
    icon: Target,
    title: "Practicality",
    body: "We are engineers and operators at heart — function, reliability and serviceability come first.",
  },
]

const industries = [
  "Manufacturing & fabrication",
  "Construction & civil works",
  "Metalworking & machining",
  "Automotive & transport",
  "MRO & maintenance teams",
  "Shipyards & marine",
  "Electrical & electronics",
  "Renewable energy installers",
  "Research & training facilities",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            About Jinsun Machineries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Industrial machinery, sourced and supported from Hong Kong.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Jinsun Machineries supplies quality industrial equipment to manufacturers, contractors, fabrication
            workshops and maintenance teams. From our base in Kwai Chung, we deliver the tools that keep production
            lines moving — backed by responsive technical support and practical, honest advice.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Jinsun Machineries was built around a simple observation: industrial buyers deserve a supplier who
              understands the equipment, answers the phone, and stands behind what they sell. Too often, machinery
              procurement means long lead times, vague specifications and patchy after-sales service.
            </p>
            <p>
              We started with a focused catalogue of CNC, welding, hydraulic and power tool lines we knew inside and
              out, and grew from there — adding categories only when we could support them properly. Today we supply
              businesses across Hong Kong, Greater China and export markets, with a team that treats every enquiry
              like the project depends on it.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <Factory className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Supply</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                CNC machines, welding equipment, hydraulic systems, power tools, industrial tooling and safety gear —
                stocked and available to ship.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <Wrench className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Source</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Need something that is not on our site? We source specialised and large-format machinery on request
                through our manufacturer network.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <ShieldCheck className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Warranty-backed equipment and technical support from people who actually know the products — before
                and after the sale.
              </p>
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who We Serve</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Our customers range from single-operator workshops to multi-site manufacturers. If your work involves
            metal, materials or motion, we probably have something for you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {industries.map((item) => (
              <div key={item} className="border rounded-md px-4 py-3 text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Where we are */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Where We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <Globe2 className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Headquartered in Hong Kong</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                182-190 Tai Lin Pai Road, Kwai Chung — in the heart of Hong Kong&apos;s industrial belt, close to the
                Kwai Tsing container terminals for efficient inbound and outbound logistics.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <Target className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Serving Asia &amp; worldwide</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Local delivery across Hong Kong and the Greater Bay Area, with export shipping available to Southeast
                Asia, the Middle East, Europe and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Customers Choose Jinsun</h2>
          <ul className="space-y-4 text-lg">
            {whyUs.map((item) => (
              <li key={item.title} className="flex gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground text-base">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border rounded-lg p-6">
                <v.icon className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t pt-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Have a project in mind?</h2>
              <p className="text-muted-foreground">Tell us what you are building and we will help you spec it.</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Talk to our team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
