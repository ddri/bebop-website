import Link from "next/link"
import { Button } from "./ui/button"
import { Github } from "lucide-react"

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
          <Link href="https://docs.bebop.sh" className="text-foreground hover:text-primary">
            Documentation
          </Link>
          <Link href="#community" className="text-foreground hover:text-primary">
            Community
          </Link>
          <Link href="https://github.com/bebop-cms/bebop" className="text-foreground hover:text-primary">
            GitHub
          </Link>
        </nav>
        <Link href="https://github.com/ddri/bebop" className="flex items-center gap-2">
          <Button>
            <Github className="h-4 w-4" />
            <span>Star on GitHub</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}
