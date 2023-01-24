import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Код выше нужен для того чтобы скролл при переключении страницы перем-ся также вверх страницы
// Подр-е: https://v5.reactrouter.com/web/guides/scroll-restoration
