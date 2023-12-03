import { FaInstagram, FaPhone, FaLocationDot, FaClock} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-one gap-14 p-6 text-base lg:text-xl">
        <h2 className="flex justify-center text-2xl text-yellow-500 text-center font-bold lg:text-4xl">Queremos brindarte la mejor atención</h2>
        <div className="flex flex-col gap-10 justify-center text-white lg:flex-row">
            <a className="flex gap-4" href="https://www.instagram.com/comprasebenezer/" rel="noreferrer" target="_blank">
                <div className="flex justify-center items-center text-yellow-500 text-5xl">
                  <FaInstagram />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold lg:text-xl mb-2">Instagram</h2>
                  <h2 className="text-base">@comprasebenezer</h2>
                </div>
            </a>
            <div className="flex gap-4" href="https://www.instagram.com/comprasebenezer/" rel="noreferrer" target="_blank">
                <div className="flex justify-center items-center text-yellow-500 text-5xl">
                  <FaPhone/>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold lg:text-xl mb-2">Teléfono</h2>
                  <h2 className="text-base">0𝟰𝟭𝟮-𝟭𝟭𝟵𝟯𝟴𝟯𝟯</h2>
                </div>
            </div>
            <div className="flex gap-4" href="https://www.instagram.com/comprasebenezer/" rel="noreferrer" target="_blank">
                <div className="flex justify-center items-center text-yellow-500 text-5xl">
                  <FaLocationDot/>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold lg:text-xl mb-2">Dirección</h2>
                  <h2 className="text-base">Cúa - Estado Miranda</h2>
                </div>
            </div>
            <div className="flex gap-4" href="https://www.instagram.com/comprasebenezer/" rel="noreferrer" target="_blank">
                <div className="flex justify-center items-center text-yellow-500 text-5xl">
                  <FaClock/>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold lg:text-xl mb-2">Horario</h2>
                  <h2 className="text-base">08:00 AM - 05:00 PM</h2>
                </div>
            </div>
        </div>
        <h2 className="text-white text-center"> Copyright &copy; 2023 Ebenezer - Todos los derechos reservados</h2>
    </div>
  )
}
