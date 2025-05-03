import { motion } from "motion/react";

export default function TabLink({ tab, selectedTab, setSelectedTab }) {
  return (
    <motion.li
      className={`${
        tab.id === selectedTab.id ? "text-black font-medium " : "text-gray-700 "
      }text-center flex justify-center relative border-t-1 p-3 last:border-b-1 border-gray-200  cursor-pointer transition duration-300 ease-in md:border-none md:w-1/6 hover:text-primary-red`}
      key={tab.id}
      onClick={() => setSelectedTab(tab)}
    >
      {tab.tabName}
      {tab.id === selectedTab.id ? (
        <motion.div
          className="absolute bottom-0 h-[2px] w-1/2 bg-primary-red"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      ) : null}
    </motion.li>
  );
}
