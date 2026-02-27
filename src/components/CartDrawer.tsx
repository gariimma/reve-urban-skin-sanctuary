import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[61] w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                <span className="font-serif text-lg text-foreground">Your Bag</span>
                {totalItems > 0 && (
                  <span className="text-[10px] tracking-wider uppercase font-sans text-muted-foreground">
                    ({totalItems} {totalItems === 1 ? "item" : "items"})
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-border mb-4" strokeWidth={1} />
                  <p className="font-serif text-xl text-foreground mb-2">Your bag is empty</p>
                  <p className="font-sans text-sm text-muted-foreground">Discover our 3-step urban ritual.</p>
                  <button
                    onClick={closeCart}
                    className="mt-6 text-[11px] tracking-[0.15em] uppercase font-sans text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <div key={item.slug} className="flex gap-4">
                      <div className="w-20 h-24 flex-shrink-0 bg-muted rounded-sm overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm text-foreground leading-snug">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.slug)} className="text-muted-foreground hover:text-foreground ml-2 flex-shrink-0" aria-label={`Remove ${item.name}`}>
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-sans text-sm text-foreground mt-1">${item.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-sm text-foreground w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-muted-foreground">Subtotal</span>
                  <span className="font-serif text-xl text-foreground">${totalPrice}</span>
                </div>
                <p className="font-sans text-[11px] text-muted-foreground">Shipping & taxes calculated at checkout.</p>
                <button className="w-full bg-foreground text-background py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-medium hover:bg-foreground/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
