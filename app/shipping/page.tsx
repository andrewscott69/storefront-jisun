import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Shipping Info</h1>
        <p className="text-muted-foreground text-lg">Shipping information coming soon.</p>
      </main>
      <Footer />
    </div>
  )
}
