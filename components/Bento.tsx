"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import createGlobe from "cobe";
import { useInView } from "react-intersection-observer";

export function Bento() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 px-4 md:px-8">
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800">
          Hoger in google? <br />laat je website maken door ons
        </h2>
      </Header>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
      Bij ons kun je een moderne en professionele website laten maken. We maken websites en webshops. Onze websites zijn snel, veilig en goed vindbaar in Google.
      </p>
      <div className="mt-20  grid cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem]">
        <Card className="flex flex-col justify-between md:col-span-3">
          <CardSkeletonBody>
            <SkeletonOne />
          </CardSkeletonBody>
          <CardContent className="h-40">
            <CardTitle>One click deploy</CardTitle>
            <CardDescription>
              Deploy your app in seconds, with our one click deploy feature.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>Hoger in google met SEO?</CardTitle>
            <CardDescription>
              Wij zorgen dat jij gevonden wordt in google. Dit bestaat uit eenmalige SEO en maandelijkse SEO. En bespaart hoge advertentie kosten.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
              <Image
                src="/seoresult.png"
                alt="Dashboard"
                width={1000}
                height={1000}
                className="w-full object-cover rounded-lg "
              />
            </div>
          </CardSkeletonBody>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>Overal in google gevonden worden</CardTitle>
            <CardDescription>
              Met onze SEO en snelheid geoptimaliseerde website. Wordt jij gevonden in google. Dit doen we zowel eenmalig bij het bouwen en ook maandelijks als onderhoud.
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <SkeletonTwo />
          </CardSkeletonBody>
        </Card>
        <Card className="flex flex-col justify-between md:col-span-3">
          <CardContent className="h-40">
            <CardTitle>Hogere conversie en meer klanten op jouw website?</CardTitle>
            <CardDescription>
              Onze websites hebben een gemiddelde laadsnelheid van 0.05 seconden en wordpress zit op 3-5 seconden. Dit is zeer belangrijk voor google
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
              <Image
                src="/fastwebsite.png"
                alt="Dashboard"
                width={1000}
                height={1000}
                className="w-full object-cover rounded-lg "
              />
            </div>
          </CardSkeletonBody>
        </Card>
      </div>
    </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
      </motion.div>
      {children}
    </div>
  );
};

// Skeletons

export const SkeletonOne = () => {
  const Container = ({
    children,
    ...props
  }: { children: React.ReactNode } & React.ComponentProps<
    typeof motion.div
  >) => {
    return (
      <motion.div
        {...props}
        className={cn(
          "w-full h-14 md:h-40 p-2 rounded-lg relative shadow-lg flex items-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700 justify-center",
          props.className
        )}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="relative flex items-center justify-center  w-full h-full">
      <svg
        width="128"
        height="69"
        viewBox="0 0 128 69"
        fill="none"
        className="absolute left-1/2 -translate-x-[90%]  -top-2 text-neutral-200 dark:text-neutral-800"
      >
        <path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="url(#gradient-2)"
          strokeWidth="1"
        />

        <defs>
          <motion.linearGradient
            initial={{
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            }}
            animate={{
              x1: "100%",
              y1: "90%",
              x2: "120%",
              y2: "120%",
            }}
            id="gradient-2"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor="#001AFF" stopOpacity={`0`} />
            <stop offset="1" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="105"
        viewBox="0 0 62 105"
        fill="none"
        className="absolute left-1/2 -translate-x-0  -bottom-2 dark:text-neutral-800 text-neutral-200"
      >
        <path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="url(#gradient-1)"
          strokeWidth="1"
        />
        <defs>
          <motion.linearGradient
            initial={{
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "0%",
            }}
            animate={{
              x1: "100%",
              y1: "90%",
              x2: "120%",
              y2: "120%",
            }}
            id="gradient-1"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor="#001AFF" stopOpacity={`0`} />
            <stop offset="1" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto w-full relative z-30 [perspective:1000px] [transform-style:preserve-3d] p-8 sm:p-0">
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="overflow-hidden px-2 flex-col justify-center font-mono items-start text-neutral-800 dark:text-neutral-300"
        >
          <p className="text-[8px] bg-transparent ">0.05 seconden laadtijd</p>
          <p className="text-[8px] bg-transparent">
            Beste kwaliteit hosting aangeboden
          </p>
          <p className="text-[8px] bg-transparent">Hoogwaardige kwaliteit websites</p>
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
        >
          <GitHubLogo />
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="flex flex-col justify-center items-center"
        >
          <AWSLogo />
          <p className="text-[8px] bg-transparent ">your site is live ✨</p>
        </Container>
      </div>
    </div>
  );
};

const GitHubLogo = () => {
    return (
        <Image
          src="/google.webp" // Zorg dat google.webp in de /public map staat
          alt="Google Logo"
          width={100} // Pas de breedte aan naar wens
          height={100} // Pas de hoogte aan naar wens
          className="h-12 w-12 object-contain"
        />
      );
    };

const AWSLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      className="h-8 w-8 object-contain text-black dark:text-white"
    >
      <path
        fill="currentColor"
        d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
      />
      <path
        fill="#f90"
        d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
      />
    </svg>
  );
};

export const SkeletonTwo = () => {
    return (
      <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <LazyGlobe className="absolute -right-0 md:-right-10 -bottom-80 md:-bottom-72" />
      </div>
    );
  };
  
  const LazyGlobe = ({ className }: { className?: string }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
    return (
      <div ref={ref}>
        {inView && <Globe className={className} />}
      </div>
    );
  };
  
  export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      let phi = 0;
  
      if (!canvasRef.current) return;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.0, 0.2, 0.6],
        markerColor: [0, 0, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
  
      return () => {
        globe.destroy();
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    );
  };
  
  // Card structure
  const CardSkeletonBody = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={`overflow-hidden relative w-full h-full ${className}`}>
        {children}
      </div>
    );
  };

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-semibold text-xl tracking-tight text-neutral-700 dark:text-neutral-100",
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
