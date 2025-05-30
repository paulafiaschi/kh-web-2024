import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="block" id="FAQ">
      <h2>FAQ</h2>
      <div className="collapse collapse-arrow rounded-none">
        <input
          type="radio"
          name="my-accordion-1"
          defaultChecked
          aria-labelledby="location"
        />
        <div className="collapse-title text-xl font-medium">
          Where is the club?
        </div>
        <div className="collapse-content">
          <p>
            The club is located in Valby Idrætspark.&nbsp;
            <Link
              href={"https://maps.app.goo.gl/W9TT7hntD374WmXF9"}
              className="link link-accent"
            >
              (Valby Idrætspark, Ellebjergvej, 2450 København)
            </Link>
            <br></br>
            You can meet us on the awesome blue water pitch from mid-March to
            October, or find us in the fabulous hall next to it from November to
            beginning of March.
          </p>
          <p className="mt-2">
            We are very close to the train and metro stations “København Syd”,
            and the Metro stop “Mozarts plads” whithin waking distance.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" aria-labelledby="join" />
        <div className="collapse-title text-xl font-medium">
          How can I join?
        </div>
        <div className="collapse-content">
          <p>
            To join our teams, simply show up at the pitch during practice time.
            <br></br>Feel free to come and practice with KH&apos;s teams a few
            times.
          </p>
          <p className="mt-2">
            Mid-March to October: Meet us at the blue water pitch.<br></br>{" "}
            November to beginning of March: Find us in the indoor hall.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input
          type="radio"
          name="my-accordion-1"
          aria-labelledby="practiceTime"
        />
        <div className="collapse-title text-xl font-medium">
          When do the Teams practice?
        </div>
        <div className="collapse-content">
          <p>Our team practices are held on weekdays in the evenings.</p>
          <p className="mt-2">
            <b>Outdoor &#40;Mid-March to October&#41;</b>
            <br></br>
            &emsp;Women&apos;s Team: Tue and Thu 18:30-20:00<br></br>
            &emsp;Men&apos;s Team: Tue and Thu 19:30-21:30<br></br>
            &emsp;Youth Team: Thu 17:30-18:30<br></br>
            &emsp;Masters&apos; Team: Thu 18:30-20:00<br></br>
          </p>
          <p className="mt-2">
            <b>Indoor &#40;November to beginning of March&#41;</b>
            <br></br>
            &emsp;Women&apos;s Team: Wed 19:00 - 20:30<br></br>
            &emsp;Men&apos;s Team: Wed 20:30-22:30<br></br>&emsp;&emsp;+ Mix
            practice on Mondays 20:30-22:00<br></br>
            &emsp;Youth Team: Wed 18:00-19:00<br></br>
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" aria-labelledby="fee" />
        <div className="collapse-title text-xl font-medium">
          Are there any fees?
        </div>
        <div className="collapse-content">
          <p>
            Yes, to join either our <b>Women&apos;s</b> Team or the{" "}
            <b>Men&apos;s</b> Team, there is a membership fee of 750 DKK billed
            twice annually.
          </p>
          <p className="mt-2">
            Membership fee for the <b>Youth</b> Team is 800 DKK per year.
          </p>
          <p className="mt-2">
            Membership fee for the <b>Masters&apos;</b> Team is 700 DKK per
            year.
          </p>
          <p className="mt-2">
            To be part of our support club <b>&quot;KH&apos;s Venner&quot;</b>{" "}
            membership fee is 250 DKK billed annually.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" aria-labelledby="fee" />
        <div className="collapse-title text-xl font-medium">
          Does the membership get cancelled automatically when I stop playing?
        </div>
        <div className="collapse-content">
          <p>
            No, this is a subscription, like any other. If you want out, you
            need to do it yourself before the next automatic payment.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-1" aria-labelledby="equipment" />
        <div className="collapse-title text-xl font-medium">
          I don&apos;t have any hockey gear with me. Can I borrow from the club?
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
        <input type="radio" name="my-accordion-1" aria-labelledby="seasons" />
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
      <Link
        href="/about#contact"
        target="_blank"
        className="btn btn-accent mt-4"
      >
        Contact Us
      </Link>
    </section>
  );
}
