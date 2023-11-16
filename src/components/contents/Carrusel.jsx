import "./Carrusel.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ejemplo from "../../assets/ejemplo.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carrusel() {
  return (
    <>
      <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full lg:w-2/3"
        >
        <SwiperSlide>
                <section className="w-auto">
                    <div className="conent">
                        <div className="card">
                            <div className="card-content flex items-center">
                                <div className="image flex items-center w-44 h-44">
                                    <img src={ejemplo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </SwiperSlide>
        <SwiperSlide>
                <section>
                    <div className="conent">
                        <div className="card">
                            <div className="card-content">
                            <div className="card-content flex items-center">
                                <div className="image flex items-center w-44 h-44">
                                    <img src={ejemplo} alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
        </SwiperSlide>
        <SwiperSlide>
                <section>
                    <div className="conent">
                        <div className="card">
                        <div className="card-content flex items-center">
                                <div className="image flex items-center w-44 h-44">
                                    <img src={ejemplo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </SwiperSlide>
        ...
        </Swiper>
    </>
  );
}

{/*<div className="flex flex-col w-full justify-center">
        <div className="text-center w-full py-10 px-6 bg-one text-2xl">
            <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-two via-white to-white lg:text-4xl">Unete a las más de xx personas que ya disfrutan de su moto</h2>
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
</div>*/}

