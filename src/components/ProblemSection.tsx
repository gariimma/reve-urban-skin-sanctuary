import urbanScene from "@/assets/urban-scene.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stressors = [
  { title: "Air Pollution", description: "PM2.5 particles penetrate deep into skin, causing oxidative stress and premature aging." },
  { title: "Blue Light", description: "Screens emit HEV light that disrupts your skin's natural repair cycle and triggers hyperpigmentation." },
  { title: "Urban Lifestyle", description: "Stress, sleep deprivation, and environmental toxins weaken your skin barrier daily." },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Your city is <em>aging</em> your skin.
            </h2>
            <div className="space-y-8">
              {stressors.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/30 pl-6">
                  <h3 className="font-sans text-sm tracking-[0.1em] uppercase text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={urbanScene} alt="Urban city environment" className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
