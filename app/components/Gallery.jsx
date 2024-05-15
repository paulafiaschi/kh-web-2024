"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Gallery() {
  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <Image
          src="/a.webp"
          width={900}
          height={600}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/c.webp"
          width={900}
          height={600}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/d.webp"
          width={900}
          height={600}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/Hockey-DM-81.jpg"
          width={900}
          height={600}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/f.webp"
          width={900}
          height={600}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/g.webp"
          width={900}
          height={600}
          alt="Picture of the author"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/outdoor-1.jpeg"
          width={900}
          height={600}
          alt="JJ playing outdoor hockey"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/h.webp"
          width={900}
          height={600}
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
