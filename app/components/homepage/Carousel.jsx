"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Carousel() {
  return (
    <div style={{ gridColumn: "1/3" }}>
      <Splide aria-label="Social Images">
        <SplideSlide>
          <Image
            src="/j.jpg"
            width={900}
            height={600}
            alt="Thor playing the Hockey5 tournament against Orient"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/k.jpg"
            width={900}
            height={600}
            alt="Tam warming up our goalie"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/l.jpg"
            width={900}
            height={600}
            alt="Ladies celebrating after playing agains each other at Hockey5"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/i.jpg"
            width={900}
            height={600}
            alt="Rasmus playing the Hockey5 tournament in Valby"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/m.jpg"
            width={900}
            height={600}
            alt="Team dinner afetr playing the Mason Cup"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/social2.jpg"
            width={900}
            height={600}
            alt="BBQ at home, next to our blue pitch"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>

        <SplideSlide>
          <Image
            src="/social3.jpg"
            width={900}
            height={600}
            alt="Playing beachvolleyball with the team"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>

        <SplideSlide>
          <Image
            src="/social4.jpg"
            width={900}
            height={600}
            alt="Playing paddel tennis with the team"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
