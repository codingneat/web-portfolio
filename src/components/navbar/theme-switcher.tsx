import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme =
      resolvedTheme === "dark" ? "light" : resolvedTheme === "light" ? "dark" : "system";
    setTheme(nextTheme);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <button className='hover:text-primary cursor-pointer' onClick={toggleTheme}>
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </button>
  ) : (
    <Skeleton className='mx-2 h-[25px] w-[25px] rounded-full' />
  );
}
