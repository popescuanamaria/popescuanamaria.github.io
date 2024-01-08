"use client";

import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import Image from "next/image";

import { ParallaxProvider } from "react-scroll-parallax";

export default function StorylinePage() {
  return (
    <div>
      <ParallaxProvider scrollAxis="horizontal">
        <Storyline />
      </ParallaxProvider>
    </div>
  );
}

function Storyline() {
  const target = useRef(null);

  const floating_person = useParallax({
    speed: -40,
  });
  const planet = useParallax({
    speed: 20,
  });
  const planet_scale = useParallax({
    scale: [0, 1, "easeInQuad"],
  });
  const planet_rotate = useParallax({
    rotate: [0, 360],
  });
  const birdup0 = useParallax({
    easing: "easeInQuad",
    translateX: [0, -260],
    translateY: [0, 400],
  });
  const birdup1 = useParallax({
    easing: "easeInQuad",
    translateX: [0, -360],
    translateY: [0, 100],
  });
  const birdup2 = useParallax({
    easing: "easeInQuad",
    translateX: [0, 250],
    translateY: [0, 250],
  });
  const birdup3 = useParallax({
    easing: "easeInQuad",
    translateX: [0, -360],
    translateY: [0, 100],
  });
  const birddown0 = useParallax({
    easing: "easeInQuad",
    translateX: [0, -360],
    translateY: [0, 600],
  });
  const birddown1 = useParallax({
    easing: "easeInQuad",
    translateX: [0, 360],
    translateY: [0, 800],
  });
  const birddown2 = useParallax({
    easing: "easeInQuad",
    translateX: [0, -360],
    translateY: [0, 800],
  });
  const birddown3 = useParallax({
    easing: "easeInQuad",
    translateX: [0, -360],
    translateY: [0, -800],
  });

  return (
    <div
      ref={target}
      style={{
        backgroundImage: "url('/storyline/base_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "5500px",
      }}
      className="h-screen"
    >
      <div
        ref={floating_person.ref as React.RefObject<HTMLDivElement>}
        className="absolute bottom-[3%] left-[-10%]"
      >
        <Image
          src="/storyline/floating_person.png"
          alt="floating person"
          height={40}
          width={354}
        />
      </div>
      <div
        ref={planet.ref as React.RefObject<HTMLDivElement>}
        className="absolute bottom-[35%] left-[80%]"
      >
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div
        ref={planet_scale.ref as React.RefObject<HTMLDivElement>}
        className="absolute bottom-[24%] left-[75%] opacity-70"
      >
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={45}
          width={45}
        />
      </div>
      <div
        ref={planet_rotate.ref as React.RefObject<HTMLDivElement>}
        className="absolute bottom-[45%] left-[70%]"
      >
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={75}
          width={75}
        />
      </div>
      <div
        ref={birdup0.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[5%] right-[-170%]"
      >
        <Image
          src="/storyline/bird_up.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div
        ref={birdup1.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[5%] right-[-180%]"
      >
        <Image
          src="/storyline/bird_up.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div
        ref={birdup2.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[7%] right-[-206%]"
      >
        <Image
          src="/storyline/bird_up.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div
        ref={birdup3.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[7%] right-[-230%]"
      >
        <Image
          src="/storyline/bird_up.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div
        ref={birddown0.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[5%] right-[-200%]"
      >
        <Image
          src="/storyline/bird_down.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div
        ref={birddown1.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[27%] right-[-190%]"
      >
        <Image
          src="/storyline/bird_down.png"
          alt="planet"
          height={15}
          width={15}
        />
      </div>
      <div
        ref={birddown2.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[27%] right-[-170%]"
      >
        <Image
          src="/storyline/bird_down.png"
          alt="planet"
          height={15}
          width={15}
        />
      </div>
      <div
        ref={birddown3.ref as React.RefObject<HTMLDivElement>}
        className="absolute top-[23%] right-[-230%]"
      >
        <Image
          src="/storyline/bird_down.png"
          alt="planet"
          height={15}
          width={15}
        />
      </div>
    </div>
  );
}
