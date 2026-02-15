import BemVindo from "./componentes/BemVindo";
import Carrossel from "./componentes/Carrossel";
import ChamadaInstitucional from "./componentes/ChamadaInstitucional";
import GaleriaHome from "./componentes/GaleriaHome";
import { GaleriaHomeSimples } from "./componentes/GaleriaHomeSimples";
import OQueEAcalasia from "./componentes/OQueEAcalasia";
import ServicosGrid from "./componentes/ServicosGrid";
import { SocialSection } from "./componentes/SocialSection";
import Valores from "./componentes/Valores";

export default function HomeScreen() {
  return (
    <div>
      <Carrossel />
      <BemVindo />
      <GaleriaHomeSimples />
      <Valores />
      <OQueEAcalasia />
      <ChamadaInstitucional />
      <ServicosGrid />
      <GaleriaHome />
      <SocialSection />
    </div>
  );
}