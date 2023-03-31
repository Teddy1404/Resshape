const Navbar = () => {

    const list = ["Home", "Events", "CA Portal", "Gallery", "Workshop", "My Profile", "Speakers", "Sponsors", "Login"]

    return (  
        <nav className="text-white flex justify-between mx-32 my-2">
            <div className="flex">
                <img src="/logo.png" className="w-[40px]" />
                <h1 className="font-semibold text-xl ml-4">AXIS ' 23</h1>
            </div>
            <ul className="flex-row mt-1 ml-44 justify-end flex gap-10 ">
            {list.map((item) => (
                <li className="hover:text-[#38bdf8] transition ease-in duration-200">
                    {item}
                </li>
            ))}
            </ul>
        </nav>
    );
}
 
export default Navbar;