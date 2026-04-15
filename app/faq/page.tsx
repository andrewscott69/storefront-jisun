import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-lg">FAQ content coming soon.</p>
      </main>
      <Footer />
    </div>
  )
}
