import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const Carousel = ({children:slides, autoSlide=false, autoSlideInterval=2000,}) => {
    const [curr,setCurr]=useState(0);

    const prev =()=>
        setCurr((curr)=>(curr===0 ? slides.length-1 :curr-1));
        const next =()=>
        setCurr((curr)=>(curr===slides.length-1 ?0:curr+1));
        useEffect(()=>{
            if(!autoSlide)return
                const slideInterval = setInterval(next, autoSlideInterval)
                return()=>clearInterval(slideInterval)
            
        },[]);
    return ( 
        <div className="overflow-hidden md:overflow-visible  relative">
            <div className="flex transition-transform ease-out duration-500 opacity-100" style={{transform:`translateX(-${curr * 100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full bg-orange-400 opacity-80 hover:bg-orange-300'>
                    <FiChevronLeft size={40}/>


                </button>

               <button onClick={next} className='p-1 rounded-full bg-orange-400 opacity-80 hover:bg-orange-300'>
                    <FiChevronRight size={40}/>
                    
                  
                </button>
                  
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i)=>(
                    <div className={`
                    transition-all h-3 w-3 bg-white rounded-full
                    ${curr===i? "p-2": "bg-opacity-50"}
                    `}/>))};
                    
                </div>
            </div>
        </div>
     );
}
export default Carousel;