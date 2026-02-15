import BemVindo from "./componentes/BemVindo";
import Carrossel from "./componentes/Carrossel";
import ChamadaInstitucional from "./componentes/ChamadaInstitucional";
import GaleriaHome from "./componentes/GaleriaHome";
import { GaleriaHomeSimples } from "./componentes/GaleriaHomeSimples";
import OQueEAcalasia from "./componentes/OQueEAcalasia";
import ServicosGrid from "./componentes/ServicosGrid";
import { RedesSociais } from "../../componentes/redes-sociais/RedesSociais";
import Valores from "./componentes/Valores";

export default function HomeScreen() {

  const titulo = "Acesse nossas Redes Sociais e conheça depoimentos de pacientes atendidos pelo Grupo Acalásia Megaesôfago Brasil:"

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
      <RedesSociais titulo={titulo} />
    </div>
  );
}