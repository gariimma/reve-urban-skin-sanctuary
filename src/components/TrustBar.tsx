const logos = [
  "Vogue", "Harper's Bazaar", "Allure", "Elle", "Glamour", "Dazed"
];

const TrustBar = () => {
  return (
    <section className="py-12 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-xs tracking-[0.2em] uppercase font-sans text-muted-foreground mb-8">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="font-serif text-xl md:text-2xl text-muted-foreground/50 tracking-wider"
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
