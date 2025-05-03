import { motion } from "motion/react";

export default function Arrow({ open }) {
  return (
    <div>
      {/*Arrow svg for the FAQ section. Rotates when opened or closed.*/}
      <motion.div
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className={`${
            open === true
              ? "stroke-primary-red transition duration-300 ease"
              : "stroke-[#5267DF]"
          }`}
        >
          <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </motion.div>
    </div>
  );
}
