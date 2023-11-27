import CarruselBera from "./CarruselBera";
import CarruselEmpire from "./CarruselEmpire";
import CarruselEscuda from "./CarruselEscuda";
import CarruselToro from "./CarruselToro";

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

