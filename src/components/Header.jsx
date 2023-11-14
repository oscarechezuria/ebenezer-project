import ebenezerLogo from "../assets/ebenezerLogo.PNG" 
import { PiMotorcycleFill } from "react-icons/pi"

export default function Header() {
    return (
            <div className="wave-container flex flex-col h-102 w-full p-4 pb-12 lg:px-8">
                <div>
                    <img src={ebenezerLogo} alt="" className="w-44 h-16 lg:w-60 lg:h-16" />
                </div>
                <div className="flex flex-col w-full m-auto text-center items-center">
                    <h2 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-white via-white to-two lg:text-5xl">La forma más inteligente de comprar tu moto <span className="underline underline-offset-4 "></span></h2>
                    <ul className="mt-8 text-2xl bg-two bg-opacity-70 p-2 cursor-pointer rounded-xl hover:bg-opacity-100">
                        <a href="#form" className="flex gap-2 text-white">Quiero mi <span className="flex justify-center items-end mx-1"><PiMotorcycleFill/></span></a>
                    </ul>
                </div>
            </div>
    )
}
