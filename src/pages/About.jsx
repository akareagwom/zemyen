import Navbar from "../components/Navbar";
import Background from "../components/Background";

const About = () => {
    return ( 
        <div className="relative">
            <div className="">
                <Background/>
            </div>
           <div className="absolute inset-0">
                <div>
                    <Navbar/>
                </div>
                <div className="bg-black opacity-50 text-orange-400">
                    <div>
                        <h1 className="text-6xl">ZEMYEN STUDIOS </h1>
                        <p>A photograph is a gift of science which is always close to heart. Because it contains memories of people near &far</p>
                    </div>
                    <div>

                    </div>
                </div>
           </div>
        </div>
     );                     
}
 
export default About;