import Image from "next/image"

const testimonials = [
  {
    quote: "Bebop's developer experience is outstanding. The plugin API is a joy to work with.",
    author: "Sarah Chen",
    role: "Open Source Contributor",
  },
  {
    quote: "Finally, a CMS that doesn't get in the way of modern development practices.",
    author: "Marcus Rodriguez",
    role: "Core Maintainer",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Community Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=40&width=40`}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

