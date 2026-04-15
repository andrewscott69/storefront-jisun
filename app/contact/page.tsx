import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="space-y-4 text-muted-foreground text-lg">
          <p><strong className="text-foreground">Address:</strong> 182-190 Tai Lin Pai Road, Kwai Chung, Hong Kong</p>
          <p>
            <strong className="text-foreground">Email:</strong>{" "}
            <a href="mailto:support@jinsunmachineries.com" className="hover:underline">support@jinsunmachineries.com</a>
          </p>
          <p>
            <strong className="text-foreground">Email:</strong>{" "}
            <a href="mailto:Jinsunwentoumachineries.hk@gmail.com" className="hover:underline break-all">Jinsunwentoumachineries.hk@gmail.com</a>
          </p>
          <p><strong className="text-foreground">Hours:</strong> Mon–Fri 8:00 AM – 6:00 PM, Sat 9:00 AM – 4:00 PM</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
