import { FaCheck } from "react-icons/fa";

export default function SobreNos() {
    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* Cabeçalho */}
                <div className="flex items-center gap-4 mb-10 max-md:flex-col">
                    <h2 className="text-3xl font-semibold text-teal-600 max-md:text-center">
                        Sobre nós
                    </h2>

                    {/* Linha decorativa (só desktop) */}
                    <div className="flex-1 h-[1px] bg-teal-200 max-md:hidden" />
                </div>

                {/* Conteúdo principal */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-start">

                    {/* Imagem (25%) */}
                    <img
                        src="/imagens/imagem-equipe.jpg"
                        alt="Procedimento médico"
                        className="
              w-full 
              rounded-2xl 
              shadow-md 
              object-cover
              md:h-80
              md:col-span-5
            "
                    />

                    {/* Texto (75%) */}
                    <div className="
            text-[#525252] 
            text-md
            leading-relaxed 
            md:col-span-5
          ">

                        <h1 className="font-semibold text-lg">O que é o Grupo Acalásia e Megaesôfago Brasil?</h1>
                        <p className="mb-1">
                            Somos uma rede de apoio, informação e acolhimento para pessoas que convivem com Acalásia e Megaesôfago em todo o Brasil.
                        </p>

                        <p className="mb-1">
                            Nascemos a partir da dor de quem viveu essa realidade de perto e transformamos essa dor em cuidado coletivo.
                        </p>

                        <p className="mb-1">
                            Nosso objetivo é dar voz a quem sofre calado, orientar quem está perdido no diagnóstico e conectar pacientes a profissionais experientes, tratamentos modernos e suporte emocional.
                        </p>

                        {/* Lista */}

                        <div>
                            <h1 className="font-semibold text-lg">Aqui você encontra:</h1>
                            <ul>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                    Acolhimento verdadeiro: ninguém mais precisa passar por isso sozinho.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                    Informação de qualidade: traduzimos a linguagem médica para o dia a dia dos pacientes.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                    Equipe multidisciplinar voluntária: cirurgiões, psicólogos, fisioterapeutas, nutricionistas, engenheiros clínicos e muito mais.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                    Indicação de especialistas na técnica POEM e outras abordagens.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#03ABB6]"><FaCheck className="mt-1.5" /></span>
                                    Campanhas solidárias, orientações e esperança.
                                </li>
                            </ul>
                        </div>

                        <p>
                            A causa exata ainda não é totalmente conhecida, mas há estudos
                            que investigam relação com fatores autoimunes e neurológicos.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
