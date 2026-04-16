import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Jinsun Machineries",
  description:
    "How Jinsun Machineries collects, uses and protects personal information provided through our website and sales process.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 16 April 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <p>
              Jinsun Machineries (&ldquo;Jinsun&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;)
              respects your privacy. This Privacy Policy explains what personal information we collect, how we use
              it, who we share it with, and the choices you have. It applies to the Jinsun Machineries website,
              email communications and sales process.
            </p>
            <p className="mt-3">
              By using our website or submitting an order or enquiry, you agree to the practices described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Information we collect</h2>
            <p>We collect the following categories of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong className="text-foreground">Contact details</strong> you provide: name, company, email
                address, phone number, billing and shipping address.
              </li>
              <li>
                <strong className="text-foreground">Order information</strong>: items purchased, quantities,
                delivery instructions and payment references (we do not store full card numbers — payments are
                processed by our payment provider).
              </li>
              <li>
                <strong className="text-foreground">Enquiry content</strong>: messages, specifications and
                attachments you send to us when requesting a quote or asking a technical question.
              </li>
              <li>
                <strong className="text-foreground">Website data</strong>: IP address, device and browser type,
                referring URL, pages visited, and similar analytics data collected via cookies or server logs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. How we use your information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process orders, arrange shipping and handle after-sales support.</li>
              <li>Respond to quote requests, technical questions and other enquiries.</li>
              <li>Issue invoices, process payments and keep accounting records.</li>
              <li>Improve our website, catalogue and customer experience.</li>
              <li>
                Send transactional emails (order confirmations, dispatch updates, warranty notices) and — where you
                have opted in — occasional product updates or newsletters.
              </li>
              <li>Comply with legal, tax and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Legal basis</h2>
            <p>
              We process personal data where we have a contractual need (to fulfil your order), a legitimate business
              interest (to run, improve and secure our service), your consent (for marketing communications), or a
              legal obligation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies &amp; analytics</h2>
            <p>
              Our website uses cookies and similar technologies to remember your preferences, keep your cart working,
              measure traffic and improve performance. You can disable cookies in your browser settings, though some
              features of the site may not work correctly without them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Who we share information with</h2>
            <p>We share personal information only with parties who need it to deliver our service:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Payment processors to handle your payment securely.</li>
              <li>Shipping carriers and freight forwarders to deliver your order.</li>
              <li>Customs brokers where required for export shipments.</li>
              <li>IT, hosting and analytics providers under appropriate confidentiality terms.</li>
              <li>Regulators, law enforcement or professional advisers where we are legally required.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. International transfers</h2>
            <p>
              Because we serve customers and work with manufacturers across multiple countries, personal data may be
              transferred to, stored in, or accessed from jurisdictions outside Hong Kong. Where this happens, we
              take reasonable steps to ensure it is handled in line with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Data retention</h2>
            <p>
              We keep personal information only for as long as needed to provide our services and meet legal,
              accounting or reporting requirements. Order and invoicing records are typically retained for at least
              seven years. Marketing contact data is kept until you unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Security</h2>
            <p>
              We use reasonable technical and organisational measures to protect personal information against
              unauthorised access, loss or alteration — including HTTPS, access controls and regular backups. No
              method of electronic storage or transmission is 100% secure, but we take the protection of your data
              seriously.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Your rights</h2>
            <p>
              Subject to applicable law (including the Hong Kong Personal Data (Privacy) Ordinance), you have the
              right to ask us to confirm what personal data we hold about you, request a copy, ask us to correct
              inaccuracies, or object to certain processing. To exercise any of these rights, contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Children</h2>
            <p>
              Our website is directed at business buyers and is not intended for children under the age of 18. We do
              not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of
              this page shows when it was last revised. Material changes will be highlighted on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">12. Contact us</h2>
            <p>For any privacy-related question or request, please contact:</p>
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
