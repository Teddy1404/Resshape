import { motion } from "framer-motion";

const DirectorDesk = () => {
    return (  
        <>
            <div className="flex w-3/5 mx-auto my-32 p-16 bg-white rounded-tr-3xl rounded-tl-[100px] rounded-bl-3xl">
                <div >
                
                    <h2 className="text-2xl text-black mb-4 font-bold">
                    From Director's Desk
                    </h2>
                    <p className="text-lg text-justify leading-8 w-3/4 text-slate-500 ">
                    “AXIS strives to keep students' sense of wonder about science alive by giving them the necessary information as well as the flexibility to explore and create, in the events and competitions. The team's efforts have given me and the institute confidence that AXIS will continue to grow in size and appeal to students in the foreseeable future as well.I convey my best wishes to the AXIS'23 team .”
                    </p>
                </div>
                <motion.img 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                        }}
                whileTap={{ scale: 0.9 }} 
                className="w-[250px] h-[250px] rounded-[20px]" 
                src="Director_img.jpg"/>
            </div>
        </>
    );
}
 
export default DirectorDesk;