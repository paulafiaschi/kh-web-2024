import Image from "next/image";
import Carousel from "./Carousel";

export default function CarouselSection() {
  return (
    <section className="justify-center">
      <div style={{ gridColumn: "1/3", maxWidth: "60ch", margin: "auto" }}>
        <h2>
          From Team Outings to Community Events, We Foster a Strong Sense of
          Camaraderie.
        </h2>
        <p>
          Join our hockey club and experience the benefits of a social and
          international community. Connect with players from around the world
          and participate in top-level competitions while enjoying a vibrant
          social atmosphere.
        </p>
      </div>
      <Carousel />
    </section>
  );
}
