import Image from "next/image";

export default function CardsLocation() {
  return (
    <div>
      <div className="flex flex-col items-center py-8">
        <h4 className="text-xs md:text-md">Donde nos encuentras?</h4>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 md:text-3xl">
          Nuestras Tiendas
        </h2>
      </div>
      {/* seccion de cards */}
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-x-20">
        {/* lado de la imagen */}
        <div className="rounded-lg w-10/12 h-80 relative md:w-80 md:h-80">
          <Image
            src="/logo.png"
            alt="logo orjoyeros"
            layout="fill"
            objectFit="cover"
            className="rounded-lg" // Aplica cualquier otra clase de Tailwind que necesites
          />
        </div>
        {/* lado de las tarjetas y parrafo */}
        <div className="md:w-[50%]">
          {/* tarjetas */}
          <div className="mt-8 items-center flex flex-col gap-y-4 md:flex-row justify-between">
            <div className="w-[80%] md:w-[48%] h-40 rounded-xl border-black border-[1px] flex flex-col items-center justify-center gap-y-1">
              <span className="icon-[bxs--tree] text-3xl bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700" />
              <h2 className="text-center font-bold">
                Centro Comercial El Bosque
              </h2>
              <h3>Local 45</h3>
              <a
                href="https://maps.app.goo.gl/aAAkZYhYnzTuarFT8"
                target="_blank"
              >
                <div className="px-4 py-2 rounded-lg shadow-sm bg-neutral-100 flex items-center gap-x-2">
                  <h3>Ir a la tienda</h3>
                  <span className="icon-[zmdi--google-maps] bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700" />
                </div>
              </a>
            </div>
            <div className="w-[80%] md:w-[48%] h-40 rounded-xl border-black border-[1px] flex flex-col items-center justify-center gap-y-1">
              <span className="icon-[game-icons--unicorn] text-3xl bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700" />

              <h2 className="text-center font-bold">
                Centro Comercial El Unicornio
              </h2>
              <h3>Local 215</h3>
              <a
                href="https://maps.app.goo.gl/HYyN2Z5mYhcF1ZPr9"
                target="_blank"
              >
                <div className="px-4 py-2 rounded-lg shadow-sm bg-neutral-100 flex items-center gap-x-2">
                  <h3>Ir a la tienda</h3>
                  <span className="icon-[zmdi--google-maps] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700" />
                </div>
              </a>
            </div>
          </div>
          {/* parrafo */}
          <div className="mt-4">
            <h2 className="px-12 md:px-0 text-center md:text-start">
              En ambas tiendas contamos con una amplia variedad de modelos que
              seguramente serán de tu gusto. Además, nuestros mejores asesores
              están disponibles para brindarte la atención que necesitas. Ven y
              descubre todo lo que tenemos para ofrecerte.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
