import CarruselBera from "./CarruselBera";
import CarruselEmpire from "./CarruselEmpire";
import CarruselEscuda from "./CarruselEscuda";
import CarruselToro from "./CarruselToro";

export default function Carrusel() {
  return (
    <div className="flex flex-col justify-center items-center">
        <CarruselBera/>
        <CarruselEmpire/>
        <CarruselEscuda/>
        <CarruselToro/>
    </div>
  );
}

