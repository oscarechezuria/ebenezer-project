import ebenezerLogo from "../assets/ebenezerLogo.PNG"

export default function Header() {
    return (
            <div className="wave-container flex flex-col h-102 w-full p-4 lg:px-8">
                <div>
                    <img src={ebenezerLogo} alt="" className="w-44 h-16 lg:w-60 lg:h-16" />
                </div>
                <div className="flex flex-col w-full m-auto text-center items-center">
                    <h2 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-white via-white to-two lg:text-5xl lg:h-16">La forma más inteligente de comprar tu moto <span className="underline underline-offset-4 "></span></h2>
                </div>
            </div>
    )
}
