import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className={`max-w-2xl mx-auto px-6 lg:px-12 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
          Join the revival.
        </h2>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
          Receive skincare insights, early access to new products, and exclusive offers. No spam — just science-backed skin wisdom.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 bg-card border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button variant="hero" size="lg" className="px-8 py-3.5">
            Subscribe
          </Button>
        </form>
        <p className="font-sans text-xs text-muted-foreground/60 mt-4">
          By subscribing, you agree to our privacy policy.
        </p>
      </div>
    </section>
  );
};

export default EmailSignup;
