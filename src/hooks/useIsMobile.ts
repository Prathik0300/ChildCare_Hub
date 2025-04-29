import { useEffect, useState } from "react";
import { debounce } from "lodash-es";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;

      // Platform check for mobile devices
      const isMobilePlatform =
        /android|iphone|ipad|iPod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );

      // Width check (for small desktop windows or responsive mobile view)
      const isSmallScreen = window.innerWidth <= 768;

      setIsMobile(isMobilePlatform || isSmallScreen);
    };

    checkIsMobile(); // Check immediately on load

    window.addEventListener("resize", debounce(checkIsMobile, 50)); // Update on window resize

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
