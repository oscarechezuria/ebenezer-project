import Carrusel from "../contents/carrusel"

export default function AboutUs() {
    return (
        <div className="flex items-center flex-col mt-8">
            <div className="mb-6">
                <h2 className="text-one my-4 text-3xl font-extrabold p-2 text-center md:text-5xl">Quieres saber más de nosotros</h2>
                <div className="flex flex-col gap-2 text-center text-2xl p-2 leading-10 my-4 md:text">
                    <h3 >
                        Somos Ebenezer, una empresa que a través de nuestro innovador
                    </h3>
                    <h3>
                        <span className="bg-one p-2 text-white">sistema de compras programadas</span>
                    </h3>
                    <h3>
                        te permitirá tener la motocicleta de tus sueños
                    </h3>
                </div>
            </div>

            <Carrusel/>

            <div className="h-56 w-full">
                <h2 className="text-one my-4 text-3xl font-extrabold p-2 text-center md:text-5xl">¿Y como es el proceso?</h2>
                <h2 className="text-center font-bold text-xl">Aqui va el proceso</h2>
            </div>
        </div>
    )
}
