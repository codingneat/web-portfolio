import { useTranslations } from "next-intl";

import { SKILLS, SKILL_KEYS } from "@/lib/constants";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <div id='skills' className='py-10'>
      <h2 className='text-primary/80 dark:text-primary font-mono text-2xl'>{t("title")}</h2>

      <ul className='text-primary/90 dark:text-primary mt-4 ml-4 flex flex-col gap-6'>
        {SKILL_KEYS.map((key) => (
          <li key={key} className='group grid sm:grid-cols-[250px_1fr]'>
            <p className='relative flex h-full items-end font-mono'>
              {t(`sections.${key}`)}:
              <span className='bg-primary absolute -top-0 -left-4 mr-4 h-0 w-2 transition-all group-hover:h-full'></span>
            </p>
            <p className='text-muted-foreground'>{SKILLS[key].join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
