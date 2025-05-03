import Link from "next/link";
import Image from "next/image";
import SubHero from "../components/teams/SubHero";
import FAQ from "../components/homepage/FAQ";
import CarouselSectionAbout from "../components/about/CarouselSectionAbout";

export default function AboutUs() {
  return (
    <>
      <main>
        <SubHero
          title="Welcome"
          subtitle="We are a social hockey club in Copenhagen, with international players and a strong sense of community."
          word="Københavns Hockeyklub"
        />
      </main>

      <section className="justify-center">
        <div>
          <p className="text-xs	mb-3 tracking-widest"></p>
          <h2 className="text-5xl">
            Building a Legacy of Excellence in Hockey
          </h2>
          <p className="mb-4">
            Welcome to our richly historic hockey club in Copenhagen, dedicated
            to promoting the sport and providing opportunities for players of
            all ages and skill levels to thrive.
          </p>
          <p className="mb-4">
            Join our diverse community and experience the joy of hockey today!
          </p>
          <Link href="/teams" className="link-hover text-sm link-accent">
            Explore our Teams &#9656;
          </Link>
        </div>
        <div>
          <video
            src="/video.mp4"
            width={700}
            height={700}
            autoPlay
            loop
            muted
            playsInline
            controls
          ></video>
        </div>
      </section>

      <section className="justify-center">
        <div>
          <Image
            src="/ladies-men-indoor.webp"
            width={700}
            height={700}
            alt="Women and Men's teams celebrating the double gold medal - indoor 2023"
          />
        </div>
        <div>
          <p className="text-xs	mb-3 tracking-widest"></p>
          <h2 className="text-4xl">
            Experience the Thrill of Hockey: <br></br>Indoor and Outdoor
          </h2>
          <p>
            We participate in both the outdoor and the indoor hockey
            tournaments, based on the time of the year. Whether you enjoy the
            open field or the fast-paced action of the indoor court, we have it
            all.
          </p>
          <div className="lg:flex mt-6 gap-5">
            <div>
              <h3 className="mb-2">Outdoor Hockey</h3>
              <p>
                Join us on the field for intense matches and thrilling
                competition against top teams, as our season runs from{" "}
                <b>mid-March</b> to <b>October</b>.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Indoor Hockey</h3>
              <p>
                Step onto the pitch and experience the speed and skill of indoor
                hockey, as the season runs from <b>November</b> to the{" "}
                <b>beginning of March</b>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="picturebg justify-center"
        style={{ backgroundImage: "url(/b.webp)" }}
      >
        <div className="fade-overlay"></div>
        <section className=" justify-center">
          <div className="z-40	">
            <h2>Don&apos;t Miss Out</h2>
            <p>
              Join our hockey club and experience the benefits of being part of
              a diverse and competitive team. With top division play, social
              activities, and a welcoming community, you&apos;ll find a home
              with us.
            </p>
          </div>
        </section>
      </div>

      <section className="justify-center" id="contact">
        <div>
          <h2 className="text-3xl">Get in Touch With Us!</h2>
          <p>We are located in Valby, Copenhagen, Denmark.</p>

          <Link
            href={"mailto:khformand@gmail.com"}
            className="link-hover info-group mt-9 "
          >
            <Image
              src="/envelope.svg"
              width={25}
              height={25}
              alt="Envelope Icon"
            />
            khformand@gmail.com
          </Link>

          <Link
            href="https://maps.app.goo.gl/W9TT7hntD374WmXF9"
            target="_blank"
            className="link-hover info-group mt-4 "
          >
            <Image
              src="/location.svg"
              width={25}
              height={25}
              alt="Location Icon"
            />
            Julius Andersens Vej 1, 2450 København SV
          </Link>

          <Link
            href="https://www.facebook.com/Copenhagenhockeyclub"
            className=" link link-hover mt-9  info-group"
            target="_blank"
          >
            <Image
              src="/facebook-black.svg"
              width={30}
              height={30}
              alt="Facebook logo"
            />
            /Copenhagenhockeyclub
          </Link>
          <Link
            href="https://www.instagram.com/copenhagen_fieldhockey/"
            className="link link-hover mt-4  info-group"
            target="_blank"
          >
            <Image
              src="/instagram-black.svg"
              width={30}
              height={30}
              alt="Instagram logo"
            />{" "}
            /copenhagen_fieldhockey
          </Link>
          <Link
            href="https://scorrd.com/clubs/kobenhavns-hockeyklub"
            className=" link link-hover mt-4  info-group"
            target="_blank"
          >
            <Image
              src="/scorrd-black.svg"
              width={30}
              height={30}
              alt="Scorrd logo"
            />
            Københavns Hockeyklub
          </Link>
        </div>
        <div>
          <Link
            href="https://maps.app.goo.gl/W9TT7hntD374WmXF9"
            target="_blank"
            className="link-hover text-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.2704485050403!2d12.511646776950585!3d55.649504899942656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465254741e1d56e1%3A0xc42107f8641228d4!2sK%C3%B8benhavns%20Hockeyklub%2C%20Copenhagen%20Field%20Hockey%20Club!5e0!3m2!1sen!2sdk!4v1714997193628!5m2!1sen!2sdk"
              width={600}
              height={450}
              style={{ border: "0" }}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy={"no-referrer-when-downgrade"}
              className="w-full	"
            ></iframe>
          </Link>
        </div>
      </section>

      <div className="highlightSection">
        <section className="justify-center">
          <div>
            <h2>Meet the Board</h2>
            <p className="mb-4">
              The board at KH is made up of engaged and passionate volunteers
              who meet once a month to keep the club running smoothly. Meetings
              are open to all, so feel free to join or talk to a board member if
              you have ideas, questions, or concerns.
            </p>
          </div>
          <div className="board">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/tobias.jpg"
                  width={100}
                  height={100}
                  alt="Tobias Mourier - chairman"
                />
              </div>
              <p>
                Tobias Mourier<br></br>
                <i>Chairman</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/cecil.jpg"
                  width={100}
                  height={100}
                  alt="Cecilie Jacobsen - treasurer"
                />
              </div>
              <p>
                Cecilie Jacobsen <br></br>
                <i>Treasurer</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/jj.jpg"
                  width={100}
                  height={100}
                  alt="Jesper Jonasson - Member"
                />
              </div>
              <p>
                Jesper Jonasson <br></br>
                <i>Member</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/munde.png"
                  width={100}
                  height={100}
                  alt="Rasmus Mundeling - Member"
                />
              </div>
              <p>
                Rasmus Mundeling <br></br>
                <i>Member</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/fay.jpg"
                  width={100}
                  height={100}
                  alt="Fay Brasser - Member"
                />
              </div>
              <p>
                Fay Brasser <br></br>
                <i>Member</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/pau.png"
                  width={100}
                  height={100}
                  alt="Pau Fiaschi - Member"
                />
              </div>
              <p>
                Pau Fiaschi <br></br>
                <i>Member</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/matilde.jpg"
                  width={100}
                  height={100}
                  alt="Matilde Lundberg Christensen - Deputy Member"
                />
              </div>
              <p>
                Matilde Lundberg Christensen <br></br>
                <i>Deputy Member</i>
              </p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/christian.jpg"
                  width={100}
                  height={100}
                  alt="Christian Møller - Deputy Member"
                />
              </div>
              <p>
                Christian Møller <br></br>
                <i>Deputy Member</i>
              </p>
            </div>
          </div>
        </section>
      </div>
      <CarouselSectionAbout />

      <FAQ />
    </>
  );
}
