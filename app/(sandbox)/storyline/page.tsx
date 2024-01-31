"use client";

import { useParallax } from "react-scroll-parallax";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ParallaxProvider } from "react-scroll-parallax";

export default function StorylinePage() {
  return (
    <div className="w-full h-full">
      <ParallaxProvider scrollAxis="horizontal">
        <Storyline />
      </ParallaxProvider>
    </div>
  );
}

const useDeviceSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height]

}

function Storyline() {
  const target = useRef(null);

  // const floating_person = useParallax({
  //   speed: -40,
  // });
  // const planet = useParallax({
  //   easing: "easeInQuad",
  //   scale: [0, 1],
  //   translateX: [0, 260],
  //   translateY: [0, -300],
  // });
  // const planet_scale = useParallax({
  //   scale: [0, 1, "easeInQuad"],
  // });
  // const planet_rotate = useParallax({
  //   rotate: [0, 360],
  // });
  // const birdup0 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, -260],
  //   translateY: [0, 400],
  // });
  // const birdup1 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, -360],
  //   translateY: [0, 100],
  // });
  // const birdup2 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, 250],
  //   translateY: [0, 250],
  // });
  // const birdup3 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, -360],
  //   translateY: [0, 100],
  // });
  // const birddown0 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, -360],
  //   translateY: [0, 600],
  // });
  // const birddown1 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, 360],
  //   translateY: [0, 800],
  // });
  // const birddown2 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, -360],
  //   translateY: [0, 800],
  // });
  // const birddown3 = useParallax({
  //   easing: "easeInQuad",
  //   translateX: [0, -360],
  //   translateY: [0, -800],
  // });

  const [screenWidth, screenHeight] = useDeviceSize();

  let new_height = Math.round(2300 / (2300 / screenHeight))+"px";
  let new_width = Math.round(15277 / (2300 / screenHeight));

  const test = new_width+"px";
  
  console.log("lap wxh: " + screenWidth + "x" + screenHeight);
  console.log("lap: " + test + " -> " + screenHeight + " : " + new_width);

  return (
    <div className="w-full h-screen object-contain overflow-y-hidden">
      <div
        ref={target}
        className="h-full"
        style={{
          backgroundImage: "url('../storyline/base_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: test,
        }}
      >
        {/* <div
          ref={floating_person.ref as React.RefObject<HTMLDivElement>}
          className="absolute bottom-[3%] left-[-10%]"
        >
          <Image
            src="/storyline/floating_person.png"
            alt="floating person"
            height={40}
            width={354}
          />
        </div> */}
        {/* <div
          ref={planet.ref as React.RefObject<HTMLDivElement>}
          className="absolute bottom-[20%] left-[75%]"
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
        </div> */}
      </div>
    </div>
  );
}
