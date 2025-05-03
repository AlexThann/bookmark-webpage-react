import Arrow from "./Arrow";
import { motion, AnimatePresence } from "motion/react";
export default function Question({ token, index, setQandA }) {
  function handleClick() {
    {
      /*prevState is an array of objects. So we iterate over all objects till we find the indexed one.
    then we spread the object and replace open attribute. Else return the normal object */
    }
    setQandA((prevState) => {
      return prevState.map((obj, indexObj) => {
        if (index === indexObj) {
          return { ...obj, open: !token.open };
        }
        return obj;
      });
    });
  }

  return (
    <div className="border-t-1 last:border-b-1 border-gray-300 ">
      <div
        className="flex justify-between py-5 cursor-pointer group"
        onClick={() => handleClick()}
      >
        <p
          className={`${
            token.open === false ? "group-hover:text-primary-red " : ""
          }
         transition duration-300 ease text-neutral-blue font-medium text-lg`}
        >
          {token.question}
        </p>
        <Arrow open={token.open} />
      </div>
      <AnimatePresence>
        {token.open && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="py-5"
          >
            <p className="text-gray-500 leading-7">{token.ans}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
