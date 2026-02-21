import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BrandStory = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="story" ref={ref} className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className={`max-w-4xl mx-auto px-6 lg:px-12 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs tracking-[0.3em] uppercase font-sans opacity-60 mb-6">
          Our Story
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-10">
          Born in Seoul. <br className="hidden md:block" />
          <em>Formulated</em> for every city.
        </h2>
        <div className="max-w-2xl mx-auto space-y-6 font-sans text-sm leading-relaxed opacity-80">
          <p>
            RÊVE was founded in 2021 by a dermatologist and a cosmetic chemist who spent a decade studying how urban pollution accelerates skin aging across megacities worldwide.
          </p>
          <p>
            Our name — French for "dream" — embodies our vision: skin so healthy, so resilient, that thriving in any city feels effortless. We merge Korean skincare innovation with French cosmetic elegance to create products that work as beautifully as they feel.
          </p>
          <p>
            Every formula is clinically tested, cruelty-free, and packaged in refillable vessels designed to minimize waste. Because caring for your skin shouldn't cost the earth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
