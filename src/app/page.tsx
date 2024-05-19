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
    size: "/medallas/tamaños/escapularios.png",
    alt: "Medalla Escapulario - Virgen Del Carmen",
    paragraph:
      "Permanecer cerca de la Virgen del Carmen, buscando su guía y protección a lo largo de la vida.",
    link: "https://www.instagram.com/p/C7IiCNitUs_/?igsh=MThzbGRycG8yaHNpZQ==",
  },
  {
    image: "/medallas/maria.jpg",
    model: "Virgen María.",
    size: "/medallas/tamaños/maria.png",
    alt: "Medalla Virgen María",
    paragraph:
      "la Virgen María es un poderoso símbolo de su santidad, su conexión con lo divino y su rol como intercesora y protectora de los fieles.",
    link: "https://www.instagram.com/p/C7KrAGPJe2Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/virgen.jpg",
    model: "Virgen María.",
    size: "/medallas/tamaños/virgen.png",
    alt: "Medalla Virgen María",
    paragraph:
      "la Virgen María es un poderoso símbolo de su santidad, su conexión con lo divino y su rol como intercesora y protectora de los fieles.",
    link: "https://www.instagram.com/p/C7Kq76dpcjM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/benito.jpg",
    model: "San Benito.",
    size: "/medallas/tamaños/benito.png",
    alt: "Medalla San Benito",
    paragraph:
      "Llevar la medalla de San Benito significa buscar protección contra el mal y las influencias negativas.",
    link: "https://www.instagram.com/p/C7KqzZCpcu0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/fatima.jpg",
    model: "Virgen de Fátima.",
    size: "/medallas/tamaños/fatima.png",
    alt: "Medalla Virgen de Fátima",
    paragraph:
      "Llevar la medalla de la Virgen de Fátima significa buscar protección y bendiciones de la Virgen María.",
    link: "https://www.instagram.com/p/C7KqsiqJSK5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/espiritu.jpg",
    model: "Espíritu Santo.",
    size: "/medallas/tamaños/espiritu.png",
    alt: "Medalla Espíritu Santo",
    paragraph:
      "Llevar la medalla del Espíritu Santo simboliza la búsqueda de guía y fortaleza espiritual.",
    link: "https://www.instagram.com/p/C7KqjNOJxwd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/comunion.jpg",
    model: "Santa Comunión.",
    size: "/medallas/tamaños/comunion.png",
    alt: "Medalla Santa Comunión",
    paragraph:
      "Llevar la medalla de la Santa Comunión representa la devoción y recuerdo de la primera recepción de la Eucaristía.",
    link: "https://www.instagram.com/p/C7Kqd5BpKxi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/confirmacion.jpg",
    model: "Santa Confirmación.",
    size: "/medallas/tamaños/confirmacion.png",
    alt: "Medalla Santa Confirmación",
    paragraph:
      "Llevar la medalla de la Confirmación simboliza la reafirmación de la fe y la recepción del Espíritu Santo.",
    link: "https://www.instagram.com/p/C7KqU-WJGeu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/miguel.jpg",
    model: "Arcángel Miguel.",
    size: "/medallas/tamaños/miguel.png",
    alt: "Medalla Arcángel Miguel",
    paragraph:
      "Llevar la medalla del Arcángel Miguel representa la búsqueda de protección y fortaleza espiritual contra el mal.",
    link: "https://www.instagram.com/p/C7KqNkPpBKF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/milagrosa.jpg",
    model: "Virgen Milagrosa.",
    size: "/medallas/tamaños/milagrosa.png",
    alt: "Medalla Virgen Milagrosa",
    paragraph:
      "Llevar la medalla de la Virgen Milagrosa simboliza la búsqueda de intercesión y protección divina en momentos de necesidad.",
    link: "https://www.instagram.com/p/C7KqCeqpa1R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/medjugorje.jpg",
    model: "Virgen Medjugorje.",
    size: "/medallas/tamaños/medjugorje.png",
    alt: "Medalla Virgen Medjugorje",
    paragraph:
      "Llevar la medalla de Medjugorje puede representar la conexión personal con los eventos y mensajes atribuidos a las apariciones marianas en Medjugorje, Bosnia y Herzegovina.",
    link: "https://www.instagram.com/p/C7Kp5pUpwg3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/guadalupe.jpg",
    model: "Virgen Guadalupe.",
    size: "/medallas/tamaños/guadalupe.png",
    alt: "Medalla Virgen Guadalupe",
    paragraph:
      "Llevar la medalla de la Virgen de Guadalupe representa la devoción hacia la Virgen María en su advocación específica como patrona de México y de las Américas, así como símbolo de fe, esperanza y protección.",
    link: "https://www.instagram.com/p/C7KpvnBJGjV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "/medallas/schoenstatt.jpg",
    model: "Virgen Guadalupe.",
    size: "/medallas/tamaños/schoenstatt.png",
    alt: "Medalla Virgen Shoenstatt",
    paragraph:
      "la medalla de Schoenstatt simboliza la conexión con el Movimiento de Schoenstatt,la formación personal, así como la búsqueda de la cercanía con Dios a través de la Virgen María.",
    link: "https://www.instagram.com/p/C7KpqjBJr-C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
