import { useEffect, useState } from "react";

const images = [
  "/imagens/carrossel-img-1.jpg",
  "/imagens/carrossel-img-2.jpg",
  "/imagens/carrossel-img-3.jpg"
];

export default function Carrossel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[450px] max-md:h-[260px] overflow-hidden">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className={`
              absolute top-0 left-0 w-full h-full object-contain
              transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

      </div>
    </div>
  );
}
