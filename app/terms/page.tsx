import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Jinsun Machineries",
  description: "The terms that apply when you use the Jinsun Machineries website or buy products from us.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 April 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Jinsun Machineries
              website and the purchase of any products or services from us. By using our website or placing an
              order, you agree to be bound by these Terms. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. About us</h2>
            <p>
              Jinsun Machineries is an industrial machinery supplier based at 182-190 Tai Lin Pai Road, Kwai Chung,
              Hong Kong. References to &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo; in these Terms refer
              to Jinsun Machineries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Eligibility</h2>
            <p>
              Our website and products are intended for business use. By placing an order, you confirm that you are
              at least 18 years old and, where buying on behalf of a business, that you are authorised to bind that
              business to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Products &amp; information</h2>
            <p>
              We take care to describe our products accurately, but small variations in specification, appearance,
              weight and dimensions may occur between listings, manufacturer revisions and the product you receive.
              Product images are illustrative. It is the buyer&apos;s responsibility to confirm that the selected
              product is suitable for its intended use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Pricing &amp; availability</h2>
            <p>
              Prices are shown in the currency stated on the website or quote and exclude shipping, duties, taxes
              and installation unless specifically stated. We reserve the right to correct pricing errors, change
              prices and withdraw items from sale at any time. Where stock is limited, fulfilment is subject to
              availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Orders &amp; acceptance</h2>
            <p>
              Placing an order on our website or accepting a quote is an offer to buy. A binding contract is formed
              only when we confirm the order in writing (for example, an order confirmation email). We reserve the
              right to decline or cancel any order before dispatch — including, without limitation, cases of
              suspected fraud, payment failure, pricing error or unavailability of stock — and will refund any
              amounts already paid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Payment</h2>
            <p>
              Orders are payable in full before dispatch unless agreed credit terms are in place. For large or
              custom orders, a deposit may be required. Overdue invoices may be subject to reasonable interest and
              recovery costs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Shipping, risk &amp; title</h2>
            <p>
              Shipping methods, timeframes and costs are as set out on our Shipping page or in the relevant quote.
              Risk of loss passes to the buyer on delivery to the shipping address or, for collected orders, on
              collection. Title in the goods passes to the buyer once we have received payment in full.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Warranty</h2>
            <p>
              Qualifying new products are covered by our standard warranty against manufacturing defects for the
              period stated on the product page, quote or warranty certificate. The warranty does not cover wear
              parts, consumables, damage from misuse, unauthorised modification, operator error, inadequate
              maintenance or operation outside the manufacturer&apos;s specifications. See our Returns page and
              your warranty certificate for full details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Installation &amp; use</h2>
            <p>
              Unless we have specifically agreed to carry out installation or commissioning, the buyer is
              responsible for installing, operating, maintaining and decommissioning the equipment in line with the
              manufacturer&apos;s instructions, local regulations and safe working practices. You are responsible
              for ensuring operators are trained and that the equipment is used only for its intended purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, our total aggregate liability to you in connection with any
              order is limited to the amount you paid for the product giving rise to the claim. We shall not be
              liable for indirect, incidental, special, consequential or punitive damages, including loss of
              profits, loss of production, loss of data or business interruption. Nothing in these Terms excludes
              liability that cannot lawfully be excluded.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">11. Intellectual property</h2>
            <p>
              All content on our website — including text, graphics, logos, images and product copy — is owned by
              Jinsun Machineries or our licensors and is protected by applicable laws. You may not copy, reproduce,
              republish or redistribute our content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">12. Prohibited uses</h2>
            <p>You agree not to use our website:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>in any way that breaches applicable law or regulation;</li>
              <li>to transmit unsolicited commercial messages, malware or harmful content;</li>
              <li>to attempt to access parts of the site that are not made available for public use; or</li>
              <li>to reverse engineer, scrape or otherwise interfere with the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">13. Force majeure</h2>
            <p>
              We are not liable for any delay or failure to perform caused by events beyond our reasonable control,
              including acts of God, pandemic, strikes, transport disruption, shortage of materials, government
              action or power failure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">14. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Hong Kong Special Administrative Region. Any dispute
              arising out of or in connection with them shall be subject to the exclusive jurisdiction of the Hong
              Kong courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">15. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. The version in effect when you place your order is the
              version that applies to that order. The &ldquo;Last updated&rdquo; date at the top of this page shows
              when the latest version was published.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">16. Contact</h2>
            <p>Questions about these Terms can be sent to:</p>
            <div className="mt-3 text-foreground">
              <p>Jinsun Machineries</p>
              <p>182-190 Tai Lin Pai Road, Kwai Chung, Hong Kong</p>
              <p>
                <a href="mailto:support@jinsunmachineries.com" className="text-orange-600 hover:underline">
                  support@jinsunmachineries.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
