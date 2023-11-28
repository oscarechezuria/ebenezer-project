import CarruselBera from "./carrusel/CarruselBera";
import CarruselEmpire from "./carrusel/CarruselEmpire";
import CarruselEscuda from "./carrusel/CarruselEscuda";
import CarruselToro from "./carrusel/CarruselToro";

export default function Carrusel() {
  return (
    <>
      <div className="flex justify-center items-center text-center">
        <h2 className="text-one mb-10 text-3xl underline underline-offset-8 font-bold">Nuestros Modelos</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
          <CarruselBera/>
          <CarruselEmpire/>
          <CarruselEscuda/>
          <CarruselToro/>
      </div>
    </>
  );
}

