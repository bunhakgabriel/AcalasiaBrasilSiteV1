import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contato() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      nome: nome,
      email: email,
      telefone: telefone,
      assunto: assunto,
      mensagem: mensagem
    };

    emailjs.send(
      'service_6mjdqab',
      'template_lfh385z',
      templateParams,
      'wTmSm77WhPfC9P-xj'
    )
      .then(() => {
        alert("Mensagem enviada com sucesso, em breve entraremos em contato!");

        setNome("");
        setEmail("");
        setTelefone("");
        setAssunto("");
        setMensagem("");
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        alert("Erro ao enviar mensagem, tente novamente!");
      });
  }

  return (
    <section className="w-full bg-gray-100 py-14 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* FORMULÁRIO */}
        <div className="flex-1">

          <div className="flex items-center gap-4 mb-5">
            <h2 className="text-2xl font-semibold text-[#03ABB6] whitespace-nowrap">
              Fale Conosco
            </h2>

            <div className="flex-1 h-[1px] bg-[#03ABB6] relative top-1">
              <div className="absolute -left-2 -top-[5px] w-3 h-3 border-2 border-[#03ABB6] rounded-full bg-white"></div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Envie uma mensagem com seus dados que em breve retornaremos o contato!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Nome *"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <input
              type="email"
              placeholder="E-mail *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <input
              type="tel"
              placeholder="Telefone *"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <input
              type="text"
              placeholder="Assunto *"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <textarea
              placeholder="Mensagem *"
              rows={5}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <button
              type="submit"
              className="cursor-pointer w-36 bg-[#03ABB6] text-white font-semibold py-3 rounded hover:opacity-90 transition"
            >
              ENVIAR
            </button>
          </form>
        </div>

        {/* CONTATOS + MAPA */}
        <div className="flex-1">
          {/* ... restante igual */}
        </div>

      </div>
    </section>
  );
}