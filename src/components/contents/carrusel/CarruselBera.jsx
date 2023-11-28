import bera1 from "../../../assets/bera/bera1.png"
import bera2 from "../../../assets/bera/bera2.png"
import bera3 from "../../../assets/bera/bera3.png"
import bera4 from "../../../assets/bera/bera4.png"
import bera5 from "../../../assets/bera/bera5.png"
import bera6 from "../../../assets/bera/bera6.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarruselBera() {
  return (
    <>
        <div className="flex justify-center mb-10 p-10 w-full">
            <img className="w-80 h-36 " src="https://beravirtual.com/wp-content/uploads/2021/10/Logo-Bera-770x352-1.png" alt="" />
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
                    className="mySwiper w-full md:w-2/3 mb-12"
            >
                <SwiperSlide>
                        <section>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center">
                                        <div className="flex items-center w-60 h-60 rounded-md">
                                            <img className="rounded-lg"  src={bera1} alt="" />
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
                                            <img className="rounded-lg"  src={bera2} alt="" />
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
                                            <img className="rounded-lg"  src={bera3} alt="" />
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
                                            <img className="rounded-lg"  src={bera4} alt="" />
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
                                            <img className="rounded-lg"  src={bera5} alt="" />
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
                                            <img className="rounded-lg"  src={bera6} alt="" />
                                        </div>
                                    </div>
                                </div>
                        </section>
                </SwiperSlide>
            </Swiper>
    </>
)
}
