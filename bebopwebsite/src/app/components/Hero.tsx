import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="w-full py-20 bg-dark-grey text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Manage Content with Rhythm</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Bebop CMS harmonizes your content workflow, making creation, management, and publishing a breeze.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

