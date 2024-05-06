import SubHero from "../components/teams/SubHero";
import Image from "next/image";
import TeamCard from "../components/teams/TeamCard";
import JoinSection from "../components/teams/JoinSection";
import FAQ from "../components/homepage/FAQ";

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
          time="Tue and Thu 18:30 - 20:00"
          contact="faybrasser@gmail.com"
        />
        <TeamCard
          team="Men's"
          image="men-2024.jpg"
          time="Tue and Thu 19:30 - 21:30"
          contact="morten@kh.com"
        />
        <TeamCard
          team="Youth"
          image="youth.jpg"
          time="Thu 17:30 - 18:30"
          contact="morten@kh.com"
        />
        <TeamCard
          team="Masters'"
          image="masters2024.jpg"
          time="Thu 18:30 - 20:00"
          contact="morten@kh.com"
        />
      </section>
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
