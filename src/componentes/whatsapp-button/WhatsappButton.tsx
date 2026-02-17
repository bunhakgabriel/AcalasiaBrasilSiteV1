import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const numero = "5581992479363"; // coloque seu número com DDI
  const link = `https://wa.me/${numero}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 md:left-10 bottom-4 md:bottom-18 z-50 group flex items-center"
    >

      {/* Botão */}
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center 
        rounded-full bg-green-500 text-white text-2xl shadow-lg
        transform transition duration-300
        group-hover:scale-110"
      >
        <FaWhatsapp size={35} />
      </div>

      {/* Texto */}
      <span className="inline-block 
        bg-black text-white text-sm md:text-md px-4 py-1 rounded-full
        translate-x-1
        group-hover:opacity-100 group-hover:translate-x-2
        transition-all duration-300"
      >
        Whatsapp
      </span>
    </a>
  );
}
