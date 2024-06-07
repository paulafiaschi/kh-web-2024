"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Gallery() {
  return (
    <Splide aria-label="Ladies Team with the Hockey5 Trophy">
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
          src="/pc-men.webp"
          width={900}
          height={600}
          alt="Men's team defending a penalty corner"
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
          alt="Ladies Team on a break at the Hockey5 Tournament"
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
          alt="Focused ladies' goalie"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/felix.webp"
          width={900}
          height={600}
          alt="Focused men's goalie"
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
          alt="Men's team celebrating the gold medal on 2023"
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
          alt="Alex carrying the ball against Orient"
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
          alt="Ladies Team on a break talking tactics"
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
          alt="Ladies Teams after a Hockey5 Tournament"
          style={{
            gridColumn: "1/3",
            margin: "auto",
          }}
        />
      </SplideSlide>
    </Splide>
  );
}
