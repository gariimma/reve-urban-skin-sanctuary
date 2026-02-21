const testimonials = [
  {
    quote: "After two weeks, the dullness I'd been living with for years just... vanished. My skin looks like it's actually breathing again.",
    name: "Clara M.",
    location: "London",
  },
  {
    quote: "I work 12-hour days in front of screens. RÊVE is the first brand that made me feel like my skincare actually understands my life.",
    name: "Yuki T.",
    location: "Tokyo",
  },
  {
    quote: "The serum texture is unlike anything I've tried — lightweight but you can feel it working. My dermatologist noticed the difference.",
    name: "Priya K.",
    location: "Mumbai",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
            Voices
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Real skin, real results.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="border-t border-border pt-8">
              <p className="font-serif text-lg text-foreground leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-sm text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
