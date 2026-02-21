import skinTexture from "@/assets/skin-texture.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="science" ref={ref} className="py-24 md:py-32">
      <div className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <img src={skinTexture} alt="Skin barrier close-up" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
              The Science
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Skin barrier repair, <em>reimagined.</em>
            </h2>
            <div className="space-y-6 font-sans text-sm text-muted-foreground leading-relaxed">
              <p>
                Your skin barrier is a living ecosystem — a delicate matrix of ceramides, fatty acids, and beneficial microbes that shields you from the outside world.
              </p>
              <p>
                Urban environments assault this barrier daily. Our formulations use biomimetic ceramide complexes and adaptogenic botanicals to restore what the city takes away.
              </p>
              <p>
                Every RÊVE product is built around our proprietary Urban Shield Complex™ — a blend of niacinamide, astaxanthin, and fermented rice extract that neutralizes free radicals and strengthens the barrier from within.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl text-foreground">94%</p>
                <p className="text-xs font-sans text-muted-foreground mt-1">Barrier improvement in 4 weeks</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">3x</p>
                <p className="text-xs font-sans text-muted-foreground mt-1">More antioxidant protection</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">100%</p>
                <p className="text-xs font-sans text-muted-foreground mt-1">Clean, vegan ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
