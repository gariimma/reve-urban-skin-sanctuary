import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const logos = [
  "Vogue",
  "Harper's Bazaar",
  "Allure",
  "Elle",
  "Glamour",
  "Dazed",
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-12 md:py-16 bg-background border-y border-border">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-8 md:mb-10">
          As featured in
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="font-serif text-lg md:text-2xl text-foreground/60 hover:text-foreground transition-colors duration-300"
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
