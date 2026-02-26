import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-foreground mb-4 block">RÊVE</Link>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              Urban skin recovery, scientifically crafted for modern life.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-4">Shop</p>
            <div className="space-y-2.5">
              <Link to="/shop" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">All Products</Link>
              <Link to="/product/pollution-defense-serum" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Defense Serum</Link>
              <Link to="/product/blue-light-repair-cream" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Repair Cream</Link>
              <Link to="/product/barrier-recovery-oil" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Recovery Oil</Link>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-4">Learn</p>
            <div className="space-y-2.5">
              <a href="#story" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
              <a href="#science" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">The Science</a>
              <a href="#routine" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Your Ritual</a>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-4">Support</p>
            <div className="space-y-2.5">
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © 2026 RÊVE Skincare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
