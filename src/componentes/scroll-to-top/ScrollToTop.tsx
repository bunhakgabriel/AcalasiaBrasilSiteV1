import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Força o scroll para o topo sem animação assim que a rota muda
    window.scrollTo({
      top: 0,
      behavior: "auto",  // Usa "auto" em vez de "smooth" para evitar a animação
    });
  }, [location.pathname]);

  return null;
};