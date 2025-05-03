import Gallery from "../components/teams/Gallery";
import SubHero from "../components/teams/SubHero";
import FAQ from "../components/homepage/FAQ";
import Link from "next/link";

export default function Join() {
  return (
    <>
      <main>
        <SubHero title="Join the Club" />
      </main>

      <section className="justify-center">
        <div style={{ gridColumn: "1/3", maxWidth: "60ch", margin: "auto" }}>
          <h2>New players are always welcome!</h2>
          <h3 className="mt-0">Join us for a tryout session</h3>
          <ul className="mt-4">
            <li>
              <b>Mid-March to October:</b> Meet us at the blue water pitch.
            </li>
            <li>
              <b>November to beginning of March:</b> Find us in the indoor hall.
            </li>
          </ul>
          <p className="mt-4">
            To join our teams, simply show up at the pitch during practice time.
            Feel free to practice with KH&apos;s teams a few times. After
            you&apos;ve had the chance to meet, train, and socialize with other
            team members, we&apos;re confident you&apos;ll want to join the KH
            Family.
          </p>
          <p className="mt-4">
            Just show up to practice and give it a go! If you don&apos;t have
            your gear with you, you can borrow some from the club :)
          </p>

          <p className="mt-4">
            If you have already tried it,{" "}
            <Link href="/register" className="link link-accent">
              register here
            </Link>
          </p>
        </div>
        <div style={{ gridColumn: "1/3", margin: "auto" }}>
          <Gallery />
        </div>
      </section>

      <FAQ />
    </>
  );
}
