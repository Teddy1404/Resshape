import { motion } from "framer-motion";
import { fadeIn, zoomIn, staggerContainer } from "../utils/motion";
import {  TitleText } from "./CustomTexts";

const Testimonial = () => {
    return (
      <>
      <TitleText title={<>Testimonials</>} textStyles="text-center mt-20" />
    <div className="items-center justify-center flex ">
    <section className={`relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto flex lg:flex-row gap-6 flex-col`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end z-20 flex-col sm:py-8 p-4 rounded-[32px] border-[1px] border-slate-500 relative"
      >
        <div className='flex'>
        <div>
        <h4 className=" mt-2 sm:text-[18px] font-bold text-[26px] text-white">
          Vivek Atray
          </h4>
          <p className="mt-[8px] font-normal sm:text-[16px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Author, Former-IAS
          </p>
        </div>
          <img
          src="/Vivek_Atray.jpg"
          alt="pfp"
          className="lg:w-[80px] ml-8 h-auto min-h-[20px] rounded-[100%]"
        />
        </div>

        <p className="mt-[24px] font-normal sm:text-[14px] text-justify text-[14px] sm:leading-[25px] text-white">
          “A word of appreciation and gratitude to the team of AXIS 2023 for organizing an excellent interactive session. I enjoyed guiding the students and special thanks to the interviewer who did such an excellent job preparing. A pat on the back to the VNIT students who asked excellent questions.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className='flex'>
        <div>
          <h4 className="font-bold sm:text-[18px] text-[26px] text-white">
            Madhulika Guthathakurta
          </h4>
          <p className="mt-[8px] font-normal sm:text-[16px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Citizen Scientist, NASA
          </p>
        </div>
          <img
          src="/Madhulika_mam.jpg"
          alt="pfp"
          className="lg:w-[80px] ml-4 h-auto min-h-[20px] rounded-[100%]"
        />
        </div>

        <p className="mt-[24px] font-normal sm:text-[14px] text-justify text-[14px] sm:leading-[25px] text-white">
        I would like to acknowledge the persistence and patience shown by one of the core members of AXIS team for organising the webinar. I feel proud that I interacted with some of the best minds in India and would wish whole AXIS team the very best for their future endeavors.”
        </p>
      </motion.div>

    </motion.div>
  </section>
    </div>
      </>
    
  );
}

export default Testimonial;
