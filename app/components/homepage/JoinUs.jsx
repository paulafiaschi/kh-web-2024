import Image from "next/image";

export default function JoinUs() {
  return (
    <section className="justify-center highlightSection">
      <div>
        <h2>Join our hockey club today!</h2>
        <p className="mb-5">
          Experience the thrill of competitive hockey and join our vibrant
          community of players.
        </p>
        <button className="btn btn-primary">Contact Us</button>
      </div>
      <Image
        src="/ladies-men-2023.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </section>
  );
}
