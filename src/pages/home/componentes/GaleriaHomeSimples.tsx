export function GaleriaHomeSimples() {
  const images = [
    "/imagens/carrossel-img-5.jpg",
    "/imagens/galeria-home-4.jpg",
    "/imagens/galeria-home-6.jpg",
  ];

  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                shadow-sm
              "
            >
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
