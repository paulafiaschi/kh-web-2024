import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="highlightSection">
      <section className="justify-center">
        <div>
          <h2>Join our hockey club today!</h2>
          <p className="mb-5">
            Experience the thrill of competitive hockey and join our vibrant
            community of players.
          </p>
          <Link
            href="/about#contact"
            target="_blank"
            className="btn btn-primary"
          >
            Contact Us
          </Link>
        </div>
        <Image
          src="/ladies-men-2023.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </section>
    </div>
  );
}
