import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/Hero";
import TextMarquee from "../components/TextMarquee";
import StorySection from "../components/StorySection";
import Specialties from "../components/Specialties";
import GalleryPreview from "../components/GalleryPreview";
import ReserveSection from "../components/ReserveSection";
import LocationSection from "../components/LocationSection";

export default function Home() {
  usePageTitle("Ópina — Peixe e Marisco em Matosinhos");

  return (
    <>
      <Hero />
      <div className="mt-[clamp(48px,7vw,96px)]">
        <TextMarquee />
      </div>
      <StorySection />
      <Specialties />
      <GalleryPreview />
      <ReserveSection />
      <LocationSection />
    </>
  );
}
