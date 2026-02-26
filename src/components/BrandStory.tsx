import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase font-sans opacity-60 mb-6">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 md:mb-10">
            Born in Seoul. <br className="hidden md:block" />
            <em>Formulated</em> for every city.
          </h2>
          <div className="max-w-2xl mx-auto space-y-5 md:space-y-6 font-sans text-sm leading-relaxed opacity-80">
            <p>
              RÊVE was founded in 2021 by a dermatologist and a cosmetic chemist who spent a decade studying how urban pollution accelerates skin aging across megacities worldwide.
            </p>
            <p>
              Our name — French for "dream" — embodies our vision: skin so healthy, so resilient, that thriving in any city feels effortless. We merge Korean skincare innovation with French cosmetic elegance.
            </p>
            <p>
              Every formula is clinically tested, cruelty-free, and packaged in refillable vessels designed to minimize waste.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
