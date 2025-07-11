import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import Testimonials from "./_components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
    
  );
}
