import testimonios from "../../assets/testimonios.jpg"

export default function Testimonios() {
    return (
        <div className="bg-white">
            <h2 className="text-center text-two font-extrabold text-2xl my-12 lg:text-4xl">Ya son muchos los que se han beneficiado de nuestro sistema de compras programadas</h2>
            <div className="slider w-full">
                <div className="slider-track flex w-full my-12 md:my-24">
                    <div className="slide">
                        <img src={testimonios} alt="" />
                    </div>
                </div>
            </div>
        </div>
)
}
