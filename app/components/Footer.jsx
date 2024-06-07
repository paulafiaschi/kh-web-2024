import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-10 highlightSection text-white">
      <nav>
        {/* <div className="footer-newsletter">
          <div
            style={{ textAlign: "left" }}
            className="sender-form-field"
            data-sender-form-id="lx4mazxmdyrrwejmmrr"
          ></div>
        </div> */}

        <Link href="/" className="logo ">
          <Image
            src="/KH-Logo-white.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          Københavns Hockeyklub
        </Link>

        <div className="footer-social">
          <Link
            href="https://www.facebook.com/Copenhagenhockeyclub"
            className=" link link-hover"
          >
            <Image
              src="/facebook.svg"
              width={30}
              height={30}
              alt="Facebook logo"
            />
          </Link>
          <Link href="/" className=" link link-hover">
            <Image
              src="/instagram.svg"
              width={30}
              height={30}
              alt="Instagram logo"
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
