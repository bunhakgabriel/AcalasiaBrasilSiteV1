export function NossaEquipe() {
    return (
        <section className="bg-gray-100 px-4 py-12">
            <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">

                {/* Título */}
                <h2 className="text-xl md:text-2xl font-semibold text-[#03ABB6]">
                    Nossa equipe de apoio
                </h2>

                {/* Subtítulo */}
                <p className="text-gray-600">
                    Porque cuidar de vidas vai muito além da técnica.
                </p>

                {/* Introdução */}
                <p className="leading-relaxed">
                    O grupo Acalásia e Megaesôfago Brasil conta com uma rede de
                    profissionais comprometidos com acolhimento, ciência e ética.
                    Cada um deles tem um papel essencial na jornada dos pacientes
                    antes, durante e depois do tratamento.
                </p>

                <p className="font-semibold text-gray-800">
                    Profissionais que apoiam nossa causa:
                </p>

                {/* Lista de profissionais */}
                <div className="space-y-4">

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Ms. Juliana Grisi
                        </h3>
                        <p>
                            Engenheira Clínica | Mestre em Engenharia Biomédica
                        </p>
                        <p>
                            Idealizadora e coordenadora do grupo
                        </p>
                    </div>

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Dr. Edigar Targino
                        </h3>
                        <p>
                            Cirurgião Geral e Endoscopista | Especialista em cirurgias
                            minimamente invasivas e técnicas endoscópicas terapêuticas,
                            com ênfase na técnica POEM (Miotomia Endoscópica Peroral).
                        </p>
                        <p>
                            Reconhecido por sua atuação no tratamento de Acalásia e
                            distúrbios de motilidade esofágica, com ampla experiência
                            clínica e cirúrgica.
                        </p>
                    </div>

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Dr. Victor Andrade
                        </h3>
                        <p>
                            Cirurgião Geral | Especialista em POEM | Atua em procedimentos
                            endoscópicos terapêuticos e no acompanhamento de pacientes
                            com Acalásia.
                        </p>
                    </div>

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Dr. Yuri Trigueiro
                        </h3>
                        <p>
                            Médico Anestesiologista | Especializado em anestesia para procedimentos endoscópicos terapêuticos
                        </p>
                    </div>

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Dra. Wilza Diane
                        </h3>
                        <p>
                            Psicóloga | Acompanhamento psicológico especializado para pacientes com Acalásia, distúrbios alimentares funcionais, doenças crônicas e transtornos de ansiedade.
                        </p>
                    </div>

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Bárbara Zagel
                        </h3>
                        <p>
                            Fisioterapeuta | Especialista em fisioterapia motora e respiratória no pré e pós-operatório de pacientes com Acalásia
                        </p>
                    </div>

                    {/* Profissional */}
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Miriam
                        </h3>
                        <p>
                            Nutricionista | Acompanhamento nutricional personalizado, com foco em segurança alimentar no pré e pós-POEM
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
