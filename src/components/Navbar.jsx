import logo from "../assets/images/logo-bookmark.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import NavBarMobileActive from "./NavBarMobileActive";
import NavBarDesktopActive from "./NavBarDesktopActive";
import { useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="px-[5%] py-8 flex justify-between mb-16">
        <div
          className={`${isMobile ? "hidden " : "flex "} items-center sm:flex`}
        >
          <a href="">
            <img src={logo} alt="Logo bookmark" />
          </a>
        </div>
        {/* Hamburger Icon ->  */}
        <div>
          <img
            onClick={() => setIsMobile((prevState) => !prevState)}
            src={hamburger}
            alt="Hamburger menu"
            className={`${
              isMobile ? "hidden " : " "
            } w-[30px] h-[20px] cursor-pointer sm:hidden`}
          />
        </div>

        <NavBarMobileActive isMobile={isMobile} setIsMobile={setIsMobile} />
        <NavBarDesktopActive />
      </nav>
    </>
  );
}
