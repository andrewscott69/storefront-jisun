import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Support</h1>
        <div className="space-y-3 text-muted-foreground text-lg">
          <p>For support, email us at:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <a href="mailto:support@jinsunmachineries.com" className="hover:underline">support@jinsunmachineries.com</a>
            </li>
            <li>
              <a href="mailto:Jinsunwentoumachineries.hk@gmail.com" className="hover:underline break-all">Jinsunwentoumachineries.hk@gmail.com</a>
            </li>
          </ul>
          <p>Or visit us at 182-190 Tai Lin Pai Road, Kwai Chung, Hong Kong.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
