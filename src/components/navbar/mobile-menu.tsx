import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { SECTIONS } from "@/lib/constants";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function MobileMenu() {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className='hover:text-primary ml-3 cursor-pointer md:hidden'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side='left' className='md:hidden'>
          <SheetTitle className='hidden'>menu</SheetTitle>
          <div className='grid gap-4 p-4'>
            {SECTIONS.map((link, index) => (
              <Link
                key={index}
                href={`/#${link}`}
                onClick={() => setOpen(false)}
                className='hover:text-primary font-mono font-medium'
                prefetch={false}
              >
                {t(link)}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
