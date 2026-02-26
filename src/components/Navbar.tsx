import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Routine", href: "#routine" },
    { label: "Science", href: "#science" },
    { label: "Story", href: "#story" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-sm h-14 md:h-16"
            : "bg-transparent h-16 md:h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between h-full">
          {/* Mobile menu toggle */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[13px] tracking-[0.12em] uppercase font-sans transition-opacity hover:opacity-70 ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-[13px] tracking-[0.12em] uppercase font-sans transition-opacity hover:opacity-70 ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span
              className={`font-serif tracking-[0.3em] transition-all duration-500 ${
                scrolled
                  ? "text-foreground text-xl md:text-2xl lg:text-3xl"
                  : "text-white text-2xl md:text-3xl lg:text-4xl drop-shadow-lg"
              }`}
            >
              RÊVE
            </span>
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-5 md:gap-8">
            {[
              { icon: Search, label: "Search" },
              { icon: User, label: "Account", hideOnMobile: true },
              { icon: ShoppingBag, label: "Cart" },
            ].map(({ icon: Icon, label, hideOnMobile }) => (
              <button
                key={label}
                aria-label={label}
                className={`transition-opacity hover:opacity-60 ${
                  scrolled ? "text-foreground" : "text-white"
                } ${hideOnMobile ? "hidden md:block" : ""}`}
              >
                <Icon className="w-5 h-5 md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 w-72 h-full bg-background shadow-xl pt-20 px-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl text-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-serif text-2xl text-foreground"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
