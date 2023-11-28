import empire1 from "../../../assets/empireKeeway/empireKeeway1.png"
import empire2 from "../../../assets/empireKeeway/empireKeeway2.png"
import empire3 from "../../../assets/empireKeeway/empireKeeway3.png"
import empire4 from "../../../assets/empireKeeway/empireKeeway4.png"
import empire5 from "../../../assets/empireKeeway/empireKeeway5.png"
import empire6 from "../../../assets/empireKeeway/empireKeeway6.png"
import empire7 from "../../../assets/empireKeeway/empireKeeway7.png"
import empire8 from "../../../assets/empireKeeway/empireKeeway8.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarruselEmpire() {
    return (
    <>
        <div className="flex justify-center mt-12 mb-10 border-t border-yellow-500 p-10 w-full">
            <img className="w-80 h-28 " src="https://seeklogo.com/images/E/ek-express-logo-7169295133-seeklogo.com.png" alt="" />
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
                                            <img className="rounded-lg"  src={empire1} alt="" />
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
                                            <img className="rounded-lg"  src={empire2} alt="" />
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
                                            <img className="rounded-lg"  src={empire3} alt="" />
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
                                            <img className="rounded-lg"  src={empire4} alt="" />
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
                                            <img className="rounded-lg"  src={empire5} alt="" />
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
                                            <img className="rounded-lg"  src={empire6} alt="" />
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
                                            <img className="rounded-lg"  src={empire7} alt="" />
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
                                            <img className="rounded-lg"  src={empire8} alt="" />
                                        </div>
                                    </div>
                                </div>
                        </section>
                </SwiperSlide>
            </Swiper>
    </>
    )
}
