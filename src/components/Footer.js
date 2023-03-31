import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs"

const Footer = () => {

    const sitemap = ["Home", "Contact us", "About us", "Get Registered"]
    const feature = ["Guest Lectures", "Workshop", "Events", "Download Our App"]
    const vnit = ["Official Site", "VNIT Campus", , "Vision and Mission", "Locate Us"]
    const legals = ["Terms & Conditions", "Refund Policy", "Privacy Policy", "Cookies"]

    return (  
        <>
            <section className="bg-gray-700 py-16">
            <div className="text-white mx-52 flex justify-between">
                <div className="flex">
                    <img src="/logo.png" className="w-[40px]" />
                    <h1 className="font-semibold text-xl ml-4">AXIS ' 23</h1>
                </div>
                <div className="flex gap-7">
                    <BsFacebook className="w-[40px] h-[25px] hover:text-blue-500 transition ease-in duration-200" />
                    <BsTwitter className="w-[40px] h-[25px] hover:text-sky-400 transition ease-in duration-200" />
                    <BsInstagram className="w-[40px] h-[25px] hover:text-pink-500 transition ease-in duration-200" />
                    <BsLinkedin className="w-[40px] h-[25px] hover:text-blue-400 transition ease-in duration-200" />
                    <BsYoutube className="w-[40px] h-[25px] hover:text-red-600 transition ease-in duration-200" />
                </div>
            </div>
            <hr className="my-7 bg-white h-[1px] "  />
            <div className="flex flex-row text-white mx-52 justify-between">
            <div>
                <ul>
                <li className="font-bold text-xl">
                    Sitemap
                </li>
                <hr className="mt-2 w-3/4 bg-white text-white h-[1px]" />
                    {sitemap.map((item) => (
                        <li className="my-2 hover:underline transition ease hover:text-white text-slate-200 duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                <li className="font-bold text-xl">
                    Feature
                </li>
                <hr className="mt-2 w-3/4 bg-white text-white h-[1px]" />
                    {feature.map((item) => (
                        <li className="my-2 hover:underline transition ease-in-out duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                <li className="font-bold text-xl">
                    About VNIT
                </li>
                <hr className="mt-2 w-3/4 bg-white text-white h-[1px]" />
                    {vnit.map((item) => (
                        <li className="my-2 hover:underline transition ease-in-out duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                <li className="font-bold text-xl">
                    Legals
                </li>
                <hr className="mt-2 w-3/4 bg-white text-white h-[1px]" />
                    {legals.map((item) => (
                        <li className="my-2 hover:underline transition ease-in-out duration-200">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            </section>
            <div className="flex mt-5 mx-24 justify-between text-white">
                <h1 className="text-lg font-semibold">
                Copyright © 2023 <span className="text-slate-400 text-xl">AXIS'23.</span> 
                </h1>
                <h1 className="text-lg font-semibold">
                Made with ❤️ by <span className="text-slate-400 text-xl">Team 404notfound</span>
                </h1>
            </div>
            
        </>
    );
}
 
export default Footer;