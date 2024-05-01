import Image from "next/image";
import Hero from "./components/Hero";
import Section2 from "./components/homepage/Section2";
import Section3 from "./components/homepage/Section3";
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
      <Section3 />
      <Teams />
      <JoinUs />
      <FAQ />
    </>
  );
}
