import ebenezerLogo from "../assets/ebenezerLogo.PNG"
import { PiMotorcycleFill } from "react-icons/pi"

export default function Header() {
  return (

          <div className="">
            <div className="fixed z-20 w-full">
              <div className="bg-one flex justify-between py-4 px-4 md:py-4 md:px-14 ">
                <img src={ebenezerLogo} alt="" className="w-40 h-12 lg:w-60 lg:h-16" />
                <a href="#form" className="flex gap-2 justify-center items-center text-one text-xl p-2 bg-yellow-400 rounded-lg md:text-2xl">Quiero mi <span className="flex justify-center m-auto items-end mx-1"><PiMotorcycleFill/></span></a>
              </div>
            </div>
            <div className="wave-container flex flex-col w-full h-102 p-4 lg:px-8">
              <div className="flex flex-col w-full m-auto text-center items-center">
                <h2 className="text-whrite text-2xl lg:text-4xl mb-6">La forma más inteligente de comprar tu moto <span className="underline underline-offset-4 "></span></h2>
              </div>
            </div>
          </div>



  )
}
