import Image from "next/image";
import Gallery from "../Gallery";

export default function JoinSection() {
  return (
    <section className="justify-center">
      <div>
        <p className="text-xs	mb-3 tracking-widest">JOIN</p>
        <h2 className="text-3xl md:text-5xl">
          Experience the camaraderie and growth of a team
        </h2>
      </div>
      <p>
        Joining a team at our Hockey Club in Copenhagen offers numerous
        benefits. You&apos;ll have the opportunity to experience the
        <b>camaraderie</b> and growth that comes from being part of a team.
        <br></br>
        Whether you&apos;re a beginner or an experienced player, our teams
        provide a supportive and inclusive environment where you can improve
        your <b>skills</b>, compete at the top division in Denmark, and make
        lasting friendships. <br></br>
        <b>
          Join us and be part of our international community of passionate
          hockey players.
        </b>
      </p>

      <div
        className="carousel carousel-center"
        style={{
          gridColumn: "1/3",
        }}
      >
        <Gallery />
      </div>
    </section>
  );
}
