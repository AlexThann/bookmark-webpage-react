import chromeLogo from "../assets/images/logo-chrome.svg";
import firefoxLogo from "../assets/images/logo-firefox.svg";
import operaLogo from "../assets/images/logo-opera.svg";
import DownloadBrowserCard from "./DownloadBrowserCard";

export default function DownloadSection() {
  return (
    <section className="mb-[200px]">
      <div className="text-center px-[5%] mb-12">
        <h1 className="text-neutral-blue font-bold text-4xl pb-7 ">
          Download the extension
        </h1>
        <p className="text-gray-500 leading-7 mb-12 ">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize
        </p>
      </div>
      <div className="flex flex-col px-[5%]  md:gap-[20px] lg:gap-[80px] md:flex-row md:justify-center ">
        <DownloadBrowserCard
          header="Add to chrome"
          version="Minimum version 62"
          logo={chromeLogo}
          offset={-40}
        />
        <DownloadBrowserCard
          header="Add to Firefox"
          version="Minimum version 55"
          logo={firefoxLogo}
          offset={0}
        />
        <DownloadBrowserCard
          header="Add to Opera"
          version="Minimum version 46"
          logo={operaLogo}
          offset={40}
        />
      </div>
    </section>
  );
}
