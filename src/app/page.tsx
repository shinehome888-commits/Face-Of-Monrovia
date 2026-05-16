import Preloader from "@/components/Preloader";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Music from "@/components/Music";
import VideoGallery from "@/components/VideoGallery";
import PhotoGallery from "@/components/PhotoGallery";
import Events from "@/components/Events";
import Booking from "@/components/Booking";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import FloatingPlayer from "@/components/FloatingPlayer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Preloader />
      <Hero3D />
      <About />
      <Music />
      <VideoGallery />
      <PhotoGallery />
      <Events />
      <Booking />
      <Community />
      <Footer />
      <FloatingPlayer />
    </main>
  );
}
