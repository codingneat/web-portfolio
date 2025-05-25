import { useTranslations } from "next-intl";

import { JOBS, JOB_KEYS } from "@/lib/constants";

export function Experience() {
  const t = useTranslations("Experience");

  return (
    <div id='experience' className='py-8'>
      <h2 className='text-primary/90 dark:text-primary font-mono text-2xl'>{t("title")}</h2>

      <ul className='mt-4 flex flex-col gap-10'>
        {JOBS.map((key) => (
          <li key={key}>
            <div className='group relative size-full pl-4 transition-all duration-100'>
              <span className='bg-muted-foreground absolute -bottom-0 -left-2 mr-4 h-full w-1 opacity-60'></span>
              <span className='bg-primary absolute -top-0 -left-2 mr-4 h-0 w-2 transition-all group-hover:h-full'></span>

              <div className='flex flex-col items-start justify-between sm:flex-row'>
                <div className='flex flex-col'>
                  <p className='text-primary/90 dark:text-primary font-mono text-xl'>
                    {t(`${key}.company`)}{" "}
                    <span className='bg-secondary ml-2 inline-block rounded px-2 py-1 text-sm max-sm:mb-2'>
                      {t(`${key}.place`)}
                    </span>
                  </p>
                  <p className='mt-1 flex items-center font-mono text-lg'>{t(`${key}.position`)}</p>
                </div>
                <p className='text-muted-foreground mt-2'>{t(`${key}.duration`)}</p>
              </div>

              <ul className='text-muted-foreground list-disc space-y-1 pt-2 pl-3 text-justify'>
                {JOB_KEYS.map((jobKey) => (
                  <li key={jobKey}>
                    <span>{t(`${key}.description.${jobKey}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
