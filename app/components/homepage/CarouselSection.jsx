import Image from "next/image";
import Carousel from "./Carousel";

export default function CarouselSection() {
  return (
    <section className="justify-center">
      <Image
        src="/social2.jpeg"
        width={600}
        height={500}
        alt="Picture of the author"
      />

      {/* <Carousel /> */}
      <div>
        <h2>
          From team outings to community events, we foster a strong sense of
          camaraderie.
        </h2>
        <p>
          Join our hockey club and experience the benefits of a social and
          international community. Connect with players from around the world
          and participate in top-level competitions while enjoying a vibrant
          social atmosphere.
        </p>
      </div>
    </section>
  );
}
