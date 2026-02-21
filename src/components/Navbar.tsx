const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="/" className="font-serif text-2xl tracking-[0.2em] text-foreground">
          RÊVE
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground">
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#story" className="hover:text-foreground transition-colors">Our Story</a>
          <a href="#science" className="hover:text-foreground transition-colors">Science</a>
          <a href="#" className="hover:text-foreground transition-colors">Journal</a>
        </div>
        <a href="#products" className="text-xs tracking-[0.15em] uppercase font-sans text-foreground hover:text-muted-foreground transition-colors">
          Shop
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
