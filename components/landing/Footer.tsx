import Link from "next/link";
import { Sparkles, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e8e4dc] bg-[#f8f6f2] py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#f5a3b0]" />
              <span className="font-bold text-lg text-[#6a5d7b]">
                BetweenLines
              </span>
            </div>
            <p className="text-sm text-[#8a7d9b]">
              A chill party game built by two friends with a love for party
              games and cool ideas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#6a5d7b]">
                About the Game
              </h3>
              <ul className="space-y-1">
                <li>
                  <span className="text-sm text-[#8a7d9b]">
                    Free to play, no accounts, just vibes.
                  </span>
                </li>
                <li>
                  <span className="text-sm text-[#8a7d9b]">
                    Made with 😃 by João and Vini.
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#6a5d7b]">GitHub</h3>
              <div className="flex flex-col space-y-1">
                <Link
                  href="https://github.com/jnzinho"
                  className="flex items-center gap-2 text-sm text-[#8a7d9b] hover:text-[#f5a3b0]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  João's GitHub
                </Link>
                <Link
                  href="https://github.com/lemesvini"
                  className="flex items-center gap-2 text-sm text-[#8a7d9b] hover:text-[#f5a3b0]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Bruno's GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#e8e4dc] pt-6 md:flex-row">
          <p className="text-xs text-[#8a7d9b]">
            © {new Date().getFullYear()} BetweenLines. Just a fun thing, not a
            company.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-[#8a7d9b] hover:text-[#f5a3b0]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-[#8a7d9b] hover:text-[#f5a3b0]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
