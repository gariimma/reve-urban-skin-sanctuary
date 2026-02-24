import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const logos = [
  "Vogue", "Harper's Bazaar", "Allure", "Elle", "Glamour", "Dazed",
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal();

  // Duplicate for seamless marquee
  const allLogos = [...logos, ...logos];

  return (
    <section
      id="trust"
      ref={ref}
      className={`py-14 border-b border-border overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="text-center text-[10px] tracking-[0.35em] uppercase font-sans text-muted-foreground mb-10">
        As Featured In
      </p>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex animate-marquee w-max gap-16 md:gap-24">
          {allLogos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-serif text-2xl md:text-3xl text-foreground/20 tracking-widest whitespace-nowrap hover:text-foreground/50 transition-colors duration-500 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
