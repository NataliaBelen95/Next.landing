import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import GalleryObras from "@/components/GalleryObras";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />

 <AboutSection/>
      <div className="flex items-center text-4xl justify-center my-8">
        <GalleryObras />
      </div>

    </>
  );
}
