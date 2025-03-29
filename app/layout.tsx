// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"
// import { Analytics } from "@vercel/analytics/react"
// import { Footer } from "@/components/Footer";
// import { NavbarWithChildren } from "@/components/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Website Laten Maken SEO Geoptimaliseerd | Next Website",
//   description: "Wil je een professionele website laten maken? Next Website ontwikkelt razend snelle, SEO-geoptimaliseerde websites op maat met Next.js.",
//   openGraph: {
//     title: "Website Laten Maken SEO Geoptimaliseerd | Next Website",
//     description: "Wil je een professionele website laten maken? Next Website ontwikkelt razend snelle, SEO-geoptimaliseerde websites op maat met Next.js.",
//     url: "https://nextwebsite.nl",
//     images: [
//       {
//         url: "https://nextwebsite.nl/images/next-website-homepage.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Website laten maken bij Next Website"
//       }
//     ]
//   }
// };



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="nl">
//       <body>
//            <ThemeProvider
//             attribute="class"
//             defaultTheme="light"
//             enableSystem={false}
//             disableTransitionOnChange
//           >
//            <NavbarWithChildren />
//             {children}
//             <Footer />
//           </ThemeProvider>
//           <Analytics />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/Footer";
import { NavbarWithChildren } from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Laten Maken SEO Geoptimaliseerd | Next Website",
  description: "Wil je een professionele website laten maken? Next Website ontwikkelt razend snelle, SEO-geoptimaliseerde websites op maat met Next.js.",
  openGraph: {
    title: "Website Laten Maken SEO Geoptimaliseerd | Next Website",
    description: "Wil je een professionele website laten maken? Next Website ontwikkelt razend snelle, SEO-geoptimaliseerde websites op maat met Next.js.",
    url: "https://nextwebsite.nl",
    images: [
      {
        url: "https://nextwebsite.nl/images/next-website-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Website laten maken bij Next Website"
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NavbarWithChildren />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}