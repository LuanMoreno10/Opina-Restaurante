import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/Hero";
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
      <StorySection />
      <Specialties />
      <GalleryPreview />
      <ReserveSection />
      <LocationSection />
    </>
  );
}
