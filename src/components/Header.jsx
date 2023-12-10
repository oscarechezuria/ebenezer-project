import ebenezerLogo from "../assets/ebenezerLogo.PNG"

export default function Header() {
  return (
      <>
          <div className="w-full">
            <div className="bg-one flex justify-center py-2 px-4 lg:py-4 lg:px-14 ">
              <img src={ebenezerLogo} alt="" className="w-80 h-24 lg:w-96 lg:h-28" />
            </div>
          </div>
          <div>
            <div className="wave-container flex flex-col w-full h-auto p-4 lg:px-8 lg:h-106">
              <div className="flex flex-col gap-3 w-full mt-10 text-center items-center text-white">
                <h2 className="text-2xl lg:text-4xl">Obtén con nosotros tú nueva moto nueva</h2>
                <h2 className="text-4xl lg:text-6xl text-yellow-300 font-extrabold">MOTO 0KM</h2>
                <h2 className="text-2xl lg:text-4xl font-extra-bold">¡Esta es tu Oportunidad!</h2>
                <h3 className="text-xl lg:text-2xl">Elije la opción que más</h3>
                <h3 className="text-xl lg:text-2xl">se ajuste a tu presupuesto</h3>
                <h2 className="text-2xl lg:text-4xl font-extra-bold text-yellow-300">Cuotas desde 35$ o 40$</h2>
                <div className="mt-4 mb-16">
                  <a href="#form" className="flex gap-2 w-48 justify-center items-center text-black font-extrabold text-2xl px-8 py-3 bg-yellow-400 rounded-lg lg:text-3xl lg:w-auto lg:py-4">Si! quiero</a>
                </div>
              </div>
            </div>
          </div>
      </>
  )
}

{/*

          <div className="fixed z-20 w-full">
            <div className="bg-one flex justify-center py-2 px-4 lg:py-4 lg:px-14 ">
              <img src={ebenezerLogo} alt="" className="w-60 h-20 lg:w-72 lg:h-24" />
            </div>
          </div>

*/}