import { Outlet } from "react-router-dom";
import Menu from "./componentes/menu/Menu";
import { Rodape } from "./componentes/rodape/Rodape";

function App() {
  return (
    <>
      <Menu />
      <div className="h-[100px] sm:h-[180px] md:h-[200px]"></div>
      <Outlet />
      <Rodape />
    </>
  );
}

export default App;
