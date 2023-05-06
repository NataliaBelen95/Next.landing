import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import GalleryObras from "../components/GalleryObras";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <AboutSection />
      <Services/>
      {/* <div
        className="flex items-center text-4xl justify-center my-8"
        style={{ minHeight: "500px" }}
      >
        <GalleryObras />
      </div> */}
      <Footer />
    </>
  );
}
