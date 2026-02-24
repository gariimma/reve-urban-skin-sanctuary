const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="/">
          <img
            src="/reve-logo.png"
            alt="RÊVE"
            className="h-6 md:h-7 w-auto brightness-0 invert"
          />
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase font-sans text-white/70">
          <a href="#products" className="hover:text-white transition-colors">
            Products
          </a>
          <a href="#story" className="hover:text-white transition-colors">
            Our Story
          </a>
          <a href="#science" className="hover:text-white transition-colors">
            Science
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Journal
          </a>
        </div>
        <a
          href="#products"
          className="text-xs tracking-[0.15em] uppercase font-sans text-white hover:text-white/70 transition-colors"
        >
          Shop
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
