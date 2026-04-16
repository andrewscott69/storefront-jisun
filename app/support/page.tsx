import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageSquare, Wrench, FileText, Clock, Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Support | Jinsun Machineries",
  description:
    "Pre-sales advice, technical support, warranty claims and spare parts for industrial machinery purchased from Jinsun Machineries.",
}

const supportAreas = [
  {
    icon: MessageSquare,
    title: "Pre-sales advice",
    body: "Not sure which machine fits your application, duty cycle or power supply? Send us your specs and we will help you narrow it down.",
  },
  {
    icon: Wrench,
    title: "Technical & troubleshooting",
    body: "Setup, operation and fault-finding guidance for equipment bought from us — by email during business hours, with urgent issues prioritised.",
  },
  {
    icon: FileText,
    title: "Warranty claims",
    body: "We handle warranty claims in-house. Email us with your order number, a description of the issue and photos, and we will take it from there.",
  },
  {
    icon: Clock,
    title: "Spare parts & service",
    body: "Consumables, wear parts and replacement components for the lines we supply. Tell us the machine model and part you need.",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Help &amp; Information</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
        <p className="text-muted-foreground text-lg mb-10">
          Real technical support from people who know the equipment. Here is how we can help — and how to reach us.
        </p>

        {/* Support areas */}
        <section className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportAreas.map((area) => (
              <div key={area.title} className="border rounded-lg p-6">
                <area.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Response times */}
        <section className="mb-14 border rounded-lg p-6 bg-muted/30">
          <h2 className="text-xl font-bold mb-4">Response times</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex justify-between gap-4 text-sm">
              <span>General enquiries</span>
              <span className="text-foreground font-medium text-right">Within 1 working day</span>
            </li>
            <li className="flex justify-between gap-4 text-sm">
              <span>Quote requests</span>
              <span className="text-foreground font-medium text-right">Usually 1–2 working days</span>
            </li>
            <li className="flex justify-between gap-4 text-sm">
              <span>Warranty claims &amp; technical issues</span>
              <span className="text-foreground font-medium text-right">Triaged within 2 working days</span>
            </li>
            <li className="flex justify-between gap-4 text-sm">
              <span>Urgent production down-time</span>
              <span className="text-foreground font-medium text-right">Best-effort same day, mark email URGENT</span>
            </li>
          </ul>
        </section>

        {/* Contact info */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Contact us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <Mail className="w-6 h-6 text-orange-500 mb-3" />
              <h3 className="font-semibold mb-3">By email</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-muted-foreground">Sales &amp; support:</span>{" "}
                  <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
                    support@jinsunmachineries.com
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Alternate:</span>{" "}
                  <a
                    href="mailto:Jinsunwentoumachineries.hk@gmail.com"
                    className="text-orange-600 hover:underline break-all"
                  >
                    Jinsunwentoumachineries.hk@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <MapPin className="w-6 h-6 text-orange-500 mb-3" />
              <h3 className="font-semibold mb-3">By post / in person</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Jinsun Machineries</p>
                <p>182-190 Tai Lin Pai Road</p>
                <p>Kwai Chung, Hong Kong</p>
                <p className="text-xs italic mt-2">Visits by appointment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">Opening hours</h2>
          <div className="border rounded-lg divide-y">
            <div className="flex justify-between p-4 text-sm">
              <span className="text-muted-foreground">Monday – Friday</span>
              <span className="font-medium">8:00 AM – 6:00 PM</span>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <span className="text-muted-foreground">Saturday</span>
              <span className="font-medium">9:00 AM – 4:00 PM</span>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <span className="text-muted-foreground">Sunday &amp; public holidays</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            All times Hong Kong Time (UTC+8). Emails outside these hours are replied to on the next working day.
          </p>
        </section>

        {/* Before you email */}
        <section className="border-t pt-8">
          <h2 className="text-xl font-bold mb-3">Before you email — a few things that help us help you faster</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Your order number (if applicable).</li>
            <li>The product model and serial number (usually on the nameplate).</li>
            <li>A brief description of the issue or question — what you expected vs. what is happening.</li>
            <li>Photos or a short video if the issue is visible or audible.</li>
            <li>Your location and preferred contact time (we are on Hong Kong time).</li>
          </ul>
          <p className="mt-4">
            You may also want to check our{" "}
            <a href="/faq" className="text-orange-600 hover:underline">
              FAQ
            </a>{" "}
            for quick answers to common questions.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
