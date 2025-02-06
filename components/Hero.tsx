import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import Trustpilot from "@/public/trustpilot.png";
import Image from "next/image";

export default function Hero() {
  const words = ["converteerd", "gevonden wordt", "Uniek is", "super snel is"];

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-center items-center text-center transition-colors duration-300">
      <div className="mb-12">
        <span className="bg-black text-white dark:bg-white dark:text-black rounded-full px-4 py-1 text-xl font-medium flex justify-center items-center">
          Beoordeeld met 4.9 op  <Image src={Trustpilot} alt="Trustpilot" width={120} height={10} />
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed">
  Website laten maken? <br />
  Wij zorgen dat jouw website <br />
  <span className="flex justify-center items-center">
    <FlipWords words={words} />
  </span>
</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-8 px-4 max-w-2xl text-lg">
        Wij bij SpeedAgency bieden SEO, Website, Webshops, SEA en Branding
      </p>
      <div className="flex space-x-4">
        <Link
          href="/demo"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Portfolio bekijken
        </Link>
        <Link
          href="/signup"
          className="bg-transparent border-2 border-black text-black dark:border-white dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-800"
        >
          Bel afspraak inplannen
        </Link>
      </div>
    </div>
  );
}
