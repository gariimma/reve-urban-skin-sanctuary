const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8 text-xs tracking-widest uppercase font-sans">
            <span>Free shipping over ₹1,499</span>
            <span className="opacity-40">✦</span>
            <span>100% Clean & Vegan</span>
            <span className="opacity-40">✦</span>
            <span>30-Day Returns</span>
            <span className="opacity-40">✦</span>
            <span>Cruelty Free & Sustainable</span>
            <span className="opacity-40">✦</span>
            <span>Seoul Science × French Elegance</span>
            <span className="opacity-40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
