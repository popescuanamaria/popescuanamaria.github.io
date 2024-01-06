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
    speed: -60,
    targetElement: target.current,
  });
  const train = useParallax({
    speed: 90,
    targetElement: target.current,
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
        ref={floating_person.ref}
        className="absolute bottom-[3%] left-[80%]"
      >
        <Image
          src="/storyline/floating_person.png"
          alt="floating person"
          height={40}
          width={354}
        />
      </div>

      <div ref={train.ref} className="absolute bottom-[35%] left-[55%]">
        <Image
          src="/storyline/planet.png"
          alt="planet"
          height={35}
          width={35}
        />
      </div>
    </div>
  );
}
