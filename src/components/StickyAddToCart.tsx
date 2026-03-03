import { useState, useEffect, useRef } from "react";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface StickyAddToCartProps {
  product: {
    slug: string;
    name: string;
    image: string;
  };
  selectedPrice: number;
  selectedMl: string;
  triggerRef: React.RefObject<HTMLElement>;
}

const StickyAddToCart = ({ product, selectedPrice, selectedMl, triggerRef }: StickyAddToCartProps) => {
  const { addToCart } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRef]);

  const handleAdd = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      price: selectedPrice,
      image: product.image,
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 safe-bottom"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-serif text-sm text-foreground truncate">{product.name}</p>
              <p className="text-xs font-sans text-muted-foreground">{selectedMl} · ${selectedPrice}</p>
            </div>
            <button
              onClick={handleAdd}
              className="flex-shrink-0 bg-foreground text-background px-6 py-3 text-[11px] tracking-[0.15em] uppercase font-sans font-medium active:scale-[0.97] transition-transform"
            >
              Add to Bag
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyAddToCart;
