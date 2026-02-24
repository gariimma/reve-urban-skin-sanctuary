import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
import HowItWorks from "@/components/HowItWorks";
import EducationSection from "@/components/EducationSection";
import Testimonials from "@/components/Testimonials";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scrollbar-hide">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <BrandStory />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <EducationSection />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
