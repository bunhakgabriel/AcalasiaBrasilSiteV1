import { RedesSociais } from "../../componentes/redes-sociais/RedesSociais";
import NossaHistoria from "./componentes/NossaHistoria";
import SobreNos from "./componentes/SobreNos";

export default function QuemSomosScreen() {
    return (
        <div>
            <SobreNos />

            <section className="w-full bg-[#03ABB6] py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-white text-lg md:text-[22px] font-semibold leading-relaxed">
                        Já ajudamos centenas de pessoas a reencontrar o prazer de se alimentar e viver com dignidade.
                    </p>
                    <p className="text-white text-lg md:text-[22px] font-semibold leading-relaxed mt-0">
                        Porque viver com Acalásia pode ser difícil, mas juntos, fica mais leve.
                    </p>
                </div>
            </section>

            <NossaHistoria />
            <RedesSociais />
        </div>
    );
}