export default function NavBarDesktopActive() {
  return (
    <div className="hidden sm:flex gap-3 ">
      <ul className="flex items-center">
        <li className="inline-block px-5 color-neutral-grey  hover:text-primary-red transition duration-300 ease">
          <a href="">FEATURES</a>
        </li>
        <li className="inline-block px-5 color-neutral-grey  hover:text-primary-red transition duration-300 ease">
          <a href="">PRICING</a>
        </li>
        <li className="inline-block px-5 color-neutral-grey hover:text-primary-red transition duration-300 ease">
          <a href="">CONTACT</a>
        </li>
      </ul>
      <button
        className="cursor-pointer rounded-sm text-white bg-primary-red border-2 border-primary-red px-6 py-0.5 
                      hover:bg-white hover:text-primary-red transition duration-300 ease"
      >
        LOGIN
      </button>
    </div>
  );
}
