import { Bento } from "@/components/Bento";
import { ContactSection } from "@/components/ContactSection";
import { CTA } from "@/components/cta";
import Hero from "@/components/Hero";
import { NavbarWithChildren } from "@/components/NavBar";
import { StatsWithGridBackground } from "@/components/stats";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <NavbarWithChildren />
      <Hero />
      <StatsWithGridBackground />
      <div className="container mx-auto max-w-7xl">
  <div className="md:flex justify-between gap-4">
    <div className="md:w-1/2">
      <h2 className="text-3xl font-semibold">Website laten maken door Next Websites?</h2>
      <ul className="list-disc pl-5 mt-10 space-y-6">
        <li><strong>Sneller en beter vindbaar:</strong> Next.js zorgt voor razendsnelle laadtijden en top SEO, waardoor je website beter scoort in Google.</li>
        <li><strong>Veilig en betrouwbaar:</strong> Geen verouderde plugins of risico's zoals bij WordPress. Alles is schaalbaar en up-to-date. Volledig aan te passen op jouw bedrijf</li>
        <li><strong>Investering met resultaat:</strong> Wij garanderen aanvragen via je website, zodat je investering zichzelf terugverdient.</li>
      </ul>
    </div>
    <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center items-center">
      <Image
        src="/seoresult.png"
        width={500}
        height={500}
        alt="SEO Resultaten"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
<CTA />
      <Bento />
      <ContactSection  />
      <div>
      </div>
    </div>
  );
}
