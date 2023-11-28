import toro1 from "../../../assets/toro/toro1.png"
import toro2 from "../../../assets/toro/toro1.png"
import toro3 from "../../../assets/toro/toro1.png"
import toroLogo from "../../../assets/toro/toroLogo.PNG"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function CarruselToro() {
  return (
    <>
        <div className="flex justify-center mt-12 mb-10 border-t border-yellow-500 p-10 w-full">
            <img className="w-96 h-60 " src={toroLogo} alt="" />
        </div>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full md:w-2/3 mb-24"
            >
                <SwiperSlide>
                        <section>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center w-60 h-60 rounded-md">
                                            <img className="rounded-lg"  src={toro1} alt="" />
                                        </div>
                                    </div>
                                </div>
                        </section>
                </SwiperSlide>
                <SwiperSlide>
                        <section>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center w-60 h-60 rounded-md">
                                            <img className="rounded-lg"  src={toro2} alt="" />
                                        </div>
                                    </div>
                                </div>
                        </section>
                </SwiperSlide>
                <SwiperSlide>
                        <section>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center w-60 h-60 rounded-md">
                                            <img className="rounded-lg"  src={toro3} alt="" />
                                        </div>
                                    </div>
                                </div>
                        </section>
                </SwiperSlide>
            </Swiper>
    </>
  )
}
