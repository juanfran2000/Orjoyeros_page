import CardsLocation from "./components/CardsLocation";
import CardsProductos from "./components/CardsProductos";
import Hero from "./components/Hero";

const medallas = [
  {
    image: "/medallas/rafael.jpg",
    model: "Angelito Rafael.",
    size: "/medallas/tamaños/rafael.png",
    alt: "Medalla Angelito Rafael",
    paragraph:
      "Se le asocia con la providencia divina, proporcionando ayuda en momentos de necesidad.",
    link: "https://www.instagram.com/p/C7IXUkPNu_U/?igsh=MWFheWluZXliNTgzbA==",
  },
  {
    image: "/medallas/custodios.jpg",
    model: "Angeles Custodios.",
    size: "/medallas/tamaños/custodios.png",
    alt: "Medalla Angeles custodios",
    paragraph:
      "Se cree que ellos intervienen en momentos de peligro, proporcionando protección y asistencia.",
    link: "https://www.instagram.com/p/C7IXdsdtYCU/?igsh=eW84Y25yZ2kycXRn",
  },
  {
    image: "/medallas/escapulario.jpg",
    model: "Escapulario.",
    size: "/medallas/tamaños/escapulario.png",
    alt: "Medalla Escapulario - Virgen Del Carmen",
    paragraph:
      "Permanecer cerca de la Virgen del Carmen, buscando su guía y protección a lo largo de la vida.",
    link: "https://www.instagram.com/p/C7IiCNitUs_/?igsh=MThzbGRycG8yaHNpZQ==",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-8 md:mt-20">
        <CardsLocation />
      </div>
      <section className="flex flex-col items-center  w-full">
        <div className="flex flex-col items-center py-8 mt-20">
          <h4 className="text-xs md:text-md">Que modelos tienen?</h4>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 md:text-3xl">
            Nuestras Medallas
          </h2>
        </div>
        <div className="mb-20 flex  justify-center container mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {medallas.map((content, index) => {
              return <CardsProductos key={index} data={content} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
