import bgDots from "../assets/images/bg-dots.svg";
import { motion } from "motion/react";

export default function DownloadBrowserCard({ header, version, logo, offset }) {
  {
    /*whileInView works with viewport. When the item is in view the animation triggers {whileInView} 
    viewport is used along it. Viewport amount:0.8 means that 80% must be inside for it to trigger, while once means that it will only be triggered once.
    */
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: offset }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.8, once: true }}
      className="flex flex-col items-center shadow-xl/20 rounded-lg"
    >
      <img src={logo} className="w-[120px] h-[120px] my-8 " alt="" />
      <h3 className="text-neutral-blue font-medium text-2xl pb-1">{header}</h3>
      <p className="text-gray-500 mb-12">{version}</p>
      <img src={bgDots} className="w-full mb-6" alt="" />
      <button className="mb-7 text-white font-medium border-1 bg-primary-blue rounded-md p-3 cursor-pointer shadow-lg hover:bg-white hover:text-primary-blue hover:border-primary-blue hover:border-1 transition duration-300 ease">
        Add & Install Extension
      </button>
    </motion.div>
  );
}
