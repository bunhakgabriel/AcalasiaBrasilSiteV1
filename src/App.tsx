import { Outlet } from "react-router-dom";
import Menu from "./componentes/menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <div className="h-[100px] sm:h-[180px] md:h-[200px]"></div>
      <Outlet />
    </>
  );
}

export default App;
