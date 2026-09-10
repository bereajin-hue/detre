import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";
import PromoPopup from "../../components/PromoPopup";
import BusinessSection from "../../components/sections/BusinessSection";
import LocationSection from "../../components/sections/LocationSection";
import ProductSection from "../../components/sections/ProductSection";
import ContactSection from "../../components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <PromoPopup />
      <HeroBanner />
      <BusinessSection />
      <LocationSection />
      <ProductSection />
      <ContactSection />
    </main>
  );
}
