import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="navbar bg-base-100 sticky top-0 drop-shadow-sm z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            {/* <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <Link href="/" className="logo">
          <Image
            src="/KH-Logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          Københavns Hockeyklub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
