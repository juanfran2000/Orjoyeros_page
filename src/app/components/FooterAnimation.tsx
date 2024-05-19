export default function FooterAnimation() {
  return (
    <div className="sticky left-0 bottom-0 flex w-full h-[320px] sm:h-[370px] overflow-hidden">
      <div className=" z-[-1] absolute top-3 sm:top-0 right-0 bottom-0 left-0">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          className="svgCss top-0 left-0 w-full h-full block box-border"
        >
          <defs>
            <path
              id="wave"
              fill="#00000"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".4">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <section className="text-white flex flex-col justify-end pb-[80px] w-full items-center gap-[20px]">
        <ul className="socials text-2xl flex gap-5">
          <li>
            <a href="https://www.instagram.com/orjoyeros_ec/" target="_blank">
              <span className="icon-[mdi--instagram]" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/doraamparo.ruizmiranda/?locale=es_LA"
              target="_blank"
            >
              <span className="icon-[mdi--facebook]" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@doraamparoruizmir" target="_blank">
              <span className="icon-[ant-design--tik-tok-outlined]" />
            </a>
          </li>
        </ul>
        <ul className="links flex gap-2 md:gap-5">
          <li>
            <a href="#location">Ubicación</a>
          </li>
          <li>
            <a href="#cards">Catálogo</a>
          </li>
        </ul>
        <p className="legal">© 2024 All rights reserved</p>
      </section>
    </div>
  );
}
