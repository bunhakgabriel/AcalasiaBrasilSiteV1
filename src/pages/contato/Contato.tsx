export default function Contato() {
  return (
    <section className="w-full bg-gray-100 py-14 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* FORMULÁRIO */}
        <div className="flex-1">
          {/* Título */}
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

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome *"
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <input
              type="email"
              placeholder="E-mail *"
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <input
              type="tel"
              placeholder="Telefone *"
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <input
              type="text"
              placeholder="Assunto *"
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <textarea
              placeholder="Mensagem *"
              rows={5}
              className="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-[#03ABB6]"
            />

            <button
              type="submit"
              className="w-36 bg-[#03ABB6] text-white font-semibold py-3 rounded hover:opacity-90 transition"
            >
              ENVIAR
            </button>
          </form>
        </div>

        {/* CONTATOS + MAPA */}
        <div className="flex-1">
          {/* Título */}
          <div className="flex items-center gap-4 mb-5">
            <h2 className="text-2xl font-semibold text-[#03ABB6] whitespace-nowrap">
              Contatos
            </h2>

            <div className="flex-1 h-[1px] bg-[#03ABB6] relative top-1">
              <div className="absolute -left-2 -top-[5px] w-3 h-3 border-2 border-[#03ABB6] rounded-full bg-white"></div>
            </div>
          </div>

          <div className="text-gray-700 space-y-1">
            <p>(81) 99247-9363</p>
            <p>(83) 98888-2363</p>
            <p className="text-[#03ABB6]">acalasiabrasil@gmail.com</p>
            <p className="text-[#03ABB6]">acalasiabrasil@acalasia.com.br</p>

            <p className="mt-3 font-semibold text-[#03ABB6]">
              Atendimento Administrativo e Apoio:
            </p>
          </div>

          {/* MAPA */}
          <div className="mt-4 w-full h-[260px] rounded overflow-hidden">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps?q=R.+Dep.+Geraldo+Mariz,+819+-+Tambauzinho&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          <p className="mt-2 text-sm text-red-600 italic">
            (Obs.: Não corresponde a local de atendimento clínico)
          </p>
        </div>
      </div>
    </section>
  );
}
