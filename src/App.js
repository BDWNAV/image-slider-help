"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function App() {
  return (
    <Splide
      options={{
        height: "100vh",
        gap: "1em",
        perPage: 3,
        focus: "center",
        type: "loop",
      }}
    >
      <SplideSlide>
        <img
          src="./porche.jpg"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </SplideSlide>
      <SplideSlide>
        <img
          src="./porche.jpg"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </SplideSlide>
      <SplideSlide>
        <img
          src="./porche.jpg"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </SplideSlide>
      <SplideSlide>
        <img
          src="./porche.jpg"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </SplideSlide>
    </Splide>
  );
}
