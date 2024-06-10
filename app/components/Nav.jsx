import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="navbar bg-base-100 sticky top-0 drop-shadow-sm z-50">
      <div className="navbar-start	">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
            <li>
              <Link href="#FAQ">FAQ</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="logo">
          <Image
            src="/KH-Logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <p>Københavns Hockeyklub</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
          <li>
            <Link href="#FAQ">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/register" className="btn-sm text-xs">
              Become a Member
            </Link>
          </li>
          <li>
            <Link
              href="https://www.holdsport.dk/"
              target="_blank"
              className="btn btn-sm btn-outline btn-accent text-xs"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
