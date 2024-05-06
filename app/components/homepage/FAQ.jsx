import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="block" id="FAQ">
      <h2>FAQ</h2>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Where is the club?
        </div>
        <div className="collapse-content">
          <p>
            The club is located in Valby&nbsp;
            <Link
              href={"https://maps.app.goo.gl/W9TT7hntD374WmXF9"}
              className="link link-info"
            >
              (Valby Idrætspark, Ellebjergvej, 2450 København)
            </Link>
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          How can I join?
        </div>
        <div className="collapse-content">
          <p>
            To join our teams, simply show up at the pitch during practice time.
            <br></br> No need to try out. Feel free to come and practice with
            KH&apos;s teams a few times. <br></br>After you have had the chance
            to meet, train and socialize with a few other members of the team,
            we are confident you&apos;ll want to join the KH Family.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          When are the practices?
        </div>
        <div className="collapse-content">
          <p>Our team practices are held on weekdays in the evenings.</p>
          <p className="mt-2">
            <b>Women&apos;s Team: </b>Tue and Thu 18:30-20:00<br></br>
            <b> Men&apos;s Team:</b> Tue and Thu 19:30-21:30<br></br>
            <b> Youth Team:</b> Thu 17:30-18:30<br></br>
            <b> Youth Team: </b>Thu 18:30-20:00<br></br>
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Are there any fees?
        </div>
        <div className="collapse-content">
          <p>
            Yes, there is a membership fee of 650 DKK billed twice annually to
            join our teams.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          I don&apos; have any hockey gear with me. Can I borrow from the club?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we have spare sticks and shinguards for you to borrow. We
            recommend that you buy a mouthguard at any sports shop in
            Copenhagen.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Do you play both Indoor and Outdoor?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we play <b>outdoors</b> from March-October and <b>indoors</b>{" "}
            from November-February.
          </p>
        </div>
      </div>

      <p className="mt-16 text-3xl font-bold">Still have questions?</p>
      <p>Feel free to reach out to us.</p>
      <button className="btn btn-secondary mt-4">Contact Us</button>
    </section>
  );
}
