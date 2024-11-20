import SubHero from "../components/teams/SubHero";
import Image from "next/image";
import TeamCard from "../components/teams/TeamCard";
import JoinSection from "../components/teams/JoinSection";
import FAQ from "../components/homepage/FAQ";
import Link from "next/link";

export default function Teams() {
  return (
    <>
      <main>
        <SubHero
          title="Our Amazing Teams"
          subtitle="Discover our diverse teams, from Men's and Women's to Youth and Masters."
          word="UNITE"
        />
      </main>
      <section className="justify-center">
        <TeamCard
          team="Women's"
          image="ladies2023.jpg"
          time="Mon 20:30 - 22:00 | Wed 19:00 - 20:30"
          name="Fay"
          contact="faybrasser@gmail.com"
          form="https://www.holdsport.dk/team_invitation/139527/bfab9e39d968a64582c573e3995632a876a31dfa?fbclid=IwAR2LA-kzYiygh4FoXHkjDBBFvZfza0qXiDqaXLWaRtGN78zYa1QONDSwRrE"
          phone="4416 4208"
        />
        <TeamCard
          team="Men's"
          image="men-2024.jpg"
          time="Mon and Wed 20:30 - 22:00"
          name="Barnes"
          contact="j.luke@gmx.com"
          form="https://www.holdsport.dk/team_invitation/139528/4fad7b974cc5ac639e59d3e3cda15986fd1d10a9?fbclid=IwAR2eenwpH8YeicDxjp6WQrWqrj3sWTgLw3mnXY0XMNDYPR5xTEj6PpKcUmQ"
          phone="2338 9691"
        />
        <TeamCard
          team="Youth"
          image="youth.jpg"
          time="Wed 18:00 - 19:00"
          name="Morten"
          contact="mortenreynhard@gmail.com"
          form="https://www.holdsport.dk/team_invitation/139531/dcdb16a148c7b193ea7c18ba7aa2901adfd4c9df?fbclid=IwAR3dFGEzoji_hJ9yT9hPKSNVZUjL7rLR9SkByOq3vu6Aovi1lyf8dqBLtDg"
          phone="4023 0460"
        />
        <TeamCard
          team="Masters'"
          image="masters2024.jpg"
          time="Thu 18:30 - 20:00"
          name="Tobias"
          contact="khformand@gmail.com"
          form="https://holdsport.dk/team_invitation/139537/15de952cacd5e037a09e931b5c6740b54d43a3d2"
          phone="6060 8342"
        />
      </section>
      <div className="highlightSection">
        <section className="justify-center">
          <Image
            src="/kh-venner.jpeg"
            width={700}
            height={700}
            alt="Picture of the author"
          />
          <div>
            <p className="text-xs	mb-3 tracking-widest">EMBRACE</p>
            <h2 className="text-3xl md:text-4xl">
              Join Our Support Club and Make a Difference
            </h2>
            <p>
              The support association &quot;KH&apos; Venner&quot; is dedicated
              to supporting the youth work in our club. By joining our support
              club with an annual fee of DKK 250, you are helping us develop the
              club and organize social activities for our youth players.
            </p>
            <p>
              Did you know that everyone in the Copenhagen Hockey Club works
              voluntarily? We believe in the value of everyone contributing to
              the club and being #StrongerTogether.
            </p>
            <Link
              href="https://www.holdsport.dk/team_invitation/139537/15de952cacd5e037a09e931b5c6740b54d43a3d2"
              className="btn btn-outline btn-primary  mt-8"
            >
              Join the &quot;KH&apos; Venner&quot; Club &#9656;
            </Link>
          </div>
        </section>
      </div>

      <JoinSection />
      <section className="justify-center">
        <div>
          <p className="text-xs	mb-3 tracking-widest">PASSIONATE</p>
          <h2 className="text-3xl md:text-5xl">
            Building Inclusive and International Teams
          </h2>
        </div>
        <p>
          At our hockey club, we value teamwork, passion, and the international
          nature of our teams. We believe in creating a supportive and diverse
          environment where players from different backgrounds can come together
          and excel in the sport.
        </p>
      </section>
      <FAQ />
    </>
  );
}
