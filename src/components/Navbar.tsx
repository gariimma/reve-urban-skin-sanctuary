import { Search, User, ShoppingBag } from "lucide-react";
import reveLogo from "@/assets/reve-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Left - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide font-sans text-[#B8860B]">
          <a href="#" className="underline underline-offset-4 decoration-[#B8860B]">
            Home
          </a>
          <a href="#products" className="hover:underline underline-offset-4 transition-all">
            Shop
          </a>
          <a href="#story" className="hover:underline underline-offset-4 transition-all">
            About
          </a>
          <a href="#science" className="hover:underline underline-offset-4 transition-all">
            Contact
          </a>
        </div>

        {/* Center - Logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src={reveLogo}
            alt="RÊVE"
            className="h-16 md:h-14 w-auto"
          />
        </a>

        {/* Right - Icons */}
        <div className="flex items-center gap-5 text-[#B8860B]">
          <button aria-label="Search" className="hover:text-[#8B6914] transition-colors">
            <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="hover:text-[#8B6914] transition-colors">
            <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="hover:text-[#8B6914] transition-colors relative">
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
