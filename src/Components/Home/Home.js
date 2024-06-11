import React from "react";


const Home = () => {
  return (
    <div className="lg:px-10">
      <div className="w-full">
        <img
          className="w-full object-cover mt-10"
          src="https://i.postimg.cc/TwdCNxRH/Screenshot-from-2024-05-15-16-41-45.png"
          alt=""
        />
      </div>
      <div class="w-full mt-10 mx-2">
        <div class="grid md:grid-cols-2 mx-auto gap-20">
          <div class=" flex w-full h-72 flex-row bg-gray-800 bg-clip-border text-white shadow-md">
            <div class="p-10 w-full">
            <h2 className="card-title text-xl">Casino</h2>
              <p className="text-sm mt-6">
                Enjoy our unique selection of slots, live dealers and original games
              </p>
              <button className="btn text-white bg-red-600 w-full lg:w-40 rounded-none mt-8">
                Go To Casino
              </button>
            </div>
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
              <img
                src="https://i.postimg.cc/KjJLbVdn/Screenshot-from-2024-05-14-23-02-38.png"
                alt="card"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class=" flex w-full h-72 flex-row bg-gray-800 bg-clip-border text-white shadow-md">
            <div class="p-10 w-full">
            <h2 className="card-title text-xl">Sports</h2>
              <p className="text-sm mt-6">
              Our intuitive Sports book is made for both new and experienced players.
              </p>
              <button className="btn text-white bg-red-600 w-full lg:w-40 rounded-none mt-8">
              Go To Sports
              </button>
            </div>
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
              <img
                src="https://i.postimg.cc/TYNBLH34/Screenshot-from-2024-05-14-23-03-23.png"
                alt="card"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-8 text-sm font-semibold">
        PREFERRED PAYMENT METHOD
      </h1>
      <div className="w-full mt-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-10 w-full">
          <div className="flex justify-center gap-5">
            <a href="/">
              <img
                className="w-40 mx-auto"
                src="https://i.postimg.cc/VLFVQfTM/Screenshot-from-2024-05-15-09-40-47.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                className="w-32 mx-auto"
                src="https://i.postimg.cc/MpP3Hszp/Screenshot-from-2024-05-15-09-41-27.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <button className="btn text-white bg-red-600 w-full lg:w-40 rounded-none mx-auto">
              Make Deposit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <img
          className="w-full"
          src="https://i.postimg.cc/W3ksXF50/Screenshot-from-2024-05-15-09-56-50.png"
          alt=""
        />
      </div>
      <div className="w-full mt-10">
        <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 mt-10">
          <a href="/">
            <img
              className="h-60 w-full object-cover mx-auto"
              src="https://i.postimg.cc/CLLVw2Gp/Screenshot-from-2024-05-15-10-48-40.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="h-60 w-full object-cover mx-auto"
              src="https://i.postimg.cc/KvYC6MbZ/Screenshot-from-2024-05-15-10-49-27.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="h-60 w-full object-cover mx-auto"
              src="https://i.postimg.cc/gkB1m2c3/Screenshot-from-2024-05-15-10-51-30.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="w-full">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
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
    </div>
  );
};

export default Home;
