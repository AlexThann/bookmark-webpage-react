import heroImage from "../assets/images/illustration-hero.svg";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse items-center md:flex-row mb-16">
      <div className="text-center flex flex-col items-center md:text-left md:pl-[5%]">
        <h1 className="text-4xl font-bold text-neutral-blue mb-7 md:w-full">
          A Simple Bookmark Manager
        </h1>
        <p className="text-gray-500 w-2/3 leading-7 mb-7 md:w-full">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="w-full">
          <button className="text-white font-medium border-1 bg-primary-blue rounded-md p-3 cursor-pointer mr-4 shadow-lg hover:bg-white hover:text-primary-blue hover:border-primary-blue hover:border-1 transition duration-300 ease">
            Get it on Chrome
          </button>
          <button className="text-gray-700 font-medium border-1 border-neutral-grey bg-neutral-grey p-3 rounded-md cursor-pointer shadow-lg  hover:bg-white hover:text-gray-700 hover:border-gray-700 hover:border-1 transition duration-300 ease">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="relative w-full flex justify-center mb-9 md:w-2/3">
        <img src={heroImage} alt="" className="-z-10" />
        <div className="absolute bottom-0 right-0 h-2/3 w-2/3 bg-primary-blue -z-20 rounded-l-full"></div>
      </div>
    </section>
  );
}
