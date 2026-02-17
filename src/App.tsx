import { Outlet } from "react-router-dom";
import Menu from "./componentes/menu/Menu";
import { Rodape } from "./componentes/rodape/Rodape";
import { ScrollToTop } from "./componentes/scroll-to-top/ScrollToTop";
import WhatsappButton from "./componentes/whatsapp-button/WhatsappButton";

function App() {
  return (
    <>
      <ScrollToTop />
      <Menu />
      <div className="h-[100px] sm:h-[180px] md:h-[200px]"></div>
      <Outlet />
      <WhatsappButton />
      <Rodape />
    </>
  );
}

export default App;
