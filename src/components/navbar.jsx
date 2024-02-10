import React, { Component } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/constants";
import { Hamburger } from "../assets/assets";

export class navbar extends Component {
  state = {
    isOpen: false,
  };
  toggleMenu = () => {
    let newState = !this.state.isOpen;
    this.setState({ isOpen: newState });
  };
  render() {
    return (
      <header className="text-gray-600 body-font fixed bg-white w-full border-black border-b-2">
        <div className="mx-2 p-5 flex flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">HeadlineHarbor</span>
          </Link>

          <nav className="lg:ml-auto lg:mr-auto max-lg:absolute max-lg:right-10">
            <div className="hidden max-lg:block ">
              <div
                className="cursor-pointer border-2 border-white hover:border-indigo-500 rounded-lg p-2"
                onClick={this.toggleMenu}
              >
                <img
                  src={Hamburger}
                  alt="Hamburger Logo"
                  width={25}
                  height={25}
                />
              </div>
              {this.state.isOpen && (
                <ul className="bg-indigo-500 h-auto w-52 absolute top-[85px] -right-6 py-2 px-6 align-baseline text-center">
                  {navLinks.map((element) => (
                    <li key={element.label}>
                      <Link
                        to={element.to}
                        className={`block text-black text-lg py-2 hover:text-black border-b-[1px] border-white`}
                        // onClick={() => handleNavLinkClick(item.id)}
                      >
                        {element.label}
                      </Link>
                    </li>
                  ))}
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-500 rounded text-lg text-black ">
                    Sign in
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  {/* <li>
                    <Link
                      to={"/"}
                      className="block text-black text-lg py-2 hover:bg-orange-500 hover:text-black border-b-[1px] border-white"
                    >
                      Sign In
                    </Link>
                  </li> */}
                </ul>
              )}
            </div>

            <div className="max-lg:hidden">
              {navLinks.map((element) => {
                return (
                  <Link
                    className="mr-3 py-2 px-2 border-2 border-transparent rounded-lg hover:text-indigo-500 hover:border-2 hover:rounded-md hover:border-indigo-500 font-semibold active:text-indigo-700"
                    key={element.label}
                    to={element.href}
                  >
                    {element.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 max-lg:hidden">
            Sign in
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    );
  }
}

export default navbar;
