"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function CarouselAbout() {
  return (
    <div style={{ gridColumn: "1/3" }}>
      <Splide aria-label="Social Images">
        <SplideSlide>
          <Image
            src="/social2.jpg"
            width={1200}
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
            src="/julefrokost.webp"
            width={1200}
            height={600}
            alt="The Team celebrating Christmas together at the clubhouse"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/pubcrawl.webp"
            width={1200}
            height={600}
            alt="The Team on our annual pubcrawl event"
            style={{
              gridColumn: "1/3",

              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/aalborg.webp"
            width={1200}
            height={600}
            alt="People from both our teams having a beer in Aalborg"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/ec2024.webp"
            width={1200}
            height={600}
            alt="The ladies' team having dinner at the Eurocup 2024"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/m.jpg"
            width={1200}
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
            src="/social4.jpg"
            width={1200}
            height={600}
            alt="Playing paddel tennis with the team"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide>

        {/* <SplideSlide>
          <Image
            src="/social3.jpg"
            width={1200}
            height={600}
            alt="Playing beachvolleyball with the team"
            style={{
              gridColumn: "1/3",
              margin: "auto",
            }}
          />
        </SplideSlide> */}
      </Splide>
    </div>
  );
}
