import { useTranslations } from "next-intl";
import Image from "next/image";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <div id='projects' className='my-8 flex flex-col'>
      <h2 className='text-primary/90 dark:text-primary font-mono text-2xl'>{t("title")}</h2>

      <div className='mt-4 flex flex-col space-y-4'>
        <div className='group border-secondary bg-secondary/50 hover:border-accent relative rounded-xl border-1 p-6 md:hover:scale-[1.01]'>
          <a
            className='group flex flex-col items-center gap-2 space-y-8 transition duration-200 md:flex-row md:gap-6 md:space-y-0 md:space-x-4'
            href='https://neat-json-form-builder.netlify.app/'
            target='_blank'
          >
            <Image
              className='h-[75px]'
              src='/images/json_form_builder.png'
              width={75}
              height={75}
              alt='Json form builder'
            />
            <div className='flex-col space-y-2'>
              <h4 className='relative flex w-[190px] flex-row items-center space-x-2 text-lg font-semibold'>
                {t("projects.json_form_builder.title")}
                <span className='bg-primary absolute -bottom-2 left-0 h-2 w-0 transition-all group-hover:w-full'></span>
              </h4>
              <p className='text-md text-muted-foreground'>
                {t("projects.json_form_builder.description")}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
