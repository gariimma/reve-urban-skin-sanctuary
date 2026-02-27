import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("reve-cart");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);

  const persist = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem("reve-cart", JSON.stringify(newItems));
  };

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.slug === item.slug);
      const next = existing
        ? prev.map(i => i.slug === item.slug ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...item, quantity: 1 }];
      localStorage.setItem("reve-cart", JSON.stringify(next));
      return next;
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((slug: string) => {
    setItems(prev => {
      const next = prev.filter(i => i.slug !== slug);
      localStorage.setItem("reve-cart", JSON.stringify(next));
      return next;
    });
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(slug);
    setItems(prev => {
      const next = prev.map(i => i.slug === slug ? { ...i, quantity } : i);
      localStorage.setItem("reve-cart", JSON.stringify(next));
      return next;
    });
  }, [removeFromCart]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addToCart, removeFromCart, updateQuantity,
      totalItems, totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};
