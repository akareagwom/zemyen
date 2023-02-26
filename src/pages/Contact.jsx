import Navbar from "../components/Navbar";

const Contact = () => {
    return ( 
        <div className="bg-hero h-screen w-full bg-cover bg-center bg-no-repeat brightness-75 p-0">
            <div>
                <Navbar/>
            </div>
            <main className="text-orange-400 md:text-center">
                <div>
                    <h1 className="text-3xl md:text-5xl">WE'D LOVE TO HEAR FROM YOU</h1>
                    <h3>We are here to help and answer any question you might have. We look forward to hearing from you</h3>
                </div>
                <section className="text-center md:ml-96 md:flex-wrap w-max-lg">
                    <form class="w-full bg-white first-letter:rounded max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                            
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" />
                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap px-3 -mx-3 mb-6 ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Your Message
                            </label>
                            <div className="relative mb-3 xl:w-96 border-gray-200" data-to-input-wrapper-init>
                                <textarea
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder=""></textarea>
                                <label
                                for="exampleFormControlTextarea1"
                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                > textarea</label
                                >
                            </div>
                        </div>
                        <div className="text-black h-8 m-9 rounded bg-orange-400">
                            <button>Send Message</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
     );
}
 
export default Contact;