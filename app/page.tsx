import { Bento } from "@/components/Bento";
import Hero from "@/components/Hero";
import { NavbarWithChildren } from "@/components/NavBar";
import { StatsWithGridBackground } from "@/components/stats";


export default function Home() {
  return (
    <div className="">
      <NavbarWithChildren />
      <Hero />
      <StatsWithGridBackground />
      <div>
      </div>
    </div>
  );
}
