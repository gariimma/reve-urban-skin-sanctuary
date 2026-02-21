const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] text-foreground mb-6">RÊVE</p>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              Urban skin recovery, scientifically crafted for modern life.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-4">Shop</p>
            <div className="space-y-2.5">
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">All Products</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">The Routine Set</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Refills</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Gift Cards</a>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-4">Learn</p>
            <div className="space-y-2.5">
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Ingredients</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Journal</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Clinical Studies</a>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-4">Support</p>
            <div className="space-y-2.5">
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="block font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">Sustainability</a>
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
