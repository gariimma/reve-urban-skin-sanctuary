import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  science: string;
}

export const products: Product[] = [
  {
    slug: "pollution-defense-serum",
    name: "Pollution Defense Serum",
    tagline: "Your daily shield against the city",
    description: "A lightweight yet potent serum that creates an invisible barrier against PM2.5 particles, blue light, and environmental aggressors. Powered by our proprietary Urban Shield Complex™.",
    price: 68,
    image: product1,
    category: "Step 1: Protect",
    benefits: [
      "Neutralizes 97% of free radicals on contact",
      "Creates an invisible pollution barrier",
      "Visibly reduces dullness in 14 days",
      "Non-comedogenic, suitable for all skin types",
    ],
    ingredients: ["Niacinamide (5%)", "Astaxanthin", "Fermented Rice Extract", "Ceramide Complex", "Vitamin E"],
    howToUse: "Apply 2-3 drops to clean skin every morning before moisturizer. Pat gently into skin, focusing on areas most exposed to environmental stress.",
    science: "Our Urban Shield Complex™ combines three key actives that work synergistically to protect and repair. Clinical trials showed a 94% improvement in skin barrier function after 4 weeks of daily use.",
  },
  {
    slug: "blue-light-repair-cream",
    name: "Blue Light Repair Cream",
    tagline: "Undo the screen damage",
    description: "A rich, fast-absorbing cream that reverses screen-induced oxidative stress and rebuilds your moisture barrier overnight. Perfect for digital-age skin recovery.",
    price: 74,
    image: product2,
    category: "Step 2: Repair",
    benefits: [
      "Reverses blue light oxidative damage",
      "Rebuilds moisture barrier overnight",
      "Reduces fine lines from screen fatigue",
      "Deeply hydrating without heaviness",
    ],
    ingredients: ["Biomimetic Ceramides", "Blue Light Filter Complex", "Squalane", "Adaptogenic Mushroom Extract", "Hyaluronic Acid"],
    howToUse: "Apply a pea-sized amount to face and neck each evening after cleansing and serum. Massage in upward motions until fully absorbed.",
    science: "Blue light from screens generates reactive oxygen species that accelerate collagen breakdown. Our Blue Light Filter Complex neutralizes these free radicals while biomimetic ceramides rebuild the compromised barrier.",
  },
  {
    slug: "barrier-recovery-oil",
    name: "Barrier Recovery Oil",
    tagline: "Deep restoration while you sleep",
    description: "A luxurious blend of cold-pressed botanicals that rebuilds your skin's natural defense system overnight. Wake up to skin that's visibly stronger, calmer, and more radiant.",
    price: 82,
    image: product3,
    category: "Step 3: Restore",
    benefits: [
      "Rebuilds the skin barrier overnight",
      "Reduces redness and sensitivity",
      "Locks in 72 hours of hydration",
      "100% plant-derived, cold-pressed oils",
    ],
    ingredients: ["Rosehip Seed Oil", "Sea Buckthorn", "Bakuchiol", "Jojoba Oil", "Evening Primrose Oil"],
    howToUse: "Warm 3-4 drops between palms, then press gently into skin as the final step of your evening routine. Can also be mixed with your moisturizer.",
    science: "Cold-pressed botanical oils mirror the lipid composition of a healthy skin barrier. Our proprietary extraction preserves the full spectrum of fatty acids, antioxidants, and vitamins that accelerate barrier recovery.",
  },
];

export const getProduct = (slug: string) => products.find(p => p.slug === slug);
