import { motion } from "framer-motion";
import urbanScene from "@/assets/urban-scene.jpg";

const BrandStory = () => {
  return (
    <section id="story" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={urbanScene}
                alt="City skyline at golden hour, where RÊVE skincare was born"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating stat — frosted glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-2 md:-right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 md:p-8 shadow-xl rounded-sm max-w-[200px]"
            >
              <p className="font-serif text-3xl md:text-4xl">2021</p>
              <p className="text-[11px] font-sans mt-1 opacity-80">
                Founded in Seoul by a dermatologist &amp; a cosmetic chemist
              </p>
            </motion.div>
          </motion.div>

          {/* Story copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground mb-6">
              Born in Seoul. <br className="hidden md:block" />
              <em>Formulated</em> for every city.
            </h2>

            {/* Single tight paragraph instead of three */}
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-lg">
              We spent a decade studying how pollution ages skin across
              megacities. RÊVE merges Korean skincare innovation with French
              cosmetic elegance to create formulas that are clinically tested,
              cruelty-free, and housed in refillable vessels. Because caring
              for your skin should never cost the planet.
            </p>

            {/* Stats — larger, with divider */}
            <div className="mt
