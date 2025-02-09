import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import Trustpilot from "@/public/trustpilot.png";
import Image from "next/image";

export default function Hero() {
  const words = ["converteert", "gevonden wordt", "uniek is", "super snel is"];

  return (
    <div className="relative bg-white text-black dark:bg-black dark:text-white min-h-screen flex items-center justify-center text-center overflow-hidden transition-colors duration-300">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/herobg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6  md:mb-12">
        <span className="bg-white text-black dark:text-black dark:bg-white rounded-full px-2 py-1 text-lg font-medium inline-flex items-center max-w-max gap-4">
  Beoordeeld met 4.9 op{" "}
  <Image src={Trustpilot} alt="Trustpilot" width={80} height={10} />
</span>

        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug text-white dark:text-white">
          Website laten maken? <br />
          Wij zorgen dat jouw website <br />
          <span className="flex justify-center items-center ">
            <FlipWords words={words} />
          </span>
        </h1>

        <p className="text-gray-300 dark:text-gray-300 mb-8 px-4 text-base max-w-2xl mx-auto">
          Een simpele website via wordpress werkte 10 jaar geleden al niet meer. Ben je op zoek om een <strong>website te laten maken</strong> ? Wij bij SpeedAgency bieden SEO, Website, Webshops, SEA en Branding
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/demo"
            className="bg-white text-black dark:bg-white dark:text-black px-5 py-3 items-center justify-center rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Portfolio bekijken
          </Link>
          <Link
            href="/signup"
            className="bg-transparent border-2 border-white text-white dark:border-white dark:text-white px-5 py-3 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-800"
          >
            Whatsapp contact
          </Link>
        </div>
      </div>
    </div>
  );
}
