import Link from "next/link";
import { Button } from "./ui/button";
import { Github, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-20 bg-dark-grey text-white overflow-hidden">
      {/* Base color layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "hsl(348, 30%, 75%)",
        }}
      />

      {/* Existing texture layers remain the same */}
      <div className="absolute inset-0 texture-noise mix-blend-overlay" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 2%),
            radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 0.1) 0%, transparent 2%),
            radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.1) 0%, transparent 2%),
            radial-gradient(circle at 0% 100%, rgba(0, 0, 0, 0.1) 0%, transparent 2%),
            radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0.1) 0%, transparent 2%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px, 40px 40px",
          backgroundPosition: "0 0, 20px 20px, -20px 20px, 20px -20px, -20px -20px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <Link href="https://github.com/ddri/bebop/releases/tag/v0.2.3" passHref legacyBehavior>
          <div className="inline-flex items-center gap-2 bg-dark-grey/10 px-4 py-1 rounded-full text-dark-grey text-sm mb-6">
            <span className="font-medium">v0.2.3 is now available</span>
            <span className="text-dark-grey/60">→</span>
          </div>
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark-grey">
          Content management for content people
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-grey">
          Bebop is an opinionated and open source CMS built for content campaigns.
          Write once, publish everywhere, and track everything.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="https://github.com/ddri/bebop" passHref legacyBehavior>
            <Button
              size="lg"
              variant="secondary"
              className="bg-dark-grey text-dark-grey hover:bg-dark-grey/90 flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              Get Started
            </Button>
          </Link>
          {/* Optional Read Docs button - same Link pattern applies */}
          {/* <Link href="/docs" passHref legacyBehavior> 
            <Button
              size="lg"
              variant="outline"
              className="bg-white/80 border-dark-grey text-dark-grey hover:bg-white flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Read Docs
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}