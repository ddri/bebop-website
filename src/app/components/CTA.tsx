import { Button } from "./ui/button"
import { Github, MessageCircle } from "lucide-react"

export default function CTA() {
  return (
    <section id="community" className="relative w-full py-20 overflow-hidden">
      {/* Existing texture layers remain the same */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "hsl(348, 30%, 75%)",
        }}
      />

      <div className="absolute inset-0 texture-noise mix-blend-overlay" />

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-dark-grey">Join Our Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-grey">
          Bebop is built by content people for content people. Contribute, share ideas, and help shape the future of content management.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-dark-grey text-dark-grey hover:bg-dark-grey/90 flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            Contribute
          </Button>
        </div>
      </div>
    </section>
  )
}

