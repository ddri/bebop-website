import Link from "next/link"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Bebop
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-foreground hover:text-primary">
            Pricing
          </Link>
        </nav>
        <Button>Try for Free</Button>
      </div>
    </header>
  )
}

