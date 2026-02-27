import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Routine", href: "#routine" },
    { label: "Science", href: "#science" },
    { label: "Story", href: "#story" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("#")) {
      const scrollToSection = () => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      };

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToSection, 150);
      } else {
        scrollToSection();
      }
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
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between h-full">

          <button
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

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
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-[13px] tracking-[0.12em] uppercase font-sans transition-opacity hover:opacity-70 ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 z-10 group"
            aria-label="RÊVE — Go to homepage"
          >
            <span
              className={`font-serif tracking-[0.3em] transition-all duration-500 group-hover:opacity-70 ${
                scrolled
                  ? "text-foreground text-xl md:text-2xl lg:text-3xl"
                  : "text-white text-2xl md:text-3xl lg:text-4xl drop-shadow-lg"
              }`}
            >
              RÊVE
            </span>
          </Link>

          <button
            onClick={openCart}
            aria-label={`Shopping bag${
              totalItems > 0
                ? `, ${totalItems} item${totalItems === 1 ? "" : "s"}`
                : ", empty"
            }`}
            className={`relative transition-opacity hover:opacity-60 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <ShoppingBag className="w-5 h-5 md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-sans font-medium flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-nav-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-0 w-72 h-full bg-background shadow-xl pt-20 px-8"
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-2xl text-foreground hover:opacity-70 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="font-serif text-2xl text-foreground hover:opacity-70 transition-opacity"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
