import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The most fun we've had at game night in years! Everyone was laughing so hard.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    quote:
      "Super easy to learn and incredibly entertaining. Perfect for breaking the ice at parties!",
    author: "James T.",
    rating: 5,
  },
  {
    quote:
      "We've played this at three family gatherings now and it's always a hit with everyone.",
    author: "Lisa K.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-[#f0ede7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b]">
              What Players Are Saying
            </h2>
            <p className="max-w-[700px] text-[#8a7d9b] md:text-xl/relaxed">
              Don&apos;t just take our word for it - hear from our happy
              players!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 rounded-lg bg-[#f8f6f2] p-6 shadow-sm"
            >
              <div>
                <div className="flex mb-2">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#f5a3b0] text-[#f5a3b0]"
                      />
                    ))}
                </div>
                <p className="text-[#6a5d7b] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <p className="text-[#8a7d9b] font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
