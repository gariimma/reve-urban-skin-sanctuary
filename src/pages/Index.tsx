import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import TrustBar from "@/components/TrustBar";
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
// import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen scrollbar-hide">
        <Navbar />
        <Hero />
        <CredibilityBar />
        <TrustBar />
        <ProductShowcase />
        <BrandStory />
        <Testimonials />
        <EmailSignup />
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RÊVE Skincare",
              url: "https://reveskincare.com",
              description: "Urban skin recovery scientifically crafted for modern life. Seoul science meets French elegance.",
              sameAs: [],
            }),
          }}
        />
      </div>
    </PageTransition>
  );
};

export default Index;
