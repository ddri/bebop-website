import Image from "next/image"

const testimonials = [
  {
    quote: "Bebop has revolutionized our content workflow. It's an indispensable tool for our team.",
    author: "Jane Doe",
    company: "Tech Blog Inc.",
  },
  {
    quote: "The ease of use and powerful features of Bebop CMS have significantly boosted our productivity.",
    author: "John Smith",
    company: "Digital Media Ltd.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-grey text-white p-6 rounded-lg shadow-md">
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
                  <p className="text-sm text-gray-300">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

