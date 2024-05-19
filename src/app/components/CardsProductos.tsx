"use client";

import React, { useState } from "react";

interface CardProps {
  data: {
    image: string;
    model: string;
    size: string;
    alt: string;
    paragraph: string;
    link: string;
  };
}

export default function Card({ data }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleOrderClick = () => {
    const whatsapp = "992392703";

    // Construir el enlace de WhatsApp con la información del producto y la imagen
    const whatsappMessage = `¡Hola! Me gustaría ordenar la medalla ${data.model} Más detalles aquí: ${data.link}`;
    const whatsappImage = data.link; // URL de la imagen

    const whatsappLink = `https://wa.me/+593${whatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}&media=${encodeURIComponent(whatsappImage)}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };
  return (
    <div
      className={`group h-96 w-80 [perspective:1000px]`}
      onClick={handleCardClick}
    >
      <div
        className={`relative h-full w-full rounded-lg shadow-sm transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0">
          <div className="h-full w-full rounded-lg object-cover shadow-sm shadow-black/40">
            <div className="flex flex-col h-full items-center justify-around">
              <img
                src={data.image}
                alt="imagen de una medalla"
                className="w-11/12"
              ></img>
              <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 clasic text-3xl">
                {data.model}
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-lg bg-black px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center gap-y-2">
            <img src={data.size} alt={data.alt} className="w-full"></img>
            <h2 className="text-3xl font-bold">Tamaños</h2>
            <p>{data.paragraph}</p>
            <button
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 clasic text-3xl"
              onClick={handleOrderClick}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
