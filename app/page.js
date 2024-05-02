import Image from "next/image";
import Hero from "./components/homepage/Hero";
import Section2 from "./components/homepage/Section2";
import CarouselSection from "./components/homepage/CarouselSection";
import Teams from "./components/homepage/Teams";
import JoinUs from "./components/homepage/JoinUs";
import FAQ from "./components/homepage/FAQ";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <Section2 />
      <Teams />
      <CarouselSection />
      <JoinUs />
      <FAQ />
    </>
  );
}
