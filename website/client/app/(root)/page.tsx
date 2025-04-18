import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/Hero";
import { OurProduce } from "@/components/OurProduce";
import { Partnership } from "@/components/Partnership";
import { Where2Buy } from "@/components/Where2Buy";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-black mt-6">
      <Hero />
      <OurProduce />
      <Partnership />
      <Gallery />
      <Where2Buy />
      <GetInTouch />
      <Footer />
    </div>
  );
}
