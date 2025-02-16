import { Check } from "lucide-react"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Basic",
    price: "$19",
    features: ["5 Users", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: "$49",
    features: ["Unlimited Users", "Advanced Analytics", "Priority Support", "API Access"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom Solutions", "Dedicated Account Manager", "On-Premise Option", "24/7 Phone Support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 bg-light-grey text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-dark-grey p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={index === 1 ? "default" : "secondary"}>Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

