import Image from "next/image";

export default function Teams() {
  return (
    <section className="teams">
      <div className="team">
        <Image
          src="/next.svg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="team-description">
          <h3>Women&apos;s Team</h3>
          <p>
            Our Women&apos;s team is a force to be reckoned with, bringing their
            determination and teamwork to every game in the top division.
          </p>
        </div>
      </div>
      <div className="team">
        <Image
          src="/next.svg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="team-description">
          <h3>Men&apos;s Team</h3>
          <p>
            Our Men&apos;s team competes in the top division in Denmark,
            showcasing their skills and passion for the sport.
          </p>
        </div>
      </div>
      <div className="team">
        <Image
          src="/next.svg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="team-description">
          <h3>Youth Team</h3>
          <p>
            Our Youth team is the future of our club, nurturing young talent and
            fostering a love for the game.
          </p>
        </div>
      </div>
      <div className="team">
        <Image
          src="/next.svg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="team-description">
          <h3>Master&apos;s Team</h3>
          <p>
            Our Master&apos;s team is for experienced players who still have a
            passion for the game.
          </p>
        </div>
      </div>
    </section>
  );
}
