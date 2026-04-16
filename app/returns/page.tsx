import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RotateCcw, XCircle, AlertTriangle, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Returns & Refunds | Jinsun Machineries",
  description:
    "Jinsun Machineries returns and refunds policy: return window, non-returnable items, damage claims, restocking and refund process.",
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Help &amp; Information</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns &amp; Refunds</h1>
        <p className="text-muted-foreground text-lg mb-10">
          We want every buyer to be satisfied with their purchase. If something is not right, here is how we handle
          returns, defective goods and refunds.
        </p>

        {/* Summary tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="border rounded-lg p-5">
            <RotateCcw className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">14-day return window</p>
            <p className="text-sm text-muted-foreground">On eligible, unused items in original packaging.</p>
          </div>
          <div className="border rounded-lg p-5">
            <XCircle className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">Custom &amp; special orders</p>
            <p className="text-sm text-muted-foreground">Made-to-order machinery is non-returnable.</p>
          </div>
          <div className="border rounded-lg p-5">
            <AlertTriangle className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">Damaged on arrival</p>
            <p className="text-sm text-muted-foreground">Notify us within 48 hours with photos.</p>
          </div>
          <div className="border rounded-lg p-5">
            <CheckCircle2 className="w-6 h-6 text-orange-500 mb-3" />
            <p className="font-semibold mb-1">Refunds</p>
            <p className="text-sm text-muted-foreground">Processed within 10 working days of inspection.</p>
          </div>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Return window &amp; eligibility</h2>
            <p>
              Unused, unopened items in their original packaging may be returned within 14 days of delivery,
              provided prior return authorisation has been obtained from us. Items must be in resalable condition,
              with all accessories, manuals and protective packaging intact. A restocking fee of up to 15% may
              apply to offset handling, re-crating and re-certification costs.
            </p>
            <p className="mt-3">
              Return shipping is the buyer&apos;s responsibility unless the return is due to our error or a
              manufacturing defect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Non-returnable items</h2>
            <p>The following are not eligible for return under any circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Custom-configured, made-to-order or commissioned machinery.</li>
              <li>Items that have been used, installed, wired in or commissioned.</li>
              <li>Consumables, wear parts and single-use items.</li>
              <li>Hazardous materials, batteries and compressed-gas products.</li>
              <li>Items sold as clearance, ex-demo, second-hand or &ldquo;as-is&rdquo;.</li>
              <li>Products damaged by misuse, unauthorised modification or poor storage after delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Damaged or incorrectly shipped items</h2>
            <p>
              Inspect every shipment on arrival and note any visible damage on the carrier&apos;s delivery paperwork
              before signing. Take clear photos of the outer packaging and the product. Email us at{" "}
              <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
                support@jinsunmachineries.com
              </a>{" "}
              within 48 hours of delivery with your order number, photos and a short description. Depending on the
              situation we will arrange repair, replacement parts, a replacement unit or a refund.
            </p>
            <p className="mt-3">
              If damage is only discovered after unboxing, please report it within 7 days of delivery along with
              photos so we can pursue the claim with the carrier where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Warranty claims</h2>
            <p>
              For product failures within the warranty period (and outside the return window), please see the
              warranty terms on your order or quote and contact our support team. Warranty claims typically result
              in a repair, replacement part or replacement unit — refunds are not the default remedy for warranty
              issues.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">How to request a return</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Email{" "}
                <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
                  support@jinsunmachineries.com
                </a>{" "}
                with your order number and reason for return.
              </li>
              <li>
                We will confirm whether the item is eligible and, if so, issue a Return Authorisation (RA) number
                and return address.
              </li>
              <li>
                Pack the item securely in its original packaging, include the RA number on the outside and inside
                the package, and ship to the address provided.
              </li>
              <li>
                On receipt we inspect the item (usually within 5 working days) and process the approved refund or
                exchange.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Exchanges</h2>
            <p>
              For an exchange, we recommend returning the original item as described above and placing a separate
              order for the replacement once the return has been accepted. This prevents your preferred replacement
              from going out of stock while the return is in transit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Refund processing</h2>
            <p>
              Approved refunds are processed to the original payment method within 10 working days of our
              inspection. Depending on your bank or card provider, it can take an additional 3–10 days for the
              credit to appear on your statement. Restocking fees, inbound-shipping costs and any non-refundable
              duties or taxes are deducted from the refund amount.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Installation &amp; regulatory compliance</h2>
            <p>
              Jinsun Machineries is a supplier of industrial equipment, not an installation or commissioning
              contractor (unless separately contracted). Buyers are responsible for selecting equipment suitable
              for their application, installing it in accordance with the manufacturer&apos;s instructions and
              local regulations, and training operators to use it safely. We accept no responsibility for losses
              arising from unsuitable selection, incorrect installation or improper use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Questions?</h2>
            <p>
              For anything not covered above, email{" "}
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
