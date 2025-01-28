import Gallery from "../components/teams/Gallery";
import SubHero from "../components/teams/SubHero";
import Image from "next/image";
import Link from "next/link";

export default function EuroHockey2025() {
  return (
    <>
      <main>
        <SubHero title="EuroHockey Club Challenge II Women" />
      </main>

      <section className="justify-center">
        <div>
          <h2>Welcome to Copenhagen Field Hockey Club</h2>
          <p className="mt-2">
            We are delighted to welcome teams from Sweden, Finland and Denmark
            to the EuroHockey Club Challenge II (Women), from{" "}
            <b>June 6th to 9th, 2025</b>.
          </p>

          <h3 className="mt-12">
            Organising Committee <br></br>Contact Information
          </h3>
          <div className="grid grid-cols-2">
            <p className="mt-2">
              <b>Fay Brasser</b>
              <br></br>
              +45 4416 4208
              <br></br>
              faybrasser@gmail.com
            </p>
            <p className="mt-2">
              <b>Pau Fiaschi</b>
              <br></br>+45 9166 7661<br></br>pau.fiaschi@gmail.com
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.2706225247484!2d12.511646777189128!3d55.64950187304617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465254741e1d56e1%3A0xc42107f8641228d4!2sK%C3%B8benhavns%20Hockeyklub%2C%20Copenhagen%20Field%20Hockey%20Club!5e0!3m2!1sen!2sdk!4v1728115122156!5m2!1sen!2sdk"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.8635343047512!2d12.513818080838703!3d55.64915053822188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525500493affd7%3A0x25bea6c9e2efd96d!2sK%C3%B8benhavns%20Hockeyklubs%20hockeybane%2C%20Copenhagen%20Field%20Hockey%20Club%20hockeypitch!5e1!3m2!1sen!2sdk!4v1728229709247!5m2!1sen!2sdk"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <p className="mt-2">
            Our club is located in Valby&apos;s Idrætspark, and the tournament
            will be played on our blue water based astroturf.
          </p>

          <ul className="mt-6 list-disc ml-6">
            <li>
              11 km from Copenhagen International Airport (15 minutes by car)
            </li>
            <li>5 km from the City Centre</li>
            <li>Ample parking available</li>
            <li>5 km from the designated hotel (9 minutes by car)</li>
          </ul>
          <div className="grid grid-cols-3 mt-6">
            <p className="mt-2">
              <b>Designated Airport:</b>
              <br></br>
              <Link
                className="link link-accent text-sm"
                href="https://maps.app.goo.gl/z9JeGhYDWBcj9ud4A"
                target="_blank"
              >
                Copenhagen Airport
              </Link>
            </p>
            <p className="mt-2">
              <b>Railway Station:</b>
              <br></br>
              <Link
                className="link link-accent text-sm"
                href="https://maps.app.goo.gl/2RNQvp9HZQbShXHt9"
                target="_blank"
              >
                Copenhagen Central Station
              </Link>
            </p>
            <p className="mt-2">
              <b>Hotel:</b>
              <br></br>
              <Link
                className="link link-accent text-sm"
                href="https://en.cabinn.com/hotel/cabinn-copenhagen"
                target="_blank"
              >
                Hotel Cabinn Copenhagen
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="highlightSection">
        <section className="justify-center ec_teams">
          <div style={{ gridColumn: "1/3", maxWidth: "60ch", margin: "auto" }}>
            <h2>Meet the Teams</h2>
          </div>
          <div
            style={{ gridColumn: "1/3", margin: "auto", width: "100%" }}
            className="grid grid-cols-2 gap-10"
          >
            <div>
              <Image
                src="/kh-logo_bw.svg"
                width={200}
                height={200}
                alt="Københavns Hockeyklub logo"
              />
              <div className="team-description">
                <h3>Copenhagen Field Hockey</h3>
                <p>🇩🇰 Denmark</p>
              </div>
            </div>

            <div>
              <Image
                src="/finland-black.png"
                width={200}
                height={200}
                alt="Seinajoki United logo"
              />
              <div className="team-description">
                <h3>Seinäjoki United</h3>
                <p>🇫🇮 Finland</p>
              </div>
            </div>
          </div>
          <div
            style={{ gridColumn: "1/3", margin: "auto", width: "100%" }}
            className="grid grid-cols-2 gap-10"
          >
            <div>
              <Image
                src="/mesaicos.png"
                width={200}
                height={200}
                alt="SLF Mesaicos logo"
              />
              <div className="team-description">
                <h3>SLF Mesaicos</h3>
                <p>🇸🇪 Sweden</p>
              </div>
            </div>

            <div>
              <Image
                src="/orient.png"
                width={200}
                height={200}
                alt="Orient Lungby logo"
              />
              <div className="team-description">
                <h3>Orient Lyngby</h3>
                <p>🇩🇰 Denmark</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="justify-center">
        <div style={{ gridColumn: "1/3" }}>
          <h2>Match Schedule</h2>

          <p className="mt-8 font-bold">
            Friday 6<sup>th</sup> June 2025
          </p>
          <div className="game">
            <p className="time">15.45h</p>
            <div className="team-scheduleA">
              <Image
                src="/finland-black.png"
                width={50}
                height={50}
                alt="Seinajoki United logo"
                className="team-logo"
              />
              <p>Seinäjoki United</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <Image
                src="/orient.png"
                width={50}
                height={50}
                alt="Seinajoki United logo"
                className="team-logo"
              />
              <p>Orient Lyngby</p>
            </div>
          </div>
          <div className="game">
            <p className="time">18.00h</p>
            <div className="team-scheduleA">
              <Image
                src="/mesaicos.png"
                width={50}
                height={50}
                alt="Mesaicos logo"
                className="team-logo"
              />
              <p>SLF Mesaicos</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <Image
                src="/kh-logo_bw.svg"
                width={50}
                height={50}
                alt="Københavns Hockeyklub logo"
                className="team-logo"
              />
              <p>Copenhagen HC</p>
            </div>
          </div>

          <p className="mt-8 font-bold">
            Saturday 7<sup>th</sup> June 2025
          </p>
          <div className="game">
            <p className="time">13.45h</p>
            <div className="team-scheduleA">
              <Image
                src="/finland-black.png"
                width={50}
                height={50}
                alt="Seinajoki United logo"
                className="team-logo"
              />
              <p>Seinäjoki United</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <Image
                src="/mesaicos.png"
                width={50}
                height={50}
                alt="SLF Mesaicos logo"
                className="team-logo"
              />
              <p>SLF Mesaicos</p>
            </div>
          </div>
          <div className="game">
            <p className="time">16.00h</p>
            <div className="team-scheduleA">
              <Image
                src="/kh-logo_bw.svg"
                width={50}
                height={50}
                alt="Copenhagen Hockey Club logo"
                className="team-logo"
              />
              <p>Copenhagen HC</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <Image
                src="/orient.png"
                width={50}
                height={50}
                alt="Orient logo"
                className="team-logo"
              />
              <p>Orient Lyngby</p>
            </div>
          </div>

          <p className="mt-8 font-bold">
            Sunday 8<sup>th</sup> June 2025
          </p>
          <div className="game">
            <p className="time">11.45h</p>
            <div className="team-scheduleA">
              <Image
                src="/mesaicos.png"
                width={50}
                height={50}
                alt="Mesaicos logo"
                className="team-logo"
              />
              <p>SLF Mesaicos</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <Image
                src="/orient.png"
                width={50}
                height={50}
                alt="Orient logo"
                className="team-logo"
              />
              <p>Orient Lyngby</p>
            </div>
          </div>
          <div className="game">
            <p className="time">14.00h</p>
            <div className="team-scheduleA">
              <Image
                src="/kh-logo_bw.svg"
                width={50}
                height={50}
                alt="Københavns Hockeyklub logo"
                className="team-logo"
              />
              <p>Copenhagen HC</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <Image
                src="/finland-black.png"
                width={50}
                height={50}
                alt=" Seinäjoki Unitedlogo"
                className="team-logo"
              />
              <p>Seinäjoki United</p>
            </div>
          </div>

          <p className="mt-8 font-bold">
            Monday 9<sup>th</sup> June 2025
          </p>
          <div className="game">
            <p className="time">9.45h</p>
            <div className="team-scheduleA">
              <p>3rd Pool A</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <p>4th Pool A</p>
            </div>
          </div>
          <div className="game">
            <p className="time">12.00h</p>
            <div className="team-scheduleA">
              <p>1st Pool A</p>
            </div>
            <p>vs</p>
            <div className="team-scheduleB">
              <p>2nd Pool A</p>
            </div>
          </div>
          <p className="mt-8 font-bold">13.45h Prize Giving Ceremony</p>
        </div>
      </section>
    </>
  );
}
