"use client";

import { SquareCode } from "lucide-react";
import Link from "next/link";

import LocaleSwitcher from "./locale-switcher";
import MobileMenu from "./mobile-menu";
import SectionLinks from "./section-links";
import ThemeSwitcher from "./theme-switcher";

export function Navbar() {
  return (
    <header className='flex items-center justify-between'>
      <Link href={"/"} className='text-primary'>
        <SquareCode size={30} />
      </Link>

      <nav className='flex items-center gap-2'>
        <SectionLinks />
        <LocaleSwitcher />
        <ThemeSwitcher />
        <MobileMenu />
      </nav>
    </header>
  );
}
