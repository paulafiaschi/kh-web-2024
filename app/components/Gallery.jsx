"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Gallery() {
  return (
    <Splide
      aria-label="My Favorite Images"
      style={{
        gridColumn: "1/3",
      }}
    >
      <SplideSlide>
        <Image
          src="/b.webp"
          width={900}
          height={900}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/a.webp"
          width={900}
          height={900}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
    </Splide>
  );
}
