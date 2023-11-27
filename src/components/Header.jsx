import ebenezerLogo from "../assets/ebenezerLogo.PNG"
import { PiMotorcycleFill } from "react-icons/pi"

export default function Header() {
  return (
      <>
          <div className="fixed z-20 w-full">
            <div className="bg-one flex gap-2 justify-between py-2 px-4 lg:py-4 lg:px-14 ">
              <img src={ebenezerLogo} alt="" className="w-40 h-14 lg:w-56 lg:h-16" />
              <div>
                <a href="#form" className="flex gap-2 w-40 justify-center items-center text-one text-xl px-2 py-3 bg-yellow-400 rounded-lg lg:text-2xl lg:w-auto lg:py-4">Quiero mi <span className="flex justify-center m-auto items-end mx-1"><PiMotorcycleFill/></span></a>
              </div>
            </div>
          </div>
          <div>
            <div className="wave-container flex flex-col w-full h-106 p-4 lg:px-8">
              <div className="flex flex-col w-full m-auto text-center items-center ">
                <h2 className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-two leading-normal text-3xl lg:text-4xl mb-6 lg:px-20">Adquiere tu motocicleta nueva de forma programada y accesible</h2>
              </div>
            </div>
          </div>
      </>
  )
}
