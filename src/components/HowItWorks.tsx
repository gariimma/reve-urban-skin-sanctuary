const steps = [
  {
    number: "01",
    title: "Cleanse & Reset",
    description: "Remove urban grime and pollution particles with our gentle yet effective Urban Shield Cleanser. It dissolves impurities without stripping your natural oils.",
  },
  {
    number: "02",
    title: "Treat & Defend",
    description: "Apply our Blue Light Defense Serum to neutralize free radical damage and deliver concentrated actives deep into the skin barrier.",
  },
  {
    number: "03",
    title: "Seal & Protect",
    description: "Lock in hydration and create an invisible shield against environmental aggressors with our Barrier Repair Cream and City Mist Hydrator.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            Your Ritual
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Three steps to urban resilience.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <p className="font-serif text-6xl text-border mb-6">{step.number}</p>
              <h3 className="font-serif text-2xl text-foreground mb-4">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
