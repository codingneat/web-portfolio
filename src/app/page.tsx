"use client";

import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import ScrollButton from "@/components/ui/scroll-button";

export default function Page() {
  return (
    <div className='bg-background text-foreground mx-auto w-full px-4 pt-6 sm:pt-12 lg:w-2/3 xl:w-1/2'>
      <Navbar />

      <main className='min-h-lvh px-4'>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <ScrollButton />
      </main>
    </div>
  );
}
