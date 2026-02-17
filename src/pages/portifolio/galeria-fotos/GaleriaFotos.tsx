import { useState } from "react";
import {
    FiX,
    FiChevronLeft,
    FiChevronRight,
    FiSearch,
} from "react-icons/fi";

const images: string[] = [
    "/imagens/carrossel-img-5.jpg",
    "/imagens/galeria-home-2.jpg",
    "/imagens/galeria-fotos-1.jpg",
    "/imagens/galeria-fotos-2.jpg",
    "/imagens/galeria-home-3.jpg",
    "/imagens/galeria-fotos-3.jpg",
    "/imagens/galeria-home-4.jpg",
    "/imagens/galeria-home-1.jpg",
];

export default function GaleriaFotos() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openModal = (index: number): void => {
        setSelectedIndex(index);
    };

    const closeModal = (): void => {
        setSelectedIndex(null);
    };

    const nextImage = (): void => {
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            return (prev + 1) % images.length;
        });
    };

    const prevImage = (): void => {
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === 0 ? images.length - 1 : prev - 1;
        });
    };

    return (
        <>
            {/* GRID */}
            <div className="px-10 grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                {images.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(index)}
                        className="relative cursor-pointer group overflow-hidden rounded-lg"
                    >
                        <img
                            src={src}
                            alt={`gallery-${index}`}
                            className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <FiSearch className="text-white w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl w-[90%] flex items-center justify-center">

                        {/* Close */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                            className="cursor-pointer absolute -top-12 right-0 text-white hover:opacity-80"
                            aria-label="Fechar"
                        >
                            <FiX size={32} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="cursor-pointer absolute left-8 md:left-0 -ml-14 text-white hover:opacity-80"
                            aria-label="Imagem anterior"
                        >
                            <FiChevronLeft size={40} />
                        </button>

                        {/* Image */}
                        <img
                            src={images[selectedIndex]}
                            alt="Imagem ampliada"
                            className="max-h-[80vh] rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="cursor-pointer absolute right-8 md:right-0 -mr-14 text-white hover:opacity-80"
                            aria-label="Próxima imagem"
                        >
                            <FiChevronRight size={40} />
                        </button>
                    </div>
                </div>
            )}


        </>
    );
};
