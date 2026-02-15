import type { IconType } from "react-icons";
import {
    FaUserFriends,
    FaCommentDots,
    FaHeartbeat,
    FaSmile,
    FaVideo,
    FaBullhorn,
} from "react-icons/fa";

type CardProps = {
    icon: IconType;
    titulo: string;
    descricao: string;
};


function Card({ icon: Icon, titulo, descricao }: CardProps) {
    return (
        <div className="flex items-start gap-4">
            {/* Ícone circular */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#03ABB6] text-white text-2xl shrink-0">
                <Icon />
            </div>

            {/* Texto */}
            <div>
                <h3 className="text-[#03ABB6] text-lg font-semibold">
                    {titulo}
                </h3>
                <p className="text-gray-600">
                    {descricao}
                </p>
            </div>
        </div>
    );
}

export default function ServicosGrid() {
    return (
        <div className="pt-12">
            <div className="w-full px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[#03ABB6] text-lg md:text-xl font-semibold leading-relaxed">
                        Conosco, você tem acesso a informações sobre sintomas, diagnóstico
                        e tratamento da Acalásia, além de:
                    </p>
                </div>
            </div>

            <div className="w-full py-16 px-6">
                <div className="max-w-6xl mx-auto grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <Card
                        icon={FaUserFriends}
                        titulo="Atendimento"
                        descricao="Canal de atendimento para pacientes em busca de apoio."
                    />

                    <Card
                        icon={FaCommentDots}
                        titulo="Depoimentos"
                        descricao="Depoimentos de pacientes."
                    />

                    <Card
                        icon={FaHeartbeat}
                        titulo="Avaliação"
                        descricao="Agendamento para avaliação com equipe multiprofissional."
                    />

                    <Card
                        icon={FaSmile}
                        titulo="Divulgação"
                        descricao="De campanhas sociais e vaquinhas solidárias."
                    />

                    <Card
                        icon={FaVideo}
                        titulo="Compreensão"
                        descricao="Repositório de vídeos educativos e científicos."
                    />

                    <Card
                        icon={FaBullhorn}
                        titulo="Notícias"
                        descricao="Blog com atualizações e artigos confiáveis."
                    />

                </div>
            </div>
        </div>
    );
}
