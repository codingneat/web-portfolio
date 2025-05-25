import { Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

import Avatar from "./avatar";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className='pt-12'>
      <div className='flex flex-col md:flex-row md:justify-between md:space-y-0'>
        <div className='mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3'>
          <div>
            <h1 className='text-primary/90 dark:text-primary text-4xl font-bold tracking-tight'>
              {t("name")}
            </h1>
            <div>{t("description")}</div>
          </div>

          <div className='flex items-center gap-4 text-sm'>
            <a className='hover:text-primary' href='https://github.com/codingneat' target='_blank'>
              <Github />
            </a>
            <a
              className='hover:text-primary'
              href='https://www.linkedin.com/in/daniel-vergara-091567125/'
              target='_blank'
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <Avatar />
      </div>
    </section>
  );
}
