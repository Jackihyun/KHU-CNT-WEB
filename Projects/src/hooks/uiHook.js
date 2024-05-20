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