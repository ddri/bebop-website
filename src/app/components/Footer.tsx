import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-dark-grey text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bebop</h3>
            <p className="text-sm">Open source content management for the modern web</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Project</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://github.com/ddri/bebop">GitHub</Link>
              </li>
              <li>
                <Link href="https://docs.bebop.sh">Documentation</Link>
              </li>
              <li>
                <Link href="https://github.com/bebop-cms/bebop/releases">Releases</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://github.com/ddri/bebop/blob/main/CONTRIBUTING.md">Contributing</Link>
              </li>
              <li>
                <Link href="https://bsky.app/profile/davidryan.bsky.social">Twitter</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com/ddri/bebop" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://bsky.app/profile/davidryan.bsky.social" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bebop CMS. Released under the AGPL-3.0 license.</p>
        </div>
      </div>
    </footer>
  )
}

