import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import GalleryObras from "@/components/GalleryObras";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="flex items-center text-4xl justify-center my-8">
        <GalleryObras />
      </div>
    </>
  );
}
