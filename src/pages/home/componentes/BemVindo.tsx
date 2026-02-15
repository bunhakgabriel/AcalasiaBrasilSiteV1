export default function BemVindo() {
  return (
    <section className="w-full -mt-6 sm:mt-0 pt-0 pb-12 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-6 max-md:flex-col max-md:gap-2">

          <h2 className="
            text-3xl 
            font-semibold 
            text-teal-600
            max-md:text-2xl
            max-md:text-center
          ">
            Bem-vindo!
          </h2>

          {/* Linha decorativa (só desktop) */}
          <div className="
            flex-1 
            h-[1px] 
            bg-teal-200 
            max-md:hidden
          " />
        </div>

        {/* Texto */}
        <div className="
          text-[#525252] 
          text-lg 
          leading-relaxed 
          space-y-6
          max-md:text-base
          max-md:text-center
        ">
          <p>
            Somos um grupo que oferece acolhimento, orientação e suporte
            humanizado a pacientes com Acalásia e Megaesôfago, além de
            encaminhamento responsável a profissionais especializados e
            acompanhamento multiprofissional.
          </p>

          <p>
            Atendemos pacientes de todo o Brasil e também do exterior.
            Nossa atuação física ocorre especialmente em João Pessoa PB
            (e algumas outras cidades, conforme demanda de pacientes).
          </p>
        </div>

      </div>
    </section>
  );
}
