"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Gears() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const rotation = scrollPosition * 0.1;

      const gear1 = document.getElementById("gear1");
      const gear2 = document.getElementById("gear2");

      if (gear1) {
        gear1.style.transform = `translate(-50%, 0) rotate(${rotation}deg)`;
      }
      if (gear2) {
        gear2.style.transform = `translate(50%, 0) rotate(-${rotation}deg)`;
      }

      if (scrollPosition + windowHeight >= documentHeight) {
        return;
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Image
        className="absolute -translate-x-1/2"
        id="gear1"
        src="/gear.svg"
        width={500}
        height={500}
        alt="Spinning gear wheel"
      />
      <Image
        className="absolute -bottom-32 -right-0 translate-x-1/2"
        id="gear2"
        src="/gear.svg"
        width={500}
        height={500}
        alt="Spinning gear wheel"
      />
    </>
  );
}
