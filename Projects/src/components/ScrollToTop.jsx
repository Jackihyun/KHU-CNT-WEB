import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const excludeScrollPaths = ["/about/stage", "/about/thanksto", "/about/partner"];
    // 현재 페이지가 excludeScrollPaths 배열에 포함되어 있지 않은 경우에만 스크롤을 맨 위로 이동
    if (!excludeScrollPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
