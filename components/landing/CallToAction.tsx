import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import playingcards from "@/public/playing-cards.svg";

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">
              Ready to Read Between the Lines?
            </h2>
            <p className="text-[#8a7d9b] md:text-xl">
              It’s free, it’s fast, and it’s ridiculously fun. Create a room,
              send the link, and start guessing clues together — no downloads or
              accounts.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#f5a3b0]" />
                <span className="text-[#8a7d9b]">
                  Over 500 word-based clues
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#f5a3b0]" />
                <span className="text-[#8a7d9b]">
                  Play with 3–8 friends in real time
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#f5a3b0]" />
                <span className="text-[#8a7d9b]">
                  One click to start — no signups
                </span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-[#f5a3b0] hover:bg-[#f5a3b0]/90 text-white cursor-pointer">
                Create Room
              </Button>
              <Button
                variant="outline"
                className="border-[#e8d7f5] text-[#6a5d7b] cursor-pointer"
              >
                Join Room
              </Button>
            </div>
          </div>
          <div className="relative h-[350px]">
            <Image
              src={playingcards}
              alt="Between The Lines Game Components"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
