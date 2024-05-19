import React from "react";

const Banner = () => {
  return (
    <div className="md:px-20">
      <img className="w-full object-cover" src="https://i.postimg.cc/TwdCNxRH/Screenshot-from-2024-05-15-16-41-45.png" alt="" />
      <div className="hero bg-gray-900 mt-10">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="card card-side rounded-none bg-gray-900">
            <div className="card-body">
              <h2 className="card-title text-xl">Casino</h2>
              <p className="text-sm">
                Enjoy our unique selection of slots, live dealers and original
                games
              </p>
              <button className="btn text-white bg-red-600 w-full lg:w-40 rounded-none">
                Go To Casino
              </button>
            </div>
            <figure>
              <img
                className="h-72 w-full lg:w-80 object-cover"
                src="https://i.postimg.cc/KjJLbVdn/Screenshot-from-2024-05-14-23-02-38.png"
                alt="Movie"
              />
            </figure>
          </div>
          <div className="card card-side rounded-none bg-gray-900">
            <div className="card-body">
              <h2 className="card-title text-xl">Sports</h2>
              <p className="text-sm">
                Our intuitive sportsbook is made for both new and experienced
                players.
              </p>
              <button className="btn text-white bg-red-600 w-full lg:w-40 rounded-none">
                Go To Sports
              </button>
            </div>
            <figure>
              <img
                className="h-72 w-full lg:w-80 object-cover"
                src="https://i.postimg.cc/TYNBLH34/Screenshot-from-2024-05-14-23-03-23.png"
                alt="Movie"
              />
            </figure>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5 text-sm font-semibold">
        PREFERRED PAYMENT METHOD
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-10">
        <div className="flex justify-center gap-5">
          <a href="/">
            <img
              className="w-40"
              src="https://i.postimg.cc/VLFVQfTM/Screenshot-from-2024-05-15-09-40-47.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="w-32"
              src="https://i.postimg.cc/MpP3Hszp/Screenshot-from-2024-05-15-09-41-27.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <button className="btn text-white bg-red-600 w-full lg:w-40 rounded-none">
            Make Deposit
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-5 w-full">
        <img
          className="w-full lg:w-auto rounded-none"
          src="https://i.postimg.cc/W3ksXF50/Screenshot-from-2024-05-15-09-56-50.png"
          alt=""
        />
        <button className="btn btn-sm border-solid border border-gray-400 rounded-none lg:-mx-28">
          View More
        </button>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 mt-10">
        <a href="/">
          <img
            className="h-60 w-full md:w-96 object-cover"
            src="https://i.postimg.cc/CLLVw2Gp/Screenshot-from-2024-05-15-10-48-40.png"
            alt=""
          />
        </a>
        <a href="/">
          <img
            className="h-60 w-full md:w-96 object-cover"
            src="https://i.postimg.cc/KvYC6MbZ/Screenshot-from-2024-05-15-10-49-27.png"
            alt=""
          />
        </a>
        <a href="/">
          <img
            className="h-60 w-full md:w-96 object-cover"
            src="https://i.postimg.cc/gkB1m2c3/Screenshot-from-2024-05-15-10-51-30.png"
            alt=""
          />
        </a>
      </div>

      {/* ------------------------ Table ------------------------------ */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-sm font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-900">
            CASINO BETS <br />
            <div className="h-1 mt-8 w-full bg-gray-700"></div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-black dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                GAME
              </th>
              <th scope="col" className="px-6 py-3">
                USER
              </th>
              <th scope="col" className="px-6 py-3">
                TIME
              </th>
              <th scope="col" className="px-6 py-3">
                BET AMOUNT
              </th>
              <th scope="col" className="px-6 py-3">
                MULTIPLIER
              </th>
              <th scope="col" className="px-6 py-3">
                PAYOUT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                David Hunter
              </th>
              <td className="px-6 py-4">David</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                01.22 PM
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 150.88
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">OX</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 00.00
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                Fortune Dragon
              </th>
              <td className="px-6 py-4">Sales</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                01.22 PM
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 120.88
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">OX</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 00.00
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                Plinco
              </th>
              <td className="px-6 py-4">John</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                01.22 PM
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 195.88
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">OX</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 00.00
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sprit of Adventure
              </th>
              <td className="px-6 py-4">sfjtvd32</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                01.22 PM
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 123.20
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">OX</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 400.00
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                David Hunter
              </th>
              <td className="px-6 py-4">David</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                01.22 PM
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 145.50
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">OX</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 00.00
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sweet Banoza
              </th>
              <td className="px-6 py-4">Banoza</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                01.22 PM
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 175.26
              </td>
              <td className="px-6 py-4 font-medium text-xs text-white">OX</td>
              <td className="px-6 py-4 font-medium text-xs text-white">
                ₹ 200.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Banner;
