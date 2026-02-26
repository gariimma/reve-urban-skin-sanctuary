import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto px-6 lg:px-12 text-center"
      >
        <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-5 md:mb-6">
          Join the revival.
        </h2>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-md mx-auto">
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
            className="flex-1 px-4 md:px-5 py-3 md:py-3.5 bg-card border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button variant="hero" size="lg" className="px-8 py-3 md:py-3.5">
            Subscribe
          </Button>
        </form>
        <p className="font-sans text-xs text-muted-foreground/60 mt-4">
          By subscribing, you agree to our privacy policy.
        </p>
      </motion.div>
    </section>
  );
};

export default EmailSignup;
