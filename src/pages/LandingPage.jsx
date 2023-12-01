import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { Link } from "react-router-dom";
import bag from "../images/zem11.jpg"


const LandingPage = () => {
    return ( 
        <div className="">
            
            <div className="">
                <div>
                    <Navbar/>
                </div>
                <div className="w-[100%] h-[100%] left-0 right-0 top-0 bottom-0 pb-[23px]">
                    <img className="h-[550px] brightness-50 w-full" width={'45%'} src={'https://images.squarespace-cdn.com/content/v1/4fcf5c8684aef9ce6e0a44b0/1591033152319-T32QPV5G8IRRRBBGWWIL/Dark+gray+master+bedroom'} alt="" srcset="" />
                </div>
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
            </div>
        </div>
     );
}
 
export default LandingPage;