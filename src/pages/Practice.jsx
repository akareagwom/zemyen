import { Swiper, SwiperSlide } from "swiper/react";

 
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCoverflow,Pagination,Navigation } from "swiper";

import slide1 from '../images/zem1.jpg'
import slide3 from '../images/zem3.jpg'
import slide4 from '../images/zem4.jpg'
import slide5 from '../images/zem5.jpg'
import slide6 from '../images/zem6.jpg'
import slide7 from '../images/zem7.jpg'


const Practice = () => {
    return ( 
        <div>
            <Swiper>
                <SwiperSlide>
                    <img src={slide4} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="" srcset="" />
                </SwiperSlide>
            </Swiper>
        </div>
     );
}
 
export default Practice;