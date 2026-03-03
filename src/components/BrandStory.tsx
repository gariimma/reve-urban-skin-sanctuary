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
            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-2 md:-right-8 bg-primary text-primary-foreground p-6 md:p-8 shadow-xl rounded-sm max-w-[200px]"
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

            <div className="space-y-5 font-sans text-sm text-muted-foreground leading-relaxed">
              <p>
                We spent a decade studying how pollution accelerates skin aging
                across megacities worldwide. No brand was solving the real problem.
              </p>
              <p>
                RÊVE (French for <em>"dream"</em>) embodies our vision: skin
                so resilient that thriving in any city feels effortless. Korean
                skincare innovation meets French cosmetic elegance in every
                formula.
              </p>
              <p>
                Every product is clinically tested, cruelty-free, and housed in
                refillable vessels designed to minimise waste. Because caring for
                your skin should never cost the planet.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { val: "94%", label: "Barrier improvement" },
                { val: "10+", label: "Years of research" },
                { val: "100%", label: "Vegan & clean" },
              ].map((s, i) => (
                <motion.div
                  key={s.val}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <p className="font-serif text-2xl md:text-3xl text-foreground">
                    {s.val}
                  </p>
                  <p className="text-[10px] md:text-xs font-sans text-muted-foreground mt-1">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
