import { Users, Clock, Sparkles } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 bg-[#f0ede7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">
              What Makes It Great
            </h2>
            <p className="max-w-[700px] text-[#8a7d9b] md:text-xl/relaxed">
              Between the Lines is built for quick laughs, clever clues, and
              unforgettable rounds with your crew. Easy to start, hard to stop.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-3 rounded-lg bg-[#f8f6f2] p-6 shadow-sm">
            <div className="rounded-full bg-[#e8d7f5] p-3">
              <Users className="h-6 w-6 text-[#6a5d7b]" />
            </div>
            <h3 className="text-xl font-bold text-[#6a5d7b]">
              Jump In With Friends
            </h3>
            <p className="text-center text-[#8a7d9b]">
              Works best with 3–10 players. No app needed—just open the browser
              and you're in.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg bg-[#f8f6f2] p-6 shadow-sm">
            <div className="rounded-full bg-[#a5dcd0] p-3">
              <Clock className="h-6 w-6 text-[#6a5d7b]" />
            </div>
            <h3 className="text-xl font-bold text-[#6a5d7b]">
              Learn in Minutes
            </h3>
            <p className="text-center text-[#8a7d9b]">
              One-word clues, one grid, lots of laughs. You’ll get it by round
              one.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg bg-[#f8f6f2] p-6 shadow-sm">
            <div className="rounded-full bg-[#f5a3b0] p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#6a5d7b]">Always Fresh</h3>
            <p className="text-center text-[#8a7d9b]">
              With 300+ unique combos, no two rounds feel the same. You’ll want
              one more game—every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
