"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function Avatar() {
  const [isMounted, setIsMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className='justify-items-center'>
      {isMounted ? (
        resolvedTheme === "dark" ? (
          <Image src='/images/avatar_dark.png' width={200} height={200} alt='Avatar' />
        ) : (
          <Image src='/images/avatar.png' width={200} height={200} alt='Avatar' />
        )
      ) : (
        <Skeleton className='my-[10px] h-[180px] w-[130px] rounded-full' />
      )}
    </div>
  );
}
