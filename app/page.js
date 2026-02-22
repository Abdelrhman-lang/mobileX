import FeatureSection from "./_component/FeatureSection";
import HeroSection from "./_component/HeroSection";
import SaleSection from "./_component/SaleSection";
import SectionGap from "./_component/SectionGap";
import TrendSection from "./_component/TrendSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <div className="custom-container px-5 lg:px-0">
        <SectionGap />
        <FeatureSection />
        <SectionGap />
        <SaleSection />
        <SectionGap />
        <TrendSection />
        <SectionGap />
      </div>
    </section>
  );
}
