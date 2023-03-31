import { motion } from "framer-motion";

const Sunburn = () => {
    return (  
        <>  
        <div className="relative mx-auto justify-center flex text-white my-32">
        <img className="w-[95%] rounded-2xl" src="website-1.jpg" />
            <div className="absolute top-10 left-32 z-20">
                <h1 className="font-semibold text-6xl">
                Sunburn
                </h1>
                <p className="text-3xl mt-2">
                40.42°N, 74.02°W
                </p>
            </div>
            <div className="absolute flex left-5 -bottom-8">
                <motion.img 
                    src="B221_EVENT.jpg" 
                    className="w-[250px] h-[150px]  rounded-xl" 
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                        }}
                    whileTap={{ scale: 0.9 }} 
                />
                <motion.img 
                    src="SPACE_EVE.jpg" 
                    className="w-[170px] h-[150px] ml-[3%] rounded-xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                        }}
                    whileTap={{ scale: 0.9 }} 
                />
                <motion.img 
                    src="DREAM.jpg" 
                    className="w-[250px] h-[150px] ml-[7%] rounded-xl" 
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                        }}
                    whileTap={{ scale: 0.9 }} 
                />
                <motion.img 
                    src="SUH_EVE.jpg" 
                    className="w-[250px] h-[150px] ml-[7%] rounded-xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                        }}
                    whileTap={{ scale: 0.9 }} 
                />
                <motion.img 
                    src="Navy-min.jpg" 
                    className="w-[250px] h-[150px] ml-[7%] rounded-xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                        }}
                    whileTap={{ scale: 0.9 }} 
                />
            </div>
            <div className="absolute flex left-0 -bottom-52">
            <motion.img 
                    src="SUH_EVE.jpg" 
                    className="w-[250px] h-[150px] ml-[9.8%] rounded-xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                        }}
                    whileTap={{ scale: 0.9 }} 
            />
            <motion.div 
            className="w-[250px] bg-sky-400 text-left px-14 text-lg rounded-xl ml-4 text-white h-[150px]"
            whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.7 },
                }}
            whileTap={{ scale: 0.9 }} 
            >
                <span className="text-2xl relative top-7 font-semibold">AND</span><br />
                <br />
                Many More<br /> Coming Soon
            </motion.div>
            </div>
        </div>
        </>
    );
}
 
export default Sunburn;