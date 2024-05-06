import SubHero from "../components/teams/SubHero";
import Image from "next/image";
import TeamCard from "../components/teams/TeamCard";

export default function Teams() {
  return (
    <>
      <main>
        <SubHero title="Meet our Teams" />
      </main>
      <section className="justify-center">
        <TeamCard
          team="Women's"
          image="ladies2023.jpg"
          time="Tue and Thu 18:30 - 20:00"
        />
        <TeamCard
          team="Men's"
          image="men-2024.jpg"
          time="Tue and Thu 19:30 - 21:30"
        />
        <TeamCard team="Youth" image="youth.jpg" time="Thu 17:30 - 18:30" />
        <TeamCard
          team="Masters'"
          image="masters2024.jpg"
          time="Thu 18:30 - 20:00"
        />
      </section>
      <section className="justify-center">
        <div>
          <p className="text-xs	mb-3 tracking-widest">JOIN</p>
          <h2 className="text-5xl">
            Experience the camaraderie and growth of a team
          </h2>
        </div>
        <p>
          Joining a team at our Hockey Club in Copenhagen offers numerous
          benefits. You&apos;ll have the opportunity to experience the
          camaraderie and growth that comes from being part of a team. Whether
          you&apos;re a beginner or an experienced player, our teams provide a
          supportive and inclusive environment where you can improve your
          skills, compete at the top division in Denmark, and make lasting
          friendships. Join us and be part of our international community of
          passionate hockey players.
        </p>
        <Image
          src="/ladies-men-2023.jpg"
          width={900}
          height={900}
          alt="Picture of the author"
          style={{ gridColumn: "1/3", margin: "auto" }}
        />
      </section>
      <section className="justify-center">
        <div>
          <p className="text-xs	mb-3 tracking-widest">PASSIONATE</p>
          <h2 className="text-5xl">
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
    </>
  );
}
