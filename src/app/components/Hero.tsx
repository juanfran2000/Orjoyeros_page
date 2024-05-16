import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:flex md:flex-row-reverse">
      <div className="w-full flex flex-col items-center justify-center gap-6 my-48">
        <div className="px-8 md:px-24 text-center flex flex-col gap-y-2">
          <h1 className="text-4xl font-bold">
            Anillos de boda & Medallas religiosas
          </h1>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=593992392703&text=Hola+Dora+pude+visitar+su+web+quiero+m%C3%A1s+informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-neutral-100 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Escríbenos a Whatsapp
          </span>
        </a>
        <a href="/">
          <div className="flex flex-col items-center gap-y-2">
            <span className="icon-[pajamas--catalog-checkmark] text-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700" />
            <p>Ver Catálogo</p>
          </div>
        </a>
      </div>
      <div className=" w-full">
        <div>
          <Image
            src="/portada.png"
            alt="imagen de pareja casada"
            width={5000}
            height={0}
            className="md:h-[770px] md:object-cover"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
