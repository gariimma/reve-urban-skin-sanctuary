import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Pollution\nDefense Serum",
    description: "Shields skin from PM2.5 particles, blue light, and environmental aggressors with our Urban Shield Complex™.",
    price: "$68",
    index: "01",
    total: "03",
    image: product1,
    slug: "pollution-defense-serum",
  },
  {
    id: 2,
    name: "Blue Light\nRepair Cream",
    description: "Reverses screen-induced oxidative stress and rebuilds your moisture barrier overnight.",
    price: "$74",
    index: "02",
    total: "03",
    image: product2,
    slug: "blue-light-repair-cream",
  },
  {
    id: 3,
    name: "Barrier\nRecovery Oil",
    description: "Cold-pressed botanicals rebuild your skin's natural defense system while you sleep.",
    price: "$82",
    index: "03",
    total: "03",
    image: product3,
    slug: "barrier-recovery-oil",
  },
];

const ROTATION_INTERVAL = 3500;

const Shop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + products.length) % products.length;
    const configs: Record<number, { x: number; rotate: number; scale: number; z: number; opacity: number }> = {
      0: { x: 0, rotate: 0, scale: 1, z: 40, opacity: 1 },
      1: { x: 280, rotate: 8, scale: 0.88, z: 30, opacity: 0.85 },
      2: { x: -280, rotate: -8, scale: 0.88, z: 30, opacity: 0.85 },
    };
    return configs[diff] || configs[1];
  };

  return (
    <div className="min-h-screen bg-[#0f1a0f] relative overflow-hidden scrollbar-hide">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(140 30% 15%) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(150 20% 12%) 0%, transparent 50%)",
          }}
        />
      </div>

      <nav className="relative z-50 flex items-center justify-between px-6 md:px-16 py-5 md:py-6">
        <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-sans tracking-wide">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </Link>
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-white">RÊVE</span>
        </Link>
        <div className="w-16" />
      </nav>

      <div className="relative z-10 text-center mt-4 md:mt-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-[11px] tracking-[0.4em] uppercase font-sans mb-3"
        >
          The Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light"
        >
          Urban Rituals
        </motion.h1>
      </div>

      {/* Desktop carousel */}
      <div
        className="relative z-10 hidden md:flex items-center justify-center mt-10 md:mt-16 pb-20"
        style={{ perspective: "1200px", minHeight: "520px" }}
      >
        <div className="relative" style={{ width: "320px", height: "460px" }}>
          {products.map((product, index) => {
            const style = getCardStyle(index);
            return (
              <motion.div
                key={product.id}
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                animate={{
                  x: style.x,
                  rotate: style.rotate,
                  scale: style.scale,
                  opacity: style.opacity,
                  zIndex: style.z,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
                onClick={() => { setActiveIndex(index); setIsAutoPlaying(false); }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/product/${product.slug}`} className="block w-full h-full">
                  <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                    <div className="relative h-[55%] overflow-hidden bg-[#f5f0eb]">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-xl leading-tight text-[#1a1a1a] whitespace-pre-line">{product.name}</h3>
                        <p className="text-[12px] text-[#777] font-sans leading-relaxed mt-2 line-clamp-3">{product.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm font-sans font-medium text-[#1a1a1a]">{product.price}</span>
                        <span className="border border-[#1a1a1a] rounded-full px-5 py-1.5 text-[11px] tracking-[0.15em] uppercase font-sans text-[#1a1a1a]">
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile list */}
      <div className="md:hidden px-6 mt-8 pb-12 space-y-6">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <Link to={`/product/${product.slug}`} className="block bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-[#1a1a1a]">{product.name.replace("\n", " ")}</h3>
                <p className="text-[12px] text-[#777] font-sans mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-sans text-sm font-medium text-[#1a1a1a]">{product.price}</span>
                  <span className="text-[11px] tracking-[0.15em] uppercase font-sans text-[#1a1a1a] border border-[#1a1a1a] rounded-full px-4 py-1">Explore</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop dots */}
      <div className="relative z-10 hidden md:flex justify-center gap-3 pb-12">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveIndex(i); setIsAutoPlaying(false); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
