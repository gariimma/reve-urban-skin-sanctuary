import reveLogo from "@/assets/reve-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="/">
          <img
            src={reveLogo}
            alt="RÊVE"
            className="h-8 md:h-9 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase font-sans text-[#7A5C2E]">
          <a href="#products" className="hover:text-[#5C4610] transition-colors">
            Products
          </a>
          <a href="#story" className="hover:text-[#5C4610] transition-colors">
            Our Story
          </a>
          <a href="#science" className="hover:text-[#5C4610] transition-colors">
            Science
          </a>
          <a href="#" className="hover:text-[#5C4610] transition-colors">
            Journal
          </a>
        </div>
        <a
          href="#products"
          className="text-xs tracking-[0.15em] uppercase font-sans text-[#7A5C2E] font-medium hover:text-[#5C4610] transition-colors"
        >
          Shop
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
