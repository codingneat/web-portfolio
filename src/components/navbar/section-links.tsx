import { useTranslations } from "next-intl";

import { SECTIONS } from "@/lib/constants";

export default function SectionLinks() {
  const t = useTranslations("Navbar");

  return (
    <ul className='mr-4 hidden items-center gap-8 font-mono md:flex'>
      {SECTIONS.map((link, index) => (
        <li key={index}>
          <a href={`/#${link}`} className='group relative cursor-pointer'>
            <span>{t(link)}</span>
            <span className='bg-primary absolute -bottom-2 left-0 h-2 w-0 transition-all group-hover:w-full'></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
