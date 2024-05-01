import Image from "next/image";

export default function Section3() {
  return (
    <section className="justify-center">
      <Image
        src="/next.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
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
