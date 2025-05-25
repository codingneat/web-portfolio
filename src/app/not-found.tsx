"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='mt-4 text-xl'>{t("title")}</p>

      <Link href={"/"} className='flex items-center gap-2 text-xl font-bold tracking-tighter'>
        <ArrowLeft />
        {t("link")}
      </Link>
    </div>
  );
}
