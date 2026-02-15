import BemVindo from "./componentes/BemVindo";
import Carrossel from "./componentes/Carrossel";
import ChamadaInstitucional from "./componentes/ChamadaInstitucional";
import GaleriaHome from "./componentes/GaleriaHome";
import OQueEAcalasia from "./componentes/OQueEAcalasia";
import ServicosGrid from "./componentes/ServicosGrid";
import Valores from "./componentes/Valores";

export default function HomeScreen() {
  return (
    <div>
      <Carrossel />
      <BemVindo />
      <Valores />
      <OQueEAcalasia />
      <ChamadaInstitucional />
      <ServicosGrid />
      <GaleriaHome />
    </div>
  );
}