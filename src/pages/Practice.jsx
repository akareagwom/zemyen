import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
 
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCoverflow,Pagination,Navigation } from "swiper";

import slide1 from '../images/zem1.jpg'
import slide3 from '../images/zem9.jpg'
import slide4 from '../images/zem12.jpg'
import slide5 from '../images/zem13.jpg'
import slide6 from '../images/zem6.jpg'
import slide7 from '../images/zem7.jpg'


const Practice = () => {
    return ( 
        <div>
            <div className="text-[3rem] text-white">
                <h1>Gallery</h1>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={4}
                coverflowEffect={
                    {
                        rotate:0,
                        stretch:0,
                        depth:100,
                        modifier:2.5,
                    }
                }
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className=" swiper_container md:w-[62rem] md:h-[26rem]   relative "
            >
                <SwiperSlide>
                    <img className="md:py-[1px] rounded-[20px] w-[57rem] h-[16rem] md:w-[37rem] md:h-[26rem] px-[1px] object-cover " src={slide4} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:py-[1px] rounded-[20px] w-[57rem] h-[16rem] md:w-[37rem] md:h-[26rem] px-[1px] object-cover " src={slide3} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:py-[1px] rounded-[20px] w-[57rem] h-[16rem] md:w-[37rem] md:h-[26rem] px-[1px] object-cover " src={slide4} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:py-[1px] rounded-[20px] w-[57rem] h-[16rem] md:w-[37rem] md:h-[26rem] px-[1px] object-cover " src={slide5} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:py-[1px] rounded-[20px] w-[57rem] h-[16rem] md:w-[37rem] md:h-[26rem] px-[1px] object-cover " src={slide6} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="py-[1px] rounded-[20px] w-[57rem] h-[16rem] md:w-[400px] md:h-[26rem] px-[1px] object-cover " src={slide7} alt="" srcset="" />
                </SwiperSlide>
                <div className="swiper_controler ">
                    <div className="swiper-button-prev slider-arrow">
                        <FiChevronLeft />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FiChevronRight />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
     );
}
 
export default Practice;