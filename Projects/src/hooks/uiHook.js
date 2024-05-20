import { useState, useEffect } from "react";

export const useSize = (element) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: element.current.offsetWidth,
        height: element.current.offsetHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [element]);

  return size;
}

export const useIsVisible = (ref) => {
  const [isVisible, setIsVisible] = useState("visible");

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible("visible");
    } else {
      setIsVisible("hidden");
    }
  });

  useEffect(() => {
    ref.current && observer.observe(ref.current);

    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  });

  return isVisible;
};
