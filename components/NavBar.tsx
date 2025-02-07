"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Banana from "@/public/logospeedagency.png"
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu as HamburgerIcon } from "lucide-react";

export function NavbarTop() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2"  />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 container mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src={Banana} alt="logo" width={30} height={30} />
          <h2 className="font-bold text-xl">SpeedAgency</h2>
        </div>
      <div className="gap-8 items-center justify-center hidden md:flex">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src={Banana}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src={Banana}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src={Banana}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src={Banana}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        </div>
        <div>
        <div className="hidden md:flex items-center">
          <Button className="rounded-2xl">Offerte aanvragen</Button>
        </div>
        <div className="md:hidden">
        <HamburgerIcon size={32} className="cursor-pointer" />
        </div>
        </div>
        </div>
      </Menu>
    </div>
  );
}
