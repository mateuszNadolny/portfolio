import { useState, useEffect } from "react";

interface ViewportSize {
  width: number;
  isMobile: boolean;
}

export const useViewportSize = (): ViewportSize => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    isMobile: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        isMobile: window.innerWidth < 1024, // 1024px is Tailwind's 'lg' breakpoint
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
};
