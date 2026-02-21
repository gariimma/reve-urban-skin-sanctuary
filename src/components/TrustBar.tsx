import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const logos = [
  "Vogue", "Harper's Bazaar", "Allure", "Elle", "Glamour", "Dazed"
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-12 border-b border-border transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-xs tracking-[0.2em] uppercase font-sans text-muted-foreground mb-8">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((name) => (
            <span key={name} className="font-serif text-xl md:text-2xl text-muted-foreground/50 tracking-wider">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
