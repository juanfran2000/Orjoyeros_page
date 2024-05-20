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
    link: "https://www.instagram.com/p/C7Mvvv1Jbek/?igsh=MWxucXQyYTZyNW55MQ==",
  },
  {
    image: "/medallas/custodios.jpg",
    model: "Angeles Custodios.",
    size: "/medallas/tamaños/custodios.png",
    alt: "Medalla Angeles custodios",
    paragraph:
      "Se cree que ellos intervienen en momentos de peligro, proporcionando protección y asistencia.",
    link: "https://www.instagram.com/p/C7MvoxopgiS/?igsh=d2N0M2JsMjlqbzh3",
  },
  {
    image: "/medallas/escapulario.jpg",
    model: "Escapulario.",
    size: "/medallas/tamaños/escapularios.png",
    alt: "Medalla Escapulario - Virgen Del Carmen",
    paragraph:
      "Permanecer cerca de la Virgen del Carmen, buscando su guía y protección a lo largo de la vida.",
    link: "https://www.instagram.com/p/C7Mv1N3JloE/?igsh=MWpoejFvNXR4NjVocw==",
  },
  {
    image: "/medallas/maria.jpg",
    model: "Virgen María.",
    size: "/medallas/tamaños/maria.png",
    alt: "Medalla Virgen María",
    paragraph:
      "la Virgen María es un poderoso símbolo de su santidad, su conexión con lo divino y su rol como intercesora y protectora de los fieles.",
    link: "https://www.instagram.com/p/C7MvlBNJ34r/?igsh=MTBrMzN3MDk1bDJ3ZQ==",
  },
  {
    image: "/medallas/virgen.jpg",
    model: "Virgen María.",
    size: "/medallas/tamaños/virgen.png",
    alt: "Medalla Virgen María",
    paragraph:
      "la Virgen María es un poderoso símbolo de su santidad, su conexión con lo divino y su rol como intercesora y protectora de los fieles.",
    link: "https://www.instagram.com/p/C7Mvi5hp-zR/?igsh=ZGw2dDE1ZzgwbGpv",
  },
  {
    image: "/medallas/benito.jpg",
    model: "San Benito.",
    size: "/medallas/tamaños/benito.png",
    alt: "Medalla San Benito",
    paragraph:
      "Llevar la medalla de San Benito significa buscar protección contra el mal y las influencias negativas.",
    link: "https://www.instagram.com/p/C7MvgfgpvHc/?igsh=MW1vZGp1anpja21jaQ==",
  },
  {
    image: "/medallas/fatima.jpg",
    model: "Virgen de Fátima.",
    size: "/medallas/tamaños/fatima.png",
    alt: "Medalla Virgen de Fátima",
    paragraph:
      "Llevar la medalla de la Virgen de Fátima significa buscar protección y bendiciones de la Virgen María.",
    link: "https://www.instagram.com/p/C7Mvc7Jpzxr/?igsh=NTNmbWZ1ZTNnOW8x",
  },
  {
    image: "/medallas/espiritu.jpg",
    model: "Espíritu Santo.",
    size: "/medallas/tamaños/espiritu.png",
    alt: "Medalla Espíritu Santo",
    paragraph:
      "Llevar la medalla del Espíritu Santo simboliza la búsqueda de guía y fortaleza espiritual.",
    link: "https://www.instagram.com/p/C7MvZy6paAa/?igsh=MTlobGQxbTVtczRjdQ==",
  },
  {
    image: "/medallas/comunion.jpg",
    model: "Santa Comunión.",
    size: "/medallas/tamaños/comunion.png",
    alt: "Medalla Santa Comunión",
    paragraph:
      "Llevar la medalla de la Santa Comunión representa la devoción y recuerdo de la primera recepción de la Eucaristía.",
    link: "https://www.instagram.com/p/C7MvXNMps9l/?igsh=MmJmdDN5MWgxMHl2",
  },
  {
    image: "/medallas/confirmacion.jpg",
    model: "Santa Confirmación.",
    size: "/medallas/tamaños/confirmacion.png",
    alt: "Medalla Santa Confirmación",
    paragraph:
      "Llevar la medalla de la Confirmación simboliza la reafirmación de la fe y la recepción del Espíritu Santo.",
    link: "https://www.instagram.com/p/C7MvU1hpQ2W/?igsh=OW03Zm4wNzh6NXV4",
  },
  {
    image: "/medallas/miguel.jpg",
    model: "Arcángel Miguel.",
    size: "/medallas/tamaños/miguel.png",
    alt: "Medalla Arcángel Miguel",
    paragraph:
      "Llevar la medalla del Arcángel Miguel representa la búsqueda de protección y fortaleza espiritual contra el mal.",
    link: "https://www.instagram.com/p/C7MvR5spXdv/?igsh=MWtldjJia2JzcXd4OQ==",
  },
  {
    image: "/medallas/milagrosa.jpg",
    model: "Virgen Milagrosa.",
    size: "/medallas/tamaños/milagrosa.png",
    alt: "Medalla Virgen Milagrosa",
    paragraph:
      "Llevar la medalla de la Virgen Milagrosa simboliza la búsqueda de intercesión y protección divina en momentos de necesidad.",
    link: "https://www.instagram.com/p/C7MvPigJq5S/?igsh=YnM4dWhuODFubTlk",
  },
  {
    image: "/medallas/medjugorje.jpg",
    model: "Virgen Medjugorje.",
    size: "/medallas/tamaños/medjugorje.png",
    alt: "Medalla Virgen Medjugorje",
    paragraph:
      "Llevar la medalla de Medjugorje puede representar la conexión personal con los eventos y mensajes atribuidos a las apariciones marianas en Medjugorje, Bosnia y Herzegovina.",
    link: "https://www.instagram.com/p/C7MvMe-Jxo4/?igsh=MWUya2pjb29xM2ozOQ==",
  },
  {
    image: "/medallas/guadalupe.jpg",
    model: "Virgen Guadalupe.",
    size: "/medallas/tamaños/guadalupe.png",
    alt: "Medalla Virgen Guadalupe",
    paragraph:
      "Llevar la medalla de la Virgen de Guadalupe representa la devoción hacia la Virgen María en su advocación específica como patrona de México y de las Américas, así como símbolo de fe, esperanza y protección.",
    link: "https://www.instagram.com/p/C7MvIO-JjGt/?igsh=MXgwa2Nlb3pkbW1waQ==",
  },
  {
    image: "/medallas/schoenstatt.jpg",
    model: "Virgen Shoenstatt.",
    size: "/medallas/tamaños/schoenstatt.png",
    alt: "Medalla Virgen Shoenstatt",
    paragraph:
      "la medalla de Schoenstatt simboliza la conexión con el Movimiento de Schoenstatt,la formación personal, así como la búsqueda de la cercanía con Dios a través de la Virgen María.",
    link: "https://www.instagram.com/p/C7MvE-UJ8H8/?igsh=eW8wYnpvMnlhcWh3",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-8 md:mt-20" id="location">
        <CardsLocation />
      </div>
      <section className="flex flex-col items-center  w-full" id="cards">
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
