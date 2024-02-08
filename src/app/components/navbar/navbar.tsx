"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              StudResults
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              <Link href="login">Log-In</Link>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent md:hover:text-blue-700 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="contact-us"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-transparent md:hover:text-blue-700 "
                >
                  Contact-Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
