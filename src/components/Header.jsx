import ebenezerLogo from "../assets/ebenezerLogo.PNG"

export default function Header() {
  return (
            <div className="wave-container flex flex-col w-full h-102 p-4 lg:px-8">
                <div>
                    <img src={ebenezerLogo} alt="" className="w-40 h-12 lg:w-60 lg:h-16" />
                </div>
                <div className="flex flex-col w-full m-auto text-center items-center">
                    <h2 className="text-whrite text-2xl lg:text-4xl mb-6">La forma más inteligente de comprar tu moto <span className="underline underline-offset-4 "></span></h2>
                </div>
          </div>
  )
}
