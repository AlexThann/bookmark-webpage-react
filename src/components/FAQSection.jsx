import { useState } from "react";
import Question from "./Question";

export default function FAQSection() {
  {
    /*really important to set the QandA as a state, in order for it to change later*/
  }
  const [QandA, setQandA] = useState([
    {
      question: "What is a Bookmark?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      open: false,
    },
    {
      question: "How can i request a new browser?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      open: false,
    },
    {
      question: "Is there a mobile app?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      open: false,
    },
    {
      question: "What about other Chromium browsers?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      open: false,
    },
  ]);

  return (
    <section className="px-[5%] flex flex-col items-center mb-[120px] ">
      <div className="text-center">
        <h1 className="text-neutral-blue font-bold text-4xl pb-7">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 leading-7 mb-12 ">
          Here are some of our FAQS. If you have any other questions you'd like
          answered please feel free to email us
        </p>
      </div>
      <div className="w-full md:w-3/5">
        {QandA.map((qa, index) => (
          <Question token={qa} key={index} index={index} setQandA={setQandA} />
        ))}
      </div>
      <button className="text-white font-medium border-1 bg-primary-blue rounded-md p-3 cursor-pointer mr-4 shadow-lg hover:bg-white hover:text-primary-blue hover:border-primary-blue hover:border-1 transition duration-300 ease mt-5">
        More Info
      </button>
    </section>
  );
}
