import { Search, User, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Shop",
      href: "#products",
      mega: {
        categories: [
          { title: "Cleansers", href: "#" },
          { title: "Serums", href: "#" },
          { title: "Moisturizers", href: "#" },
          { title: "Treatments", href: "#" },
          { title: "Shop All", href: "#products" },
        ],
        featured: {
          label: "The Barrier Collection",
          sublabel: "Clinically tested. Dermatologist approved.",
          image: "/hero-video.mp4",
        },
      },
    },
    {
      label: "Routine",
      href: "#routine",
      mega: {
        categories: [
          { title: "Morning Ritual", href: "#" },
          { title: "Night Repair", href: "#" },
          { title: "Barrier Recovery", href: "#" },
          { title: "Sensitive Skin", href: "#" },
        ],
        featured: {
          label: "Find Your Ritual",
          sublabel: "Personalized regimens for urban skin.",
          image: "",
        },
      },
    },
    {
      label: "Science",
      href: "#science",
      mega: {
        categories: [
          { title: "Ingredients", href: "#" },
          { title: "Clinical Testing", href: "#" },
          { title: "Skin Barrier", href: "#" },
          { title: "Our Formulation", href: "#" },
        ],
        featured: {
          label: "The Research",
          sublabel: "Seoul science meets French elegance.",
          image: "",
        },
      },
    },
    { label: "Journal", href: "#journal" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm h-16"
          : "bg-transparent h-20"
      }`}
      onMouseLeave={() => setMegaMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
        {/* Left Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.mega ? setMegaMenu(link.label) : setMegaMenu(null)
              }
            >
              <a
                href={link.href}
                className={`group relative text-[13px] tracking-[0.1em] uppercase font-sans transition-opacity duration-250 ${
                  scrolled
                    ? "text-[#2B2B2B] hover:opacity-70"
                    : "text-white hover:opacity-70"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ease-out ${
                    scrolled ? "bg-[#2B2B2B]" : "bg-white"
                  }`}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span
            className={`font-serif tracking-[0.3em] transition-all duration-500 ${
              scrolled
                ? "text-[#2B2B2B] text-2xl md:text-3xl"
                : "text-white text-3xl md:text-4xl"
            }`}
          >
            RÊVE
          </span>
          <span
            className={`text-[9px] tracking-[0.25em] uppercase font-sans transition-all duration-500 ${
              scrolled ? "text-[#3A3A3A]/60 opacity-0 h-0" : "text-white/50 opacity-100"
            }`}
          >
            Barrier Science
          </span>
        </a>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {[
            { icon: Search, label: "Search" },
            { icon: User, label: "Account" },
            { icon: ShoppingBag, label: "Cart" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className={`transition-opacity duration-250 hover:opacity-60 ${
                scrolled ? "text-[#2B2B2B]" : "text-white"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>

      {/* Mega Menu */}
      {megaMenu && (
        <div
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg"
          onMouseEnter={() => setMegaMenu(megaMenu)}
          onMouseLeave={() => setMegaMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex gap-16">
            {/* Categories */}
            <div className="flex flex-col gap-4">
              {navLinks
                .find((l) => l.label === megaMenu)
                ?.mega?.categories.map((cat) => (
                  <a
                    key={cat.title}
                    href={cat.href}
                    className="group flex items-center gap-2 text-[#2B2B2B]"
                  >
                    <span className="text-sm tracking-[0.06em] font-sans group-hover:opacity-60 transition-opacity duration-250">
                      {cat.title}
                    </span>
                    <span className="w-0 group-hover:w-4 h-px bg-[#2B2B2B] transition-all duration-300" />
                  </a>
                ))}
            </div>

            {/* Featured */}
            {navLinks.find((l) => l.label === megaMenu)?.mega?.featured && (
              <div className="ml-auto flex flex-col justify-center max-w-xs">
                <p className="font-serif text-xl text-[#2B2B2B] mb-2">
                  {navLinks.find((l) => l.label === megaMenu)?.mega?.featured.label}
                </p>
                <p className="text-[13px] text-[#3A3A3A]/70 font-sans leading-relaxed">
                  {navLinks.find((l) => l.label === megaMenu)?.mega?.featured.sublabel}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
