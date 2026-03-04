import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "After two weeks, the dullness I'd been living with for years just vanished. My skin looks like it's actually breathing again.",
    name: "Clara M.",
    initials: "CM",
    location: "London",
    rating: 5,
    product: "Pollution Defense Serum",
    concern: "Dullness & fatigue",
  },
  {
    quote: "I work 12-hour days in front of screens. RÊVE is the first brand that made me feel like my skincare actually understands my life.",
    name: "Yuki T.",
    initials: "YT",
    location: "Tokyo",
    rating: 5,
    product: "Blue Light Repair Cream",
    concern: "Screen-stressed skin",
  },
  {
    quote: "The serum texture is unlike anything I've tried. Lightweight but you can feel it working. My dermatologist noticed the difference.",
    name: "Priya K.",
    initials: "PK",
    location: "Mumbai",
    rating: 5,
    product: "Barrier Recovery Oil",
    concern: "Sensitive & dehydrated",
  },
  {
    quote: "I was skeptical about another skincare brand, but the clinical results speak for themselves. My barrier has never felt this strong.",
    name: "Sophie L.",
    initials: "SL",
    location: "Paris",
    rating: 5,
    product: "Pollution Defense Serum",
    concern: "Pollution damage",
  },
  {
    quote: "Living in NYC, my skin takes a beating. This routine gave me back the glow I thought was gone for good.",
    name: "Marcus R.",
    initials: "MR",
    location: "New York",
    rating: 5,
    product: "Blue Light Repair Cream",
    concern: "Urban stress & dryness",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="relative bg-card border border-border rounded-sm p-6 md:p-8 flex flex-col h-full min-w-[280px] snap-center">
    {/* Decorative quote mark */}
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      className="absolute top-4 right-4 text-border opacity-40"
      aria-hidden
    >
      <path
        d="M0 36V21.6C0 9.6 7.2 2.4 21.6 0L24 4.8C16.8 7.2 13.2 10.8 13.2 15.6H21.6V36H0ZM26.4 36V21.6C26.4 9.6 33.6 2.4 48 0L50.4 4.8C43.2 7.2 39.6 10.8 39.6 15.6H48V36H26.4Z"
        fill="currentColor"
      />
    </svg>

    {/* Stars */}
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < t.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>

    {/* Quote */}
    <p className="font-serif text-sm md:text-base text-foreground leading-relaxed italic mb-6 flex-1">
      "{t.quote}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0">
        <span className="font-sans text-xs font-medium text-foreground">{t.initials}</span>
      </div>
      <div>
        <p className="font-sans text-sm font-medium text-foreground">{t.name}</p>
        <p className="font-sans text-[10px] text-muted-foreground">{t.location} · {t.product}</p>
        <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-[9px] tracking-[0.1em] uppercase font-sans rounded-full">
          {t.concern}
        </span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  // Auto-advance on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            Voices
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            What our clients say
          </h2>
        </div>

        {/* Desktop: 3-column grid */}
        <div className={`hidden lg:grid lg:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile/Tablet: horizontal swipeable carousel */}
        <div className={`lg:hidden relative transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-[80vw] max-w-[340px] flex-shrink-0 snap-center">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => scroll(-1)}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-background/90 backdrop-blur-sm flex items-center justify-center transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => scroll(1)}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border bg-background/90 backdrop-blur-sm flex items-center justify-center transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
