import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
// 1. Import the Link component from next/link
import Link from 'next/link' 

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-industrial-machinery-factory-floor-with-adv.jpg"
          alt="Industrial machinery background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="block text-balance">Power Your</span>
            <span className="block text-balance">Production</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            {
              "Discover premium industrial machinery and equipment designed to elevate your manufacturing capabilities. From precision tools to heavy-duty systems."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* 2. Replace the Button component with the Link component */}
            <Link href="/products" passHref legacyBehavior>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* If you had a second button, it would go here */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
