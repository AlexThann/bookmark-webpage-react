import { useState } from "react";
import errorSvg from "../assets/images/icon-error.svg";
import { motion } from "motion/react";

export default function ContactSection() {
  {
    /*setIsValid is used when the form is submitted or the user enters his email
    while setInputValue is set on change for the input of the email */
  }
  const [isValid, setisValid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    {
      /*After submitting see if its a valid email using regex */
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,4}$/i;
    if (!emailRegex.test(inputValue)) {
      setisValid(true);
    } else {
      setisValid(false);
      setInputValue("");
    }
  }
  return (
    <section className="flex flex-col items-center bg-primary-blue py-14 px-4">
      <div className="text-white text-sm tracking-[6px] mb-12">
        35.000+ ALREADY JOINED
      </div>
      <h1 className="text-white text-4xl font-medium text-center mb-7">
        Stay up-to-date with what we're doing
      </h1>
      <form
        action=""
        className="flex md:flex-row flex-col w-full md:justify-center md:items-start gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          className={`${
            isValid ? "bg-primary-red rounded-md" : " "
          } p-0.5 transition duration-300 ease`}
        >
          <div className="relative ">
            <input
              value={inputValue}
              className="bg-white p-3 rounded-md w-full focus:outline-none transition-all duration-500 ease"
              placeholder="Enter your email address"
              type="text"
              onChange={(e) => handleChange(e)}
            />
            {/* This syntax is mandatory for mounting and unmounting instead of using class hidden */}
            {isValid && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={errorSvg}
                alt=""
                className="absolute right-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
          {isValid && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white bg-primary-red w-full italic rounded-b-md px-3 py-1"
            >
              Whoops,make sure it's an email
            </motion.div>
          )}
        </div>
        <button className="text-white bg-primary-red rounded-md py-3 mt-7 md:mt-0 px-3 cursor-pointer border-1 border-primary-red hover:bg-white hover:text-primary-red transition duration-300 ease">
          Contact Us
        </button>
      </form>
    </section>
  );
}
