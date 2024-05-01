import Image from "next/image";

export default function JoinUs() {
  return (
    <section className="justify-center">
      <div>
        <h2>Join our hockey club today!</h2>
        <p>
          Experience the thrill of competitive hockey and join our vibrant
          community of players.
        </p>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-outline btn-primary">Primary</button>
      </div>
      <Image
        src="/next.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </section>
  );
}
