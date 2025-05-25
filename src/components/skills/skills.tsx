import { useTranslations } from "next-intl";

import { SKILLS, SKILL_KEYS } from "@/lib/constants";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <div id='skills' className='py-10'>
      <h2 className='text-primary/80 dark:text-primary font-mono text-2xl'>{t("title")}</h2>

      <ul className='text-primary/90 dark:text-primary mt-4 flex flex-col gap-2'>
        {SKILL_KEYS.map((key) => (
          <li key={key} className='grid items-end sm:grid-cols-[250px_1fr]'>
            <p className='font-mono'>{t(`sections.${key}`)}:</p>
            <p className='text-muted-foreground'>{SKILLS[key].join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
