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
                    <img className="h-[550px] brightness-50 w-full"  src={bag} alt="" srcset="" />
                </div>
                <div className="flex w-full bg-[#3B6346] p-10">
                    <div className="flex w-[100%] rounded-[10px] p-6 bg-white justify-around  items-start">
                        <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
                            <h1>hello</h1>
                        </div>
                        {/* <div className="bg-[#B49341] rounded-[10px] cursor-pointer w-[40%] p-[12px] mt-3">
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
                        </div> */}
                    <div className="">
                        <img className="h-[350px] brightness-50 w-[300px]" src={rev} alt="" srcset="" />
                    </div>
                    </div>
                </div>
                <div className="flex justify-around mt-10">
                    <Reviews/>
                    <Reviews/>
                    <Reviews/>
                    <Reviews/>
                </div>
                <footer className="bg-[#3B6346] h-[30vh] mt-10">
                    zzzzzzzzzzzzzzz
                </footer>
            </div>
        </div>
     );
}
 
export default LandingPage;