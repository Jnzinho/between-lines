import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import selectplayersvg from "@/public/select-player.svg";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#e8d7f5] px-3 py-1 text-sm text-[#6a5d7b]">
              Online, Free, and Made for Laughs
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6a5d7b]">
              A Word-Guessing Game Where Everyone’s In On The Clue
            </h1>
            <p className="text-[#8a7d9b] md:text-xl">
              Between the Lines is a fast, cooperative game where one player
              gives a one-word clue, and the rest try to guess the right spot on
              a grid by thinking out loud and making connections. It’s all about
              clever hints, group thinking, and that satisfying moment when
              everyone just clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#a5dcd0] hover:bg-[#a5dcd0]/90 text-[#6a5d7b] font-medium cursor-pointer">
                Create Room <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#e8d7f5] text-[#6a5d7b] cursor-pointer"
              >
                Join Room
              </Button>
            </div>
          </div>
          <div className="relative h-[350px] rounded-xl overflow-hidden">
            <Image
              src={selectplayersvg}
              alt="BetweenLines Game Box"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
