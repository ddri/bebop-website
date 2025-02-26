import { Code2, Puzzle, Zap, Lock } from "lucide-react"

const features = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Developer First",
    description: "Built with TypeScript and React, Bebop integrates seamlessly with your modern development workflow.",
  },
  {
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    title: "Extensible",
    description: "Create custom plugins and extend functionality with a powerful, well-documented API.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized for speed with static site generation and incremental builds.",
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Self-hosted",
    description: "Keep full control of your data by hosting Bebop on your own infrastructure.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bebop?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

