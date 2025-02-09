import { Bento } from "@/components/Bento";
import { ContactSection } from "@/components/ContactSection";
import { CTA } from "@/components/cta";
import Hero from "@/components/Hero";
import { NavbarWithChildren } from "@/components/NavBar";
import { StatsWithGridBackground } from "@/components/stats";
import Image from "next/image";


export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Next Website",
    "url": "https://nextwebsite.nl",
    "description": "Wil je een professionele website laten maken? Next Website ontwikkelt razend snelle, SEO-geoptimaliseerde websites op maat met Next.js.",
    "image": "https://nextwebsite.nl/images/next-website-homepage.jpg",
    "author": {
      "@type": "Organization",
      "name": "Next Website",
      "logo": "https://nextwebsite.nl/logo.png",
      "url": "https://nextwebsite.nl"
    },
    "sameAs": [
      "https://www.facebook.com/nextwebsite",
      "https://www.linkedin.com/company/nextwebsite",
      "https://www.instagram.com/nextwebsite"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nextwebsite.nl/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jan de Vries"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Next Website heeft een fantastische website voor mijn bedrijf gemaakt. Super snel en SEO-vriendelijk!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lisa van den Berg"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "reviewBody": "Professionele service en duidelijke communicatie. Mijn website draait perfect op Next.js!"
      }
    ]
  };

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
