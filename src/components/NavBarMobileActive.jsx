import SvgComponentMobile from "./SvgComponentMobile";
import closeIcon from "../assets/images/icon-close.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

export default function NavBarMobileActive({ isMobile, setIsMobile }) {
  useEffect(() => {
    if (isMobile) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  return (
    <AnimatePresence>
      {/*Animate presence watches over all motion.divs. Its for the animation when the mobile navbar is active */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className={`${isMobile ? "" : "hidden"} 
    fixed top-0 left-0 w-[100%] h-[100%] bg-neutral-blue opacity-85 sm:hidden py-9 px-6 flex flex-col justify-between z-20`}
        >
          <motion.div
            initial={{ y: -250, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            exit={{ y: -250, opacity: 0 }}
          >
            <div className="flex justify-between pb-10 border-b-1 border-gray-400 ">
              {/*Got it from an svg viewer, changed the colors around. */}
              <SvgComponentMobile
                bookmarkInside="#252b46"
                bookmarkText="#FFFFFF"
                circleColor="#FFFFFF"
              />
              <img
                src={closeIcon}
                alt=""
                className="w-[22px] h-[18px] cursor-pointer"
                onClick={() => setIsMobile((prevState) => !prevState)}
              />
            </div>
            <div className="flex flex-col">
              <ul>
                <li className="text-center text-white border-b-1 border-gray-400  opacity-90 py-5 text-xl tracking-wide">
                  <a
                    href=""
                    className="hover:text-gray-300 transition duration-300 ease"
                  >
                    FEATURES
                  </a>
                </li>
                <li className="text-center text-white border-b-1 border-gray-400  opacity-90 py-5 text-xl tracking-wide">
                  <a
                    href=""
                    className="hover:text-gray-300 transition duration-300 ease"
                  >
                    PRICING
                  </a>
                </li>
                <li className="text-center text-white border-b-1 border-gray-400  opacity-90 py-5 text-xl tracking-wide">
                  <a
                    href=""
                    className="hover:text-gray-300 transition duration-300 ease"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
              <button className="mt-7 text-white text-2xl tracking-widest border-2 border-white rounded-sm py-2 cursor-pointer hover:text-gray-300 hover:border-gray-300 transition duration-300 ease">
                LOGIN
              </button>
            </div>
          </motion.div>
          <div className="text-center flex justify-center items-center gap-10">
            <img src={facebookLogo} alt="" className="cursor-pointer " />
            <img src={twitterLogo} alt="" className="cursor-pointer " />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
