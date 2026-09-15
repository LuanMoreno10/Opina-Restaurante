import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import GalleryPreview from "../components/GalleryPreview";
import LocationSection from "../components/LocationSection";

export default function Home() {
  usePageTitle("Ópina — Peixe e Marisco em Matosinhos");

  return (
    <>
      <Hero />
      <StorySection />
      <GalleryPreview />
      <LocationSection />
    </>
  );
}
