import Navbar from "../components/Navbar";
import Background from "../components/Background";

const LandingPage = () => {
    return ( 
        <div className="relative">
            <div>
                <Background className="bg-fixed"/>
            </div>
            <div className="absolute inset-0">
                <div>
                    <Navbar/>
                </div>
                <section className="brightness-90 w-80 mt-24 ml-6 flex flex-col items-center rounded justify-center md:mt-12  md:ml-7 text-center  lg:w-sized  lg:mt-36 ">
                    <h1 className="text-3xl lg:text-6xl text-[#4169e1]">ZEMYEN STUDIOS</h1>
                    <p className="text-white text-tiny md:text-[11px]">
                    Zemyen Studios is a creative media outfit based in Jos, Plateau state, Nigeria. We provide photography/Videography services; we are into filmmaking, documentary production, graphic designs, printing, public relations, adverts, jingles, Voice-over, creative writing services and training in these areas. The outfit started in 2015 under the name Zemyen Media before its business name registration in 2019. Emmanuel Kwapyil, a Mass communication graduate from the University of Jos is the CEO and founder of the organization. He is multi-skilled in the areas of the business operation and has worked in other organizations where he has gained valuable experiences; he was Media officer at Stefanos Foundation, an NGO, Monitoring and Evaluation Officer at Put'Em Right Reproductive Health Foundation, another NGO and an intern Journalist (correspondent) with the Nation Newspaper in Jos. The founder  because of his believe in human capital development, being resourceful and useful to society, as well as deliberately exposing individuals, groups to contents that will result in the orientation and reorientation of the Nigerian and African people (Youths especially) to take their destiny in their hands and make their lives and society better instead of complaining endlessly over the failures and corruption in the system (religious, public, private, even Non-Governmental Organizations) was inspired to start Zemyen Studios to be part of the solution against backward, debilitating orientation and the challenge of teaming youth unemployment in the country and the African continent.
                    </p>
                    <button className=" bg-[#4169e1] h-8 w-32 rounded mt-6 text-slate-50">BOOK NOW</button>
                </section>
            </div>
        </div>
     );
}
 
export default LandingPage;