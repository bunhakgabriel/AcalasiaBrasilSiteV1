import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

function MensagemEnviada() {

    const navigate = useNavigate();
    const [tempo, setTempo] = useState(11);

    useEffect(() => {
        const interval = setInterval(() => {
            setTempo((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    navigate("/");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);

    }, [navigate]);

    return (
        <section className="h-screen flex items-center justify-center bg-gray-50 px-4 py-10">

            <div className="flex flex-col justify-center bg-white max-w-xl w-full rounded-xl shadow-lg p-8 sm:p-10 text-center">

                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-teal-500 text-6xl sm:text-7xl" />
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                    Mensagem enviada com sucesso!
                </h1>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    Recebemos sua mensagem e nossa equipe irá analisar seu contato.
                    Em breve entraremos em contato com você pelos dados informados.
                </p>

                <p className="text-gray-500 mb-8 text-sm sm:text-base">
                    Você será redirecionado para a página inicial em{" "}
                    <span className="font-semibold text-teal-600">
                        {tempo}
                    </span>{" "}
                    segundos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        to="/"
                        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition"
                    >
                        Voltar para o início
                    </Link>

                    <Link
                        to="/contato"
                        className="border border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-3 rounded-lg transition"
                    >
                        Enviar outra mensagem
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default MensagemEnviada;