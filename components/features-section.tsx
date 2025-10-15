import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Headphones, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free delivery on orders over $5,000",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "2-year warranty on all equipment",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert technical assistance anytime",
  },
  {
    icon: Award,
    title: "Certified Equipment",
    description: "ISO certified industrial machinery",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-transparent">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
