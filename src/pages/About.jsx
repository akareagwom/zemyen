import Navbar from "../components/Navbar";
import Background from "../components/Background";

const About = () => {
    return ( 
        <div className="relative overflow-hidden">
            <div className="static">
                <Background/>
            </div>
           <div className="absolute inset-0">
                <div>
                    <Navbar/>
                </div>
                <div className="md:ml-32 md:mt-6 mt-4  bg-black rounded-3xl font-[Poppins] md:w-3/4 md:justify-center md:items-center h-4/5 opacity-50 md:flex text-[#fff]">
                    <div className="mb-6 md:p-16">
                        <h1 className="text-6xl">ZEMYEN STUDIOS </h1>
                    </div>
                    <div className="md:w-4/5 md:mr-3 h-44 scrollbar- scrollbar-track-transparent scrollbar-thin scrollbar-thumb-[#fff] ">
                    <div className="md:mr-4">
                            <div>
                                <h1 className="text-2xl font-mono">Our Vision:</h1>
                                <p>To be a foremost creative media outfit, hub, platform that provides transforming/aesthetic content for its clients/followers and for societal advancement in Nigeria, Africa and beyond.</p>
                            </div> 
                            <div>
                                <h1 className="text-2xl font-mono">Mission Statement:</h1>
                                <p>Our mission is to use media/communication tools to satisfy the aesthetic needs of our customers/followers, to train/facilitate training for aspiring creatives as well as influence society positively through our arts.</p>
                            </div>
                            <div>
                                <h1 className="text-2xl font-mono">Value Proposition:</h1>
                                <p>We are experienced, growing, creative, innovative and committed to the satisfaction of our customers/clients, followers. We provide services and deliveries both within and away from our office facility, and that with comparatively better speed. We are dedicated to societal peace and progress. We also create contents on our own to communicate good and moral values for a better society. Competence, creativity, excellence, a vibrant customer relationship, speed and innovation are our watchword.</p>
                            </div>
                            <div>
                                <h1 className="text-2xl   font-mono">Our Core Values </h1>
                                <ul>
                                    <li>Integrity </li>
                                    <li>Transparency </li>
                                    <li>Dedication</li>
                                    <li>Hard work</li>
                                    <li>Growth</li>
                                    <li>Diligence</li>
                                    <li>Creativity</li>
                                    <li>Innovation </li>
                                    <li>Love </li>

                                </ul>
                                {/* stop */}
                            </div>
                            <div>
                                {/* start */}
                            </div>
                        </div>
                    </div>
                   
                </div>
           </div>
        </div>
     );                     
}
 
export default About;