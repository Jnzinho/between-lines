import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Clock, Sparkles, ChevronRight, Star, Instagram, Twitter, Facebook } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f6f2] scroll-smooth">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#e8e4dc]">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-[#f5a3b0]" />
          <span className="font-bold text-xl text-[#6a5d7b]">BetweenLines</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-[#6a5d7b] hover:text-[#f5a3b0] transition-colors">
            Features
          </Link>
          <Link href="#how-to-play" className="text-[#6a5d7b] hover:text-[#f5a3b0] transition-colors">
            How to Play
          </Link>
          <Link href="#testimonials" className="text-[#6a5d7b] hover:text-[#f5a3b0] transition-colors">
            Reviews
          </Link>
        </nav>
        <Button className="bg-[#f5a3b0] hover:bg-[#f5a3b0]/90 text-white">Play Now</Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#e8d7f5] px-3 py-1 text-sm text-[#6a5d7b]">
                  The Ultimate Party Game
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6a5d7b]">
                  Bring the Fun to Any Gathering with BetweenLines
                </h1>
                <p className="text-[#8a7d9b] md:text-xl">
                  The hilarious free browser-based party game that brings friends and family together for unforgettable
                  moments of laughter and fun.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-[#a5dcd0] hover:bg-[#a5dcd0]/90 text-[#6a5d7b] font-medium">
                    Create Room <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#e8d7f5] text-[#6a5d7b]">
                    Join Room
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="https://i.imgur.com/QqxYdNL.png"
                  alt="BetweenLines Game Box"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-[#f0ede7]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">
                  Why You&apos;ll Love BetweenLines
                </h2>
                <p className="max-w-[700px] text-[#8a7d9b] md:text-xl/relaxed">
                  Designed for endless fun and memorable moments with friends and family.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 rounded-lg bg-[#f8f6f2] p-6 shadow-sm">
                <div className="rounded-full bg-[#e8d7f5] p-3">
                  <Users className="h-6 w-6 text-[#6a5d7b]" />
                </div>
                <h3 className="text-xl font-bold text-[#6a5d7b]">For Everyone</h3>
                <p className="text-center text-[#8a7d9b]">
                  Perfect for 3-10 players. Play directly in your browser!
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg bg-[#f8f6f2] p-6 shadow-sm">
                <div className="rounded-full bg-[#a5dcd0] p-3">
                  <Clock className="h-6 w-6 text-[#6a5d7b]" />
                </div>
                <h3 className="text-xl font-bold text-[#6a5d7b]">Quick to Learn</h3>
                <p className="text-center text-[#8a7d9b]">
                  Learn in under 2 minutes, play for hours. Simple rules, endless possibilities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg bg-[#f8f6f2] p-6 shadow-sm">
                <div className="rounded-full bg-[#f5a3b0] p-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#6a5d7b]">Endless Fun</h3>
                <p className="text-center text-[#8a7d9b]">With 300+ unique cards, no two games are ever the same.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-play" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">How to Play</h2>
                <p className="text-[#8a7d9b] md:text-xl">
                  It&apos;s as easy as 1-2-3! Get ready for non-stop laughter and fun.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-[#f5a3b0] text-white font-bold h-8 w-8 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6a5d7b]">Create a Room</h3>
                      <p className="text-[#8a7d9b]">Create a game room and share the link with your friends.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-[#a5dcd0] text-[#6a5d7b] font-bold h-8 w-8 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6a5d7b]">Join the Fun</h3>
                      <p className="text-[#8a7d9b]">
                        Players join your room and the game begins with fun challenges for everyone.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-[#e8d7f5] text-[#6a5d7b] font-bold h-8 w-8 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-[#6a5d7b]">Score Points</h3>
                      <p className="text-[#8a7d9b]">Earn points for successful challenges. First to 20 points wins!</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-[#a5dcd0] hover:bg-[#a5dcd0]/90 text-[#6a5d7b] mt-4">View Game Rules</Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://i.imgur.com/0Ug5Hy5.png"
                  alt="Friends playing BetweenLines"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 bg-[#f0ede7]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">
                  What Players Are Saying
                </h2>
                <p className="max-w-[700px] text-[#8a7d9b] md:text-xl/relaxed">
                  Don&apos;t just take our word for it - hear from our happy players!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  quote: "The most fun we've had at game night in years! Everyone was laughing so hard.",
                  author: "Sarah M.",
                  rating: 5,
                },
                {
                  quote: "Super easy to learn and incredibly entertaining. Perfect for breaking the ice at parties!",
                  author: "James T.",
                  rating: 5,
                },
                {
                  quote: "We've played this at three family gatherings now and it's always a hit with everyone.",
                  author: "Lisa K.",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between space-y-4 rounded-lg bg-[#f8f6f2] p-6 shadow-sm"
                >
                  <div>
                    <div className="flex mb-2">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#f5a3b0] text-[#f5a3b0]" />
                        ))}
                    </div>
                    <p className="text-[#6a5d7b] italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <p className="text-[#8a7d9b] font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">
                  Ready to Start Playing?
                </h2>
                <p className="text-[#8a7d9b] md:text-xl">
                  BetweenLines is completely free to play! Create a room and invite your friends to join the fun.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#f5a3b0]" />
                    <span className="text-[#8a7d9b]">300+ unique challenge prompts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#f5a3b0]" />
                    <span className="text-[#8a7d9b]">Perfect for 3-10 players online</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#f5a3b0]" />
                    <span className="text-[#8a7d9b]">No account or download required</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-[#f5a3b0] hover:bg-[#f5a3b0]/90 text-white">Create Room</Button>
                  <Button variant="outline" className="border-[#e8d7f5] text-[#6a5d7b]">
                    Join Room
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="https://i.imgur.com/5iIcHdS.png"
                  alt="BetweenLines Game Components"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-[#e8e4dc] bg-[#f8f6f2] py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#f5a3b0]" />
                <span className="font-bold text-lg text-[#6a5d7b]">BetweenLines</span>
              </div>
              <p className="text-sm text-[#8a7d9b]">
                Bringing friends and family together through online laughter and fun.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[#6a5d7b]">Company</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm text-[#8a7d9b] hover:text-[#f5a3b0]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-[#8a7d9b] hover:text-[#f5a3b0]">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-[#8a7d9b] hover:text-[#f5a3b0]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[#6a5d7b]">Connect with us</h3>
                <div className="flex space-x-3">
                  <Link href="#" className="text-[#8a7d9b] hover:text-[#f5a3b0]">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-[#8a7d9b] hover:text-[#f5a3b0]">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-[#8a7d9b] hover:text-[#f5a3b0]">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#e8e4dc] pt-6 md:flex-row">
            <p className="text-xs text-[#8a7d9b]">© 2023 BetweenLines. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-[#8a7d9b] hover:text-[#f5a3b0]">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-[#8a7d9b] hover:text-[#f5a3b0]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
