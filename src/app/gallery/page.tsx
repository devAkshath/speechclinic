
import { Header } from "./components/header";
import { Hero } from "./components/section/hero";
import { Usps } from "./components/section/usps";
import { VideoCarousel } from "./components/section/video-carousel";
import "./styles.css";




export default function GalleryPage(){
      return (
        <>
          <Header />
          <main className="mt-60">
            <div className="bg-background relative z-10">
              <Hero />
              <Usps />
            </div>
            <VideoCarousel />
            <div className="h-auto" />
          </main>
        </>
      );
}