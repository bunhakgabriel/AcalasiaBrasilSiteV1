import { RedesSociais } from "../../componentes/redes-sociais/RedesSociais";
import GaleriaFotos from "./componentes/GaleriaFotos";
import PosPoemVideos from "./componentes/PosPoemVideos";

export default function Portifolio() {
    return (
        <div>
            <RedesSociais titulo="Acalásia e Megaesôfago Brasil" />
            <PosPoemVideos />
            <GaleriaFotos />
        </div>
    );
}