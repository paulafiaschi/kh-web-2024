import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-10 highlightSection text-white">
      <nav>
        <Link href="/" className="logo ">
          <Image
            src="/KH-Logo-white.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          Københavns Hockeyklub
        </Link>

        {/* <form className="mt-8">
          <h3 className="footer-title text-lg pl-1">Newsletter</h3>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Subscribe to our newsletter and find out they latest news
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="yourname@kh.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-info join-item">Subscribe</button>
            </div>
          </fieldset>
        </form> */}

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
