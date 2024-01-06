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

      <div ref={planet.ref as React.RefObject<HTMLDivElement>} 
           className="absolute bottom-[35%] left-[80%]">
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
      <div ref={planet_scale.ref as React.RefObject<HTMLDivElement>} 
           className="absolute bottom-[24%] left-[75%] opacity-70">
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={45}
          width={45}
        />
      </div>
      <div ref={planet_rotate.ref as React.RefObject<HTMLDivElement>} 
           className="absolute bottom-[45%] left-[70%]">
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={75}
          width={75}
        />
      </div>
    </div>
  );
}
