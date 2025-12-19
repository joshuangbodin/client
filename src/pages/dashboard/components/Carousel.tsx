"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";

/* ----------------------------------------
   SLIDE DATA
---------------------------------------- */
const slides = [
  {
    headline: "Land Jobs the\nEazy Way",
    cta: "Interview Prep",
    imgsrc: "/images/overview1.svg",
  },
  {
    headline: "Build a Resume\nThat Gets Noticed",
    cta: "Create Resume",
    imgsrc: "/images/overview1.svg",
  },
  {
    headline: "Ace Interviews\nWith Confidence",
    cta: "Get Started",
    imgsrc: "/images/overview1.svg",
  },
];

/* ----------------------------------------
   DUPLICATE SLIDES FOR LOOP STABILITY
---------------------------------------- */
const LOOP_SLIDES =
  slides.length < 5 ? [...slides, ...slides, ...slides] : slides;

/* ----------------------------------------
   CAROUSEL
---------------------------------------- */
export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      centeredSlides
      slidesPerView={1.2}
      spaceBetween={20}
      speed={600}
      className="w-full"
    >
      {LOOP_SLIDES.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideCard index={index} {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/* ----------------------------------------
   SLIDE CARD
---------------------------------------- */
type SlideProps = {
  headline: string;
  cta: string;
  imgsrc: string;
  index: number;
};

function SlideCard({ headline, cta, imgsrc, index }: SlideProps) {
  return (
    <div
      className={`relative flex items-center justify-between ${
        index%3 == 0 ? "bg-neutral-600" : index%2 == 0 ? "bg-neutral-800" : "bg-neutral-400"
      } rounded-3xl h-[180px] md:h-[210px] lg:h-[250px] px-6 md:px-10 overflow-hidden`}
    >
      {/* LEFT CONTENT */}
      <div className="z-10 max-w-[60%]">
        <h2 className="text-white font-header text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
          {headline.split("\n").map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h2>

        <button className="inline-flex items-center gap-2 bg-black/80 text-white text-xs md:text-sm lg:text-base px-4 py-2 rounded-full font-semibold transition hover:scale-95 hover:bg-black">
          {cta}
          <ArrowRight size={16} />
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute -right-10 md:right-0 -bottom-50 lg:right-10 flex items-end">
        <img
          src={imgsrc}
          alt={headline}
          className="h-full w-auto md:scale-120 lg:scale-170 object-contain"
        />
      </div>
    </div>
  );
}
