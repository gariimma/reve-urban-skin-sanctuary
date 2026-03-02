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
  size: string;
  sizes: { label: string; ml: string; price: number }[];
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  science: string;
  faqs: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: "pollution-defense-serum",
    name: "Pollution Defense Serum",
    tagline: "Your daily shield against the city",
    description:
      "A lightweight yet potent serum that creates an invisible barrier against PM2.5 particles, blue light, and environmental aggressors. Powered by our proprietary Urban Shield Complex™.",
    price: 34,
    image: product1,
    category: "Step 1 · Protect",
    size: "30ml",
    sizes: [
      { label: "Travel", ml: "15ml", price: 19 },
      { label: "Regular", ml: "30ml", price: 34 },
      { label: "Value", ml: "50ml", price: 48 },
    ],
    benefits: [
      "Neutralizes 97% of free radicals on contact",
      "Creates an invisible pollution barrier",
      "Visibly reduces dullness in 14 days",
      "Non-comedogenic, suitable for all skin types",
    ],
    ingredients: [
      "Niacinamide (5%)",
      "Astaxanthin",
      "Fermented Rice Extract",
      "Ceramide Complex",
      "Vitamin E",
    ],
    howToUse:
      "Apply 2–3 drops to clean skin every morning before moisturizer. Pat gently into skin, focusing on areas most exposed to environmental stress.",
    science:
      "Our Urban Shield Complex™ combines three key actives that work synergistically to protect and repair. Clinical trials showed a 94% improvement in skin barrier function after 4 weeks of daily use.",
    faqs: [
      { q: "Can I use this under makeup?", a: "Absolutely. The serum absorbs quickly and creates a smooth, non-greasy base for makeup application." },
      { q: "Is it suitable for sensitive skin?", a: "Yes. It's dermatologist tested, fragrance-free, and formulated for all skin types including sensitive." },
      { q: "How long does one bottle last?", a: "The 30ml bottle lasts approximately 6–8 weeks with daily use (2–3 drops per application)." },
    ],
  },
  {
    slug: "blue-light-repair-cream",
    name: "Blue Light Repair Cream",
    tagline: "Undo the screen damage",
    description:
      "A rich, fast-absorbing cream that reverses screen-induced oxidative stress and rebuilds your moisture barrier overnight. Perfect for digital-age skin recovery.",
    price: 38,
    image: product2,
    category: "Step 2 · Repair",
    size: "50ml",
    sizes: [
      { label: "Travel", ml: "15ml", price: 18 },
      { label: "Regular", ml: "50ml", price: 38 },
      { label: "Value", ml: "75ml", price: 52 },
    ],
    benefits: [
      "Reverses blue light oxidative damage",
      "Rebuilds moisture barrier overnight",
      "Reduces fine lines from screen fatigue",
      "Deeply hydrating without heaviness",
    ],
    ingredients: [
      "Biomimetic Ceramides",
      "Blue Light Filter Complex",
      "Squalane",
      "Adaptogenic Mushroom Extract",
      "Hyaluronic Acid",
    ],
    howToUse:
      "Apply a pea-sized amount to face and neck each evening after cleansing and serum. Massage in upward motions until fully absorbed.",
    science:
      "Blue light from screens generates reactive oxygen species that accelerate collagen breakdown. Our Blue Light Filter Complex neutralizes these free radicals while biomimetic ceramides rebuild the compromised barrier.",
    faqs: [
      { q: "Should I use this morning or night?", a: "It's designed for evening use to maximize overnight repair, but it can also be used as a day cream." },
      { q: "Will it feel heavy on oily skin?", a: "No. The gel-cream texture absorbs quickly and won't clog pores. It's oil-free and non-comedogenic." },
      { q: "Can I layer this with the serum?", a: "Yes — they're designed to work together. Apply the serum first, then this cream as the second step." },
    ],
  },
  {
    slug: "barrier-recovery-oil",
    name: "Barrier Recovery Oil",
    tagline: "Deep restoration while you sleep",
    description:
      "A luxurious blend of cold-pressed botanicals that rebuilds your skin's natural defense system overnight. Wake up to skin that's visibly stronger, calmer, and more radiant.",
    price: 36,
    image: product3,
    category: "Step 3 · Restore",
    size: "30ml",
    sizes: [
      { label: "Travel", ml: "15ml", price: 20 },
      { label: "Regular", ml: "30ml", price: 36 },
      { label: "Value", ml: "50ml", price: 49 },
    ],
    benefits: [
      "Rebuilds the skin barrier overnight",
      "Reduces redness and sensitivity",
      "Locks in 72 hours of hydration",
      "100% plant-derived, cold-pressed oils",
    ],
    ingredients: [
      "Rosehip Seed Oil",
      "Sea Buckthorn",
      "Bakuchiol",
      "Jojoba Oil",
      "Evening Primrose Oil",
    ],
    howToUse:
      "Warm 3–4 drops between palms, then press gently into skin as the final step of your evening routine. Can also be mixed with your moisturizer.",
    science:
      "Cold-pressed botanical oils mirror the lipid composition of a healthy skin barrier. Our proprietary extraction preserves the full spectrum of fatty acids, antioxidants, and vitamins that accelerate barrier recovery.",
    faqs: [
      { q: "Is this oil comedogenic?", a: "No. We use only non-comedogenic oils (rosehip, jojoba) that won't clog pores or cause breakouts." },
      { q: "Can I use it on acne-prone skin?", a: "Yes. Bakuchiol and rosehip are actually beneficial for acne-prone skin, reducing inflammation and scarring." },
      { q: "What does it smell like?", a: "It has a subtle, natural botanical scent — no added fragrance. Most users find it calming and pleasant." },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
