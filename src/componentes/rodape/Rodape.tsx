import { FaWhatsapp } from "react-icons/fa";

export function Rodape() {
  return (
    <footer className="w-full">
      {/* Conteúdo principal */}
      <div className="bg-gray-100 px-6 py-10">
        <div className="
          max-w-7xl mx-auto
          grid grid-cols-1
          md:grid-cols-3
          gap-10
        ">
          {/* Coluna 1 */}
          <div>
            <h3 className="font-semibold text-gray-600 text-md md:text-lg tracking-wider border-b-2 border-[#03ABB6] pb-2 mb-4">
              COMPROMISSOS
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>Informação</li>
              <li>Acolhimento</li>
              <li>Apoio e União</li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="font-semibold text-gray-600 text-md md:text-lg tracking-wider border-b-2 border-[#03ABB6] pb-2 mb-4">
              CONTATOS
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li className="font-bold">(81) 99247-9363</li>
              <li className="font-bold flex items-center gap-2">
                (83) 98888-2363
                <span><FaWhatsapp /></span>
              </li>
              <li className="font-semibold text-[#03ABB6]">
                acalasiabrasil@gmail.com
              </li>
              <li className="font-semibold text-[#03ABB6]">
                acalasiabrasil@acalasia.com.br
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="font-semibold text-gray-600 text-md md:text-lg tracking-wider border-b-2 border-[#03ABB6] pb-2 mb-4 w-full">
              CONTE COM
            </h3>

            <img
              src="/imagens/logo.png"
              alt="Acalásia Megaesôfago Brasil"
              className="w-40 mt-2"
            />
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#03ABB6] text-white text-center text-sm py-3 px-4">
        Criado por: <strong>Acalásia e Megaesôfago Brasil</strong> | Copyright ©
        2026 | Sistema Site 8 - Versão 11.2
      </div>
    </footer>
  );
}
