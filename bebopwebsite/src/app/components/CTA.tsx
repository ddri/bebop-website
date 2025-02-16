import { Button } from "./ui/button"

export default function CTA() {
  return (
    <section className="w-full py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Harmonize Your Content?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of content creators and take your content management to the next level with Bebop CMS.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

