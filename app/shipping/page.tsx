import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Package, Globe, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Shipping Information | Jinsun Machineries",
  description:
    "How Jinsun Machineries ships orders — delivery times, freight options, duties, tracking and heavy-machinery handling.",
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Help &amp; Information</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Information</h1>
        <p className="text-muted-foreground text-lg mb-10">
          We ship from our Kwai Chung warehouse across Hong Kong, the Greater Bay Area and to export markets
          worldwide. The details below explain how that works and what to expect.
        </p>

        {/* Quick summary tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="border rounded-lg p-5">
            <Truck className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">Hong Kong delivery</p>
            <p className="text-sm text-muted-foreground">Usually 1–3 working days after dispatch.</p>
          </div>
          <div className="border rounded-lg p-5">
            <Globe className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">International freight</p>
            <p className="text-sm text-muted-foreground">By air or sea, quoted per shipment.</p>
          </div>
          <div className="border rounded-lg p-5">
            <Package className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">Free shipping threshold</p>
            <p className="text-sm text-muted-foreground">Free HK delivery on qualifying orders.</p>
          </div>
          <div className="border rounded-lg p-5">
            <AlertTriangle className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">Heavy machinery</p>
            <p className="text-sm text-muted-foreground">Crated, palletised and insured in transit.</p>
          </div>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Processing time</h2>
            <p>
              In-stock orders are usually picked, packed and dispatched within 1–3 working days of payment
              confirmation. Custom-configured, made-to-order or large-format machinery has a longer lead time, which
              is confirmed at quote and on the order confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Shipping methods</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Local delivery (Hong Kong SAR):</strong> courier or dedicated
                truck for heavier items. Delivery typically 1–3 working days after dispatch.
              </li>
              <li>
                <strong className="text-foreground">Mainland China &amp; Greater Bay Area:</strong> cross-border
                trucking or courier, depending on size. Delivery time varies with the destination city and customs
                clearance.
              </li>
              <li>
                <strong className="text-foreground">International air freight:</strong> for time-sensitive orders
                and smaller equipment where speed matters more than cost.
              </li>
              <li>
                <strong className="text-foreground">International sea freight:</strong> the standard method for
                heavy, bulky or full-container machinery. Typically 2–6 weeks door-to-port depending on destination.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Shipping costs</h2>
            <p>
              Standard delivery within Hong Kong is free on qualifying orders above our current threshold (shown at
              checkout). Orders below the threshold, oversized items and international shipments are quoted per
              consignment — this lets us pass on the actual freight and handling cost rather than averaging it
              across the catalogue. You will see the final shipping cost before you confirm the order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Order tracking</h2>
            <p>
              Once your order ships, we send a tracking number (for courier and air freight) or a bill of lading /
              reference number (for sea freight) by email. For large machinery exports we also keep you updated at
              key milestones: export clearance, vessel departure, arrival and delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Duties, taxes &amp; customs</h2>
            <p>
              Export shipments are by default shipped on an Ex-Works or FOB basis, meaning the buyer is responsible
              for import duties, taxes, customs clearance and any local fees in the destination country. We can
              supply the commercial invoice, packing list and any certificates required for export, and we can
              arrange DAP or DDP shipping on request at an additional cost.
            </p>
            <p className="mt-3">
              Please consult a local customs broker in your country for duty estimates before placing a large order
              — we can supply HS codes on request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Heavy &amp; oversized machinery</h2>
            <p>
              Large machinery is crated, palletised or strapped onto custom skids before dispatch, and shipped with
              appropriate handling and insurance. Buyers should ensure the delivery location has suitable access,
              lifting equipment (forklift or crane) and space to receive the item — we will confirm the crate
              dimensions and weight before dispatch so you can arrange offloading.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Damage in transit</h2>
            <p>
              Please inspect every shipment on arrival before signing the carrier&apos;s paperwork. If the
              packaging or product shows visible damage, note it on the carrier&apos;s delivery note and take
              photos of the damaged packaging and contents. Email us at{" "}
              <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
                support@jinsunmachineries.com
              </a>{" "}
              within 48 hours and we will work with you and the carrier to resolve it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Collection from our warehouse</h2>
            <p>
              If you prefer to collect your order, you are welcome to arrange pick-up from our Kwai Chung warehouse
              by appointment. Please email us to confirm the collection time so we have your order ready and
              documented.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Restrictions</h2>
            <p>
              Certain products may be subject to export controls, country-specific import restrictions or hazardous
              material regulations. Where that applies to your order, we will let you know before processing and
              may ask for end-use documentation to comply with local and international law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Questions?</h2>
            <p>
              For shipping enquiries, email{" "}
              <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
                support@jinsunmachineries.com
              </a>{" "}
              or visit our{" "}
              <a href="/contact" className="text-orange-600 hover:underline">
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
