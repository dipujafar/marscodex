import AboutSection from "@/components/about/aboutSection";
import HeroSection from "@/modules/home/HeroSection";
import Services from "@/modules/services/services";
import WhyChoiceUs from "@/modules/why-choice-us/WhyChoiceUs";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Services></Services>
      <WhyChoiceUs></WhyChoiceUs>
    </div>
  );
}
