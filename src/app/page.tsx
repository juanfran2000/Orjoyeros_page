import CardsLocation from "./components/CardsLocation";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-8 md:mt-20">
        <CardsLocation />
      </div>
    </div>
  );
}
