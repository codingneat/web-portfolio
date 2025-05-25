import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function ScrollButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && <ScrollToTop smooth color='white' className='!bg-primary !pl-[5px]' />;
}
