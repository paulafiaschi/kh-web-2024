"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Carousel() {
  return (
    <div style={{ gridColumn: "1/3" }}>
      <Splide aria-label="Social Images">
        <SplideSlide>
          <Image
            src="/social2.jpeg"
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
