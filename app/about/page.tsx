import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About Jinsun Machineries</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Jinsun Machineries is a leading supplier of industrial machinery and equipment, providing quality solutions for
          manufacturing, construction, and industrial applications worldwide.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          With years of experience in the industry, we are committed to delivering reliable, high-performance machinery
          to businesses of all sizes.
        </p>
      </main>
      <Footer />
    </div>
  )
}
