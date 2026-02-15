import { FaCheck } from "react-icons/fa";

export default function OQueEAcalasia() {
    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* Cabeçalho */}
                <div className="flex items-center gap-4 mb-10 max-md:flex-col">
                    <h2 className="text-3xl font-semibold text-teal-600 max-md:text-center">
                        O que é Acalásia?
                    </h2>

                    {/* Linha decorativa (só desktop) */}
                    <div className="flex-1 h-[1px] bg-teal-200 max-md:hidden" />
                </div>

                {/* Conteúdo principal */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-start">

                    {/* Imagem (25%) */}
                    <img
                        src="/imagens/carrossel-img-5.jpg"
                        alt="Procedimento médico"
                        className="
              w-full 
              rounded-2xl 
              shadow-md 
              object-cover
              md:h-72
              md:col-span-3
            "
                    />

                    {/* Texto (75%) */}
                    <div className="
            text-gray-700 
            text-md
            leading-relaxed 
            md:col-span-7
          ">

                        <p>
                            Acalásia é uma doença rara que afeta o esôfago, o tubo que leva
                            os alimentos da boca até o estômago.
                        </p>

                        <p>
                            Em quem tem Acalásia, os músculos do esôfago não se movimentam
                            corretamente e a válvula (esfíncter) que liga ao estômago não se
                            abre como deveria. Isso faz com que a comida fique “presa” no
                            caminho, causando:
                        </p>

                        {/* Lista */}
                        <ul>
                            <li className="flex items-start gap-2">
                                <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                Dificuldade para engolir (mesmo líquidos)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                Dor ou pressão no peito
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                Refluxo ou tosse após comer
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                Perda de peso
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                Sensação de “entalo” constante
                            </li>
                        </ul>

                        <p>
                            A causa exata ainda não é totalmente conhecida, mas há estudos
                            que investigam relação com fatores autoimunes e neurológicos.
                        </p>

                    </div>
                </div>

                {/* Parte final */}
                <div className="mt-6 space-y-1 text-gray-800 flex flex-col gap-4 md:gap-2">

                    <div>
                        <p className="font-semibold">
                            A boa notícia? Acalásia tem tratamento!
                        </p>

                        <p>
                            Hoje, a técnica POEM (Miotomia Endoscópica Peroral) tem trazido
                            alívio e qualidade de vida para muitos pacientes.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">
                            Você não está sozinho.
                        </p>

                        <p>
                            O grupo @acalasia_megaesofago_brasil existe para acolher,
                            informar e conectar pacientes e profissionais.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
