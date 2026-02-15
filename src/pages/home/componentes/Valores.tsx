export default function Valores() {
  const items = [
    {
      titulo: "Missão",
      texto:
        "Contribuir com o bem estar dos pacientes através de uma rede de apoio e informações.",
      imagem: "/imagens/ancora.png"
    },
    {
      titulo: "Visão",
      texto:
        "Desmistificar a acalásia mantendo um atendimento multidisciplinar capacitado.",
      imagem: "/imagens/ancora.png"
    },
    {
      titulo: "Valores",
      texto:
        "Atendimento humanizado, pautado na ética e respeito com pacientes e familiares.",
      imagem: "/imagens/ancora.png"
    }
  ];

  return (
    <section className="w-full bg-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Imagem */}
              <img
                src={item.imagem}
                alt={item.titulo}
                className="w-20 h-20 mb-4 object-contain"
              />

              {/* Título */}
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                {item.titulo}
              </h3>

              {/* Texto */}
              <p className="text-gray-700 max-w-xs">
                {item.texto}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
