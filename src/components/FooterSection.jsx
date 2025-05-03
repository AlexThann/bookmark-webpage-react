import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import SvgComponentMobile from "./SvgComponentMobile";

export default function FooterSection() {
  return (
    <footer className="flex flex-col items-center py-7 bg-neutral-blue md:flex-row md:items-center md:justify-around">
      <div className="md:flex md:flex-row md:items-center md:gap-13">
        <SvgComponentMobile
          bookmarkInside="#FFFFFF"
          bookmarkText="#FFFFFF"
          circleColor="#5267DF"
        />
        <ul className="my-7 text-center">
          <li className="p-2 md:inline">
            <a
              href=""
              className="text-gray-100 hover:text-primary-red transition duration-300 ease"
            >
              FEATURES
            </a>
          </li>
          <li className="p-2 md:inline">
            <a
              href=""
              className="text-gray-100 hover:text-primary-red transition duration-300 ease"
            >
              PRICING
            </a>
          </li>
          <li className="p-2 md:inline">
            <a
              href=""
              className="text-gray-100 hover:text-primary-red transition duration-300 ease"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-12">
        <img src={facebookLogo} alt="" className="cursor-pointer" />
        <img src={twitterLogo} alt="" className="cursor-pointer" />
      </div>
    </footer>
  );
}
