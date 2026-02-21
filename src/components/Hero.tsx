import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="RÊVE skincare collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-foreground/70 mb-6">
            Urban Skin Recovery
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-8">
            Built for skin
            <br />
            <em className="font-light">that lives</em>
            <br />
            in the city.
          </h1>
          <p className="font-sans text-base md:text-lg text-foreground/70 max-w-md mb-10 leading-relaxed">
            Clinical-grade formulas that repair pollution damage, block blue light aging, and rebuild your skin barrier — in 3 steps.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="px-10 py-6">
              Shop the Ritual
            </Button>
            <Button variant="hero-outline" size="lg" className="px-10 py-6">
              See the Science
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
