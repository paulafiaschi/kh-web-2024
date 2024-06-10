import Image from "next/image";

export default function Section2() {
  return (
    <section className="justify-center" id="findOut">
      <div>
        <h2>
          Celebrating Success: Our Journey in the Top Division of Danish Hockey
        </h2>
        <p>
          As a hockey club, we take pride in our participation in the top
          division in Denmark. With recent achievements and accolades, we have
          established ourselves as a competitive force in the league.
        </p>
        <p className="mt-4">
          With our top-notch facilities, including the best water pitch in
          Denmark, and our amazing indoor hall, we offer an unparalleled hockey
          experience.
        </p>
      </div>
      <Image
        src="/ladies-men-indoor.webp"
        width={700}
        height={700}
        alt="Picture of the author"
      />
    </section>
  );
}
