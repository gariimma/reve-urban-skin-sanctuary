import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "After two weeks, the dullness I'd been living with for years just... vanished. My skin looks like it's actually breathing again.",
    name: "Clara M.",
    location: "London",
    rating: 5,
    product: "Pollution Defense Serum",
  },
  {
    quote: "I work 12-hour days in front of screens. RÊVE is the first brand that made me feel like my skincare actually understands my life.",
    name: "Yuki T.",
    location: "Tokyo",
    rating: 5,
    product: "Blue Light Repair Cream",
  },
  {
    quote: "The serum texture is unlike anything I've tried — lightweight but you can feel it working. My dermatologist noticed the difference.",
    name: "Priya K.",
    location: "Mumbai",
    rating: 4,
    product: "Barrier Recovery Oil",
  },
  {
    quote: "I was skeptical about another skincare brand, but the clinical results speak for themselves. My barrier has never felt this strong.",
    name: "Sophie L.",
    location: "Paris",
    rating: 5,
    product: "Pollution Defense Serum",
  },
  {
    quote: "Living in NYC, my skin takes a beating. This routine gave me back the glow I thought was gone for good.",
    name: "Marcus R.",
    location: "New York",
    rating: 5,
    product: "Blue Light Repair Cream",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
  };

  const sideIndex = (offset: number) =>
    (active + offset + testimonials.length) % testimonials.length;

  return (
    <section ref={ref} className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            Voices
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            What our clients say
          </h2>
        </div>

        <div className={`relative flex items-center justify-center min-h-[320px] md:min-h-[360px] transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Side cards (desktop only) */}
          <div className="hidden lg:block absolute left-0 w-64 xl:w-72">
            <div className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-6 opacity-40 scale-90">
              <p className="font-serif text-sm text-foreground leading-relaxed italic line-clamp-4">
                "{testimonials[sideIndex(-1)].quote}"
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-4">
                {testimonials[sideIndex(-1)].name} — {testimonials[sideIndex(-1)].location}
              </p>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 w-64 xl:w-72">
            <div className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-6 opacity-40 scale-90">
              <p className="font-serif text-sm text-foreground leading-relaxed italic line-clamp-4">
                "{testimonials[sideIndex(1)].quote}"
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-4">
                {testimonials[sideIndex(1)].name} — {testimonials[sideIndex(1)].location}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 lg:left-[280px] xl:left-[300px] z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 lg:right-[280px] xl:right-[300px] z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </button>

          {/* Center card */}
          <div className="w-full max-w-md lg:max-w-lg mx-12 md:mx-16 lg:mx-0">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-background border border-border rounded-lg p-8 md:p-10 shadow-lg text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[active].rating
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic mb-8">
                  "{testimonials[active].quote}"
                </p>

                <div>
                  <p className="font-sans text-sm font-medium text-foreground">
                    {testimonials[active].name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground mt-1">
                    {testimonials[active].location} · {testimonials[active].product}
                  </p>
                </div>

                {/* Decorative quote mark */}
                <div className="flex justify-center mt-6">
                  <svg width="32" height="24" viewBox="0 0 32 24" className="text-accent">
                    <path
                      d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.8 8.8 7.2 8.8 10.4H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.8 26.4 7.2 26.4 10.4H32V24H17.6Z"
                      fill="currentColor"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
