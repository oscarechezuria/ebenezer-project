import ejemplo from "../../assets/ejemplo.jpg"
export default function Carrusel() {
  return (
    <div className="flex flex-col w-full justify-center">
            <div className="text-center w-full p-6 bg-one text-2xl">
                <h2>Unete a las más de xx personas que ya disfrutan de su moto</h2>
            </div>
            <div className="slider flex bg-one">
                <div className="slider-track flex gap-1 items-end">
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>

                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ejemplo} alt="" />
                    </div>
                </div>
            </div>
        </div>
)
}
