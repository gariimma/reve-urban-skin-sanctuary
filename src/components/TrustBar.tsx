import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const logos = [
  {
    name: "Vogue",
    svg: (
      <svg viewBox="0 0 120 30" className="h-6 md:h-8 w-auto fill-current">
        <text x="0" y="24" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="28" fontWeight="600" letterSpacing="4">VOGUE</text>
      </svg>
    ),
  },
  {
    name: "Harper's Bazaar",
    svg: (
      <svg viewBox="0 0 200 30" className="h-6 md:h-8 w-auto fill-current">
        <text x="0" y="24" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="22" fontWeight="400" letterSpacing="3">HARPER'S BAZAAR</text>
      </svg>
    ),
  },
  {
    name: "Allure",
    svg: (
      <svg viewBox="0 0 110 30" className="h-6 md:h-8 w-auto fill-current">
        <text x="0" y="24" fontFamily="'Inter', sans-serif" fontSize="24" fontWeight="300" letterSpacing="6">ALLURE</text>
      </svg>
    ),
  },
  {
    name: "Elle",
    svg: (
      <svg viewBox="0 0 80 30" className="h-6 md:h-8 w-auto fill-current">
        <text x="0" y="25" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="30" fontWeight="700" letterSpacing="2">ELLE</text>
      </svg>
    ),
  },
  {
    name: "Glamour",
    svg: (
      <svg viewBox="0 0 150 30" className="h-6 md:h-8 w-auto fill-current">
        <text x="0" y="24" fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="400" letterSpacing="5">GLAMOUR</text>
      </svg>
    ),
  },
  {
    name: "Dazed",
    svg: (
      <svg viewBox="0 0 100 30" className="h-6 md:h-8 w-auto fill-current">
        <text x="0" y="24" fontFamily="'Inter', sans-serif" fontSize="24" fontWeight="500" letterSpacing="4">DAZED</text>
      </svg>
    ),
  },
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal();

  const allLogos = [...logos, ...logos];

  return (
    <section
      id="trust"
      ref={ref}
      className={`py-12 md:py-16 border-b border-border overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className="text-center text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-sans text-muted-foreground mb-8 md:mb-12">
        As Featured In
      </p>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee w-max gap-12 md:gap-20 items-center">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="text-foreground/25 hover:text-foreground/60 transition-colors duration-500 cursor-default select-none flex-shrink-0"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
