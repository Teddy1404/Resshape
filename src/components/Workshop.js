import { motion } from "framer-motion";
import {  textVariant } from "../utils/motion";
import {  TitleText } from "./CustomTexts";
import { content } from '../constants';
import { useState } from "react";

const Workshop = () => {

    const [datas] = useState(content)
    const [info, setInfo] = useState(0)

    const {date, title, para, img} = datas[info];

    function handleChange(event){
        const{ name } = event.target;
        if(name === "one"){
            setInfo(0)
            document.getElementById("one").style.backgroundColor = "#38bdf8";
            document.getElementById("two").style.backgroundColor = "white";
            document.getElementById("three").style.backgroundColor = "white";
            document.getElementById("four").style.backgroundColor = "white";
        } else if(name === "two") {
            setInfo(1)
            document.getElementById("two").style.backgroundColor = "#38bdf8";
            document.getElementById("one").style.backgroundColor = "white";
            document.getElementById("three").style.backgroundColor = "white";
            document.getElementById("four").style.backgroundColor = "white";
        } else if(name === "three") {
            setInfo(2)
            document.getElementById("three").style.backgroundColor = "#38bdf8";
            document.getElementById("two").style.backgroundColor = "white";
            document.getElementById("one").style.backgroundColor = "white";
            document.getElementById("four").style.backgroundColor = "white";
        } else if(name === "four") {
            setInfo(3)
            document.getElementById("four").style.backgroundColor = "#38bdf8";
            document.getElementById("two").style.backgroundColor = "white";
            document.getElementById("three").style.backgroundColor = "white";
            document.getElementById("one").style.backgroundColor = "white";
        }
    }

    return (  
        <>
            <section className="flex justify-center my-32">
            
            <div className="text-white w-1/2">
                <TitleText title={<>Glimpse of Workshop</>} textStyles="text-center" />
                <div className="mt-10 mb-8 flex flex-row gap-10">
                        <>
                        <img 
                        src={img}
                        className="w-[250px] h-[250px]"
                    />
                    <motion.div variants={textVariant} className="w-1/2 relative justify-end ml-10">
                        <motion.h3 variants={textVariant} className="text-slate-400">
                            {date}
                        </motion.h3>
                        <motion.h2 variants={textVariant} className="text-xl font-bold py-2">
                            {title}
                        </motion.h2>
                        <motion.p variants={textVariant} className="w-full justify-end leading-2 text-justify">
                            {para}
                        </motion.p>
                        <button variants={textVariant} className="w-1/3 rounded-lg relative top-[15%] justify-end contact-btn text-white border-2 py-1.5 px-2 text-sm" >KNOW MORE </button>
                    </motion.div>
                        </>   
                </div>
                <div className="gap-4 flex mx-auto justify-center">
                    <button onClick={handleChange} id="one" name="one" className="px-2 py-2  bg-[#38bdf8] rounded-full"></button>
                    <button onClick={handleChange} id="two" name="two" className="px-2 py-2 bg-white rounded-full"></button>
                    <button onClick={handleChange} id="three" name="three" className="px-2 py-2 bg-white rounded-full"></button>
                    <button onClick={handleChange} id="four" name="four" className="px-2 py-2 bg-white rounded-full"></button>
                </div>
                </div>
            </section>
        </>
    );
}
 
export default Workshop;