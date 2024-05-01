import Image from "next/image";

export default function Section2() {
  return (
    <section className="justify-center">
      <div>
        <h2>
          Celebrating Success: Our Journey in the Top Division of Danish Hockey
        </h2>
        <p>
          As a hockey club, we take pride in our participation in the top
          division in Denmark. With recent achievements and accolades, we have
          established ourselves as a competitive force in the league.
        </p>
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
