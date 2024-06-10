"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BurgerMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    menuOpen ? setIsOpening(true) : setIsClosing(true);
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    // console.log("close menu");
    setMenuOpen(false);
  };
  return (
    <nav className={"navBar"}>
      <button onClick={handleToggle}>
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36">
            <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36">
            <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
          </svg>
        )}
      </button>
      <ul
        className={`${"menuNav"} ${menuOpen ? "showMenu" : null} ${
          isOpening ? "showingMenu" : null
        } ${isClosing ? "closingMenu" : null}`}
      >
        <li onClick={() => closeMenu()}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => closeMenu()}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={() => closeMenu()}>
          <Link href="/teams">Teams</Link>
        </li>
        <li className="mt-16 text-sm " onClick={() => closeMenu()}>
          <Link href="/register" className="icon-link">
            <Image
              src="/register.svg"
              width={30}
              height={30}
              alt="Clock icon"
            />{" "}
            Become a Member
          </Link>
        </li>
        <li className="text-sm" onClick={() => closeMenu()}>
          <Link
            href="https://www.holdsport.dk/"
            className="icon-link"
            target="_blank"
          >
            <Image src="/login.svg" width={30} height={30} alt="Clock icon" />{" "}
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
