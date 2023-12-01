import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { Link } from "react-router-dom";
import bag from "../images/zem11.jpg"
import rev from "../images/zem7.jpg"
import Reviews from "../components/reviews";


const LandingPage = () => {
    return ( 
        <div className="">
            
            <div className="">
                <div>
                    <Navbar/>
                </div>
                <div className="w-[100%] h-[100%] left-0 right-0 top-0 bottom-0 pb-[23px]">
                    <img className="h-[550px] brightness-50 w-full" width={'45%'} src={bag} alt="" srcset="" />
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col justify-between m-5 items-start">
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                    </div>
                    <div className="">
                        <img className="h-[550px] brightness-50 w-[]" src={rev} alt="" srcset="" />
                    </div>
                </div>
                <div className="flex justify-around mt-10">
                    <Reviews/>
                    <Reviews/>
                    <Reviews/>
                    <Reviews/>
                </div>
                <footer className="bg-[#B49341] h-[30vh] mt-10">
                    zzzzzzzzzzzzzzz
                </footer>
            </div>
        </div>
     );
}
 
export default LandingPage;