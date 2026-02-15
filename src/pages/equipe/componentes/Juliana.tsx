export default function Juliana() {
    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* Cabeçalho */}
                <div className="flex items-center gap-4 mb-10 max-md:flex-col">
                    <h2 className="text-3xl font-semibold text-teal-600 max-md:text-center">
                        Quem somos
                    </h2>

                    {/* Linha decorativa (só desktop) */}
                    <div className="flex-1 h-[1px] bg-teal-200 max-md:hidden" />
                </div>

                {/* Conteúdo principal */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-start">

                    {/* Imagem (25%) */}
                    <img
                        src="/imagens/juliana.jpg"
                        alt="Procedimento médico"
                        className="
                      w-full 
                      rounded-2xl 
                      shadow-md 
                      object-cover
                      md:h-96
                      md:col-span-3
                    "
                    />

                    {/* Texto (75%) */}
                    <div className="
                    text-[#525252] 
                    text-md
                    md:text-lg
                    leading-relaxed 
                    md:col-span-7
                  ">

                        <div>
                            <h1 className="font-semibold text-lg text-[#03ABB6]">Quem é Juliana Grisi?</h1>
                            <p>
                                Juliana Grisi é engenheira clínica, mestre em engenharia biomédica, apaixonada por gente e movida pelo propósito de transformar dor em acolhimento.
                            </p>

                            <p className="mb-1">
                                Foi através de uma experiência pessoal e familiar com a Acalásia que ela descobriu o quanto essa doença silenciosa e rara podia causar sofrimento físico, emocional e social.
                            </p>

                            <p className="mb-1">
                                Sem aceitar ver tantas pessoas perdidas, sem diagnóstico, tratamento e apoio, ela decidiu agir.
                            </p>
                        </div>

                        <div>
                            <h1 className="font-semibold italic">Como nasceu o grupo Acalásia e Megaesôfago Brasil?</h1>
                            <p>
                                O grupo nasceu da vontade de fazer a diferença.
                            </p>
                            <p>
                                De dar voz a quem engasga na própria dor.
                            </p>
                            <p className="mb-1">
                                De unir ciência, acolhimento e solidariedade num só lugar.
                            </p>
                            <p>
                                Juliana começou a reunir pacientes, buscar especialistas comprometidos, construir uma rede de apoio segura e empática.
                            </p>
                        </div>


                    </div>
                </div>
                
                <div className="text-[#525252] my-6 flex flex-col gap-2 text-md md:text-lg">
                    <p>Com o tempo, o grupo cresceu, ultrapassou fronteiras, ganhou força nas redes sociais e hoje já ajudou centenas de pessoas a retomarem suas vidas com dignidade.</p>
                
                    <div>
                        <h1 className="font-semibold italic">O que representa esse movimento?</h1>
                    
                        <p className="m-0">Um espaço onde informação de qualidade se encontra com empatia de verdade.</p>
                        <p className="mb-1 mt-0">Um movimento feito por quem vive a Acalásia de perto, e entende que não basta tratar o esôfago — é preciso cuidar da pessoa por inteiro.</p>
                        <p className="m-0">Mais que um grupo, uma família.</p>
                        <p className="m-0">Juntos, somos mais fortes.</p>
                    </div>
                
                </div>
            </div>
        </section>
    )
}