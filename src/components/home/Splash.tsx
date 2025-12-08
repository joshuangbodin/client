import { ArrowRight } from "lucide-react";
import FadeUp from "../FadeUp";

export default function Splash() {
  return (
    <div className="px-6 md:px-14 lg:px-20  flex flex-col justify-center items-center gap-7  relative h-[75dvh] max-h-[90vh] md:h-dvh">
      {/* Hero Text */}
      <div className="font-header font-bold text-3xl md:text-5xl lg:text-[4.5rem] flex flex-col gap-5 text-center">
        <FadeUp className="flex gap-3 flex-nowrap md:gap-4 w-full items-center justify-center">
          <h1>Prepare</h1>
          <img
            src="/brand/logo.svg"
            className="aspect-[1.19] max-h-10 w-7 md:max-h-10  md:w-max animate-bounce duration-1000 -rotate-12"
          />{" "}
          <h1 className="text-nowrap">In Minutes</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className="text-nowrap">Land any Job!</h1>
        </FadeUp>
      </div>

      {/* Supporting Text */}
      <FadeUp delay={0.25}>
        <p className="text-center max-w-2xl text-gray-500 leading-relaxed text-sm md:text-base lg:text-lg">
          Get Prepared for any Job with our AI masterclass. Build Resumes,
          Optimize existing resumes for any Job or Practice with our AI
          Interviewer.{" "}
        </p>
      </FadeUp>

      {/* Get Started Button */}
      <FadeUp delay={0.3}>
        <button className="flex text-nowrap bg-black text-white text-sm md:text-base lg:text-lg  px-14 py-5 rounded-full gap-6">
          <ArrowRight />
          Get Started for free
        </button>
      </FadeUp>

      {/* Designs */}
      <FadeUp
        className="hidden lg:flex  md:justify-between justify-center  -bottom-40 w-full md:absolute -z-50"
        delay={0.35}
      >
        <img src="splash.svg" className="h-[50vh] md:opacity-20 md:h-max" />
        <img src="splash.svg" className="hidden md:opacity-20 md:block " />
      </FadeUp>
    </div>
  );
}
