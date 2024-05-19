import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [selectedBonus, setSelectedBonus] = useState("noBonus");

  const handleCheckboxChange = (e) => {
    setSelectedBonus(e.target.value);
  };
  return (
    <div>
      <div className="navbar bg-black border-b border-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex items-center px-5">
            <img
              className="btn btn-ghost w-40"
              src="https://blaze1.space/static/media/logo.cf45d2ad.svg"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex gap-5 mx-10">
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
              alt=""
            />
            <NavLink to="/casino" className="text-xs font-semibold" activeClassName="active">
              CASINO
            </NavLink>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-6"
              src="https://img.icons8.com/emoji/256w/basketball-emoji.png"
              alt=""
            />
            <NavLink to="/sports" className="text-xs font-semibold" activeClassName="active">
              SPORTS
            </NavLink>
          </div>
        </div>
        <div className="navbar-end px-20">
          <div className="hidden gap-3 lg:flex items-center mx-10 border-b-4 border-gray-600">
            <div className="flex items-center">
              <img
                className="w-6"
                src="https://cdn-icons-png.flaticon.com/512/4942/4942719.png"
                alt=""
              />
              <h1 className="text-xs font-semibold mx-2">Unranked</h1>
            </div>
            <h1 className="text-xs font-semibold mx-5">Lavel1</h1>
          </div>
          <div className="flex gap-7 mx-5">
            <div className="indicator hidden lg:flex">
              <svg
                className="w-6 color-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"
                  fill="white"
                ></path>
              </svg>
              <span className="badge badge-sm indicator-item bg-red-600 text-white h-4 w-4 mt-1">
                4
              </span>
            </div>
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="flex gap-3 mx-10">
            <button
              disabled
              type="button"
              class="text-white bg-black border-solid border border-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-xs px-7 h-12 text-center"
            >
              ₹0.00
            </button>
            <button
              className="btn rounded-none bg-red-600 text-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal mt-20">
        <div className="modal-box w-96 min-h-screen">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <p className="text-xs text-center text-white font-normal mt-3">
              Select Bonus ! Payment Type ! Payment Details
            </p>
          </form>
          <h3 className="font-bold text-md text-center mt-5">
            Choose Your Bonus
          </h3>
          <div className="border-solid border-2 border-red-600 h-10">
            <label className="flex items-center mt-2 px-5" htmlFor="noBonus">
              <input
                type="checkbox"
                id="noBonus"
                value="noBonus"
                checked={selectedBonus === "noBonus"}
                onChange={handleCheckboxChange}
                className="mr-2 h-3 w-3 bg-red-600 focus:ring-red-600 border-red-600"
              />
              <span className="text-xs font-medium text-white mx-3">
                No Bonus
              </span>
            </label>
            <div className="mt-10">
              <label
                className="flex items-center mt-2 px-5"
                htmlFor="depositBonus"
              >
                <input
                  type="checkbox"
                  id="depositBonus"
                  value="depositBonus"
                  checked={selectedBonus === "depositBonus"}
                  onChange={handleCheckboxChange}
                  className="mr-2 h-3 w-3 text-red-600 focus:ring-red-600 border-gray-300"
                />
                <span className="text-xs font-medium text-white mx-3">
                  100 % Deposit Bonus
                </span>
              </label>
              <div
                style={{
                  display: selectedBonus === "depositBonus" ? "block" : "none",
                }}
              >
                <p className="mt-7 text-sm uppercase font-medium">
                  Bonus Terms
                </p>
                <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                  <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                  Deposit & Receive 100% Bonus Cash 40 Free Rounds
                </span>
                <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                  <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                  Minimum deposit required is €10 to receive the 40 Free Rounds
                </span>
                <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                  <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                  Free Rounds are only credited on the first deposit
                </span>
                <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                  <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                  Bonus Cash is given on any deposit up to a maximum of €200
                </span>
                <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                  <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                  Maximum allowed bet with bonus money is €5 / $5
                </span>
                <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                  <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                  Bonus Terms & Welcome Bonus Terms apply to this offer
                </span>
                <div className="text-center"> 
                <button onClick={() => document.getElementById("my_modal_3").showModal()} className="btn text-white bg-red-600 w-full lg:w-40 rounded-none mt-10 mx-auto">
                Continue
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NavBar;
