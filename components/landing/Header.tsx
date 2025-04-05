import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#e8e4dc] w-full">
      <Link href="/" className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-[#f5a3b0]" />
        <span className="font-bold text-xl text-[#6a5d7b]">
          Between The Lines
        </span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#features"
          className="text-[#6a5d7b] hover:text-[#f5a3b0] transition-colors"
        >
          Features
        </Link>
        <Link
          href="#how-to-play"
          className="text-[#6a5d7b] hover:text-[#f5a3b0] transition-colors"
        >
          How to Play
        </Link>
        <Link
          href="#testimonials"
          className="text-[#6a5d7b] hover:text-[#f5a3b0] transition-colors"
        >
          Reviews
        </Link>
      </nav>
      <Button className="bg-[#f5a3b0] hover:bg-[#f5a3b0]/90 text-white cursor-pointer">
        Play Now
      </Button>
    </header>
  );
}
