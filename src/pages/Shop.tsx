import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Pollution\nDefense Serum",
    description:
      "Shields skin from PM2.5 particles, blue light, and environmental aggressors with our Urban Shield Complex™.",
    price: "$68",
    index: "01",
    total: "04",
    image: product1,
    cta: "Explore",
  },
  {
    id: 2,
    name: "Blue Light\nRepair Cream",
    description:
      "Reverses screen-induced oxidative stress and rebuilds your moisture barrier overnight.",
    price: "$74",
    index: "02",
    total: "04",
    image: product2,
    cta: "Explore",
  },
  {
    id: 3,
    name: "Barrier\nRecovery Oil",
    description:
      "Cold-pressed botanicals rebuild your skin's natural defense system while you sleep.",
    price: "$82",
    index: "03",
    total: "04",
    image: product3,
    cta: "Explore",
  },
  {
    id: 4,
    name: "Urban\nCleanser",
    description:
      "Gentle yet effective daily cleanser that removes city grime without stripping your barrier.",
    price: "$48",
    index: "04",
    total: "04",
    image: product4,
    cta: "Explore",
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

    // Position cards in a fan/circular arrangement
    const configs: Record<number, { x: number; rotate: number; scale: number; z: number; opacity: number }> = {
      0: { x: 0, rotate: 0, scale: 1, z: 40, opacity: 1 },       // center (active)
      1: { x: 280, rotate: 8, scale: 0.88, z: 30, opacity: 0.85 },  // right
      2: { x: 140, rotate: 14, scale: 0.75, z: 10, opacity: 0.4 },  // far right (behind)
      3: { x: -280, rotate: -8, scale: 0.88, z: 30, opacity: 0.85 }, // left
    };

    const cfg = configs[diff] || configs[2];
    return cfg;
  };

  return (
    <div className="min-h-screen bg-[#0f1a0f] relative overflow-hidden">
      {/* Organic background texture */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, hsl(140 30% 15%) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(150 20% 12%) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Top nav */}
      <nav className="relative z-50 flex items-center justify-between px-8 md:px-16 py-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-sans tracking-wide"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-white">
            RÊVE
          </span>
        </Link>

        <div className="w-16" />
      </nav>

      {/* Page heading */}
      <div className="relative z-10 text-center mt-6 md:mt-10">
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
          className="font-serif text-4xl md:text-6xl text-white font-light"
        >
          Urban Rituals
        </motion.h1>
      </div>

      {/* Card carousel */}
      <div className="relative z-10 flex items-center justify-center mt-10 md:mt-16 pb-20"
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
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                }}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                whileHover={{ y: -5 }}
              >
                <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-[55%] overflow-hidden bg-[#f5f0eb]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2B2B2B]">
                        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl leading-tight text-[#1a1a1a] whitespace-pre-line">
                        {product.name}
                      </h3>
                      <p className="text-[12px] text-[#777] font-sans leading-relaxed mt-2 line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[11px] text-[#999] font-sans tracking-wide">
                        {product.index}
                        <span className="text-[#ccc]">/{product.total}</span>
                      </span>
                      <button className="border border-[#1a1a1a] rounded-full px-5 py-1.5 text-[11px] tracking-[0.15em] uppercase font-sans text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                        {product.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="relative z-10 flex justify-center gap-3 pb-12">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-white w-6"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
