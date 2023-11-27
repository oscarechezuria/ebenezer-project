
export default function AboutUs() {
    return (
        <div className="flex items-center flex-col mb-16">
            <h2 className="text-one my-8 text-3xl underline underline-offset-8 font-bold">Quienes somos</h2>
            <h3 className="text-center text-2xl p-2 leading-10">
                Somos Ebenezer, una empresa que a través de nuestro innovador <span className="bg-one p-2 text-white">sistema de compras programadas</span> te permitirá tener la motocicleta de tus sueños.
            </h3>
            <div className="flex flex-col mt-8 bg-one rounded-md">
                <h3 className="text-center text-two text-2xl p-4 leading-10">Nuestro método de cuotas te permite realizar pagos fraccionados, planificando tus finanzas de manera inteligente.</h3>
            </div>
        </div>
    )
}
