import Image from "next/image";
import Link from "next/link";

export default function Teams() {
  return (
    <div className="highlightSection">
      <section className="justify-center">
        <h2>Meet our Teams</h2>
        <Link className="team" href="/teams">
          <Image
            src="/ladies2023.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="team-description">
            <h3>Women&apos;s Team</h3>
            <p>
              Our Women&apos;s team is a force to be reckoned with, bringing
              their determination and teamwork to every game in the top
              division.
            </p>
          </div>
        </Link>
        <Link className="team" href="/teams">
          <Image
            src="/men-2024.jpg"
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
        </Link>
        <Link className="team" href="/teams">
          <Image
            src="/youth.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="team-description">
            <h3>Youth Team</h3>
            <p>
              Our Youth team is the future of our club, nurturing young talent
              and fostering a love for the game.
            </p>
          </div>
        </Link>
        <Link className="team" href="/teams">
          <Image
            src="/masters2024.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="team-description">
            <h3>Masters&apos; Team</h3>
            <p>
              Our Master&apos;s team is for experienced players who still have a
              passion for the game and love having fun.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
