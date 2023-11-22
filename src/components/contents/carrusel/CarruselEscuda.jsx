import escuda1 from "../../../assets/escuda/escuda1.png"
import escuda2 from "../../../assets/escuda/escuda2.png"
import escuda3 from "../../../assets/escuda/escuda3.png"
import escudaLogo from "../../../assets/escuda/escudaLogo.PNG"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarruselEscuda() {
  return (
    <>
        <div>
            <img className="w-96 h-60 " src={escudaLogo} alt="" />
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
                    className="mySwiper w-full md:w-2/3"
            >
                <SwiperSlide>
                        <section>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center w-60 h-60 rounded-md">
                                            <img className="rounded-lg"  src={escuda1} alt="" />
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
                                            <img className="rounded-lg"  src={escuda2} alt="" />
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
                                            <img className="rounded-lg"  src={escuda3} alt="" />
                                        </div>
                                    </div>
                                </div>
                        </section>
                </SwiperSlide>
            </Swiper>
    </>
  )
}
