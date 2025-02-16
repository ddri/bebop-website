import { FileText, Globe, Zap } from "lucide-react"

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Intuitive Content Editor",
    description: "Create and edit content with our user-friendly, drag-and-drop interface.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Multi-channel Publishing",
    description: "Publish your content across various platforms with a single click.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning-fast Performance",
    description: "Optimized for speed, ensuring quick load times and seamless user experience.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-light-grey text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-grey p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

