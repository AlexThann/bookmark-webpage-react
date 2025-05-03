import { motion, AnimatePresence } from "motion/react";

export default function TabContent({ selectedTab }) {
  return (
    <div className="flex flex-col items-center md:flex-row mb-16">
      {/* mode wait, is for the exit animation to happen before the next animates. Key is used to rerender the element*/}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ? selectedTab.id : "empty"}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full flex justify-center mb-9 md:w-2/3 py-12 md:justify-end"
        >
          <img
            src={selectedTab.image}
            alt=""
            className="-z-10 w-[80%] h-[80%] md:max-w-[65%] md:max-h-[50%]"
          />
          <div className="absolute bottom-0 left-0 h-2/3 w-2/3 bg-primary-blue -z-20 rounded-r-full"></div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ? selectedTab.id : "empty"}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center px-[5%] mb-12 md:text-left"
        >
          <h1 className="text-neutral-blue font-bold text-4xl pb-7 ">
            {selectedTab.header}
          </h1>
          <p className="text-gray-500 leading-7 ">{selectedTab.paragraph}</p>
          <button className="text-white font-medium border-1 bg-primary-blue rounded-md p-3 cursor-pointer mr-4 shadow-lg hover:bg-white hover:text-primary-blue hover:border-primary-blue hover:border-1 transition duration-300 ease mt-5">
            More Info
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
