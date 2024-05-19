import React, { useEffect, useState } from "react";
const Casino = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://casino.betmgm.com/en/blog/wp-content/uploads/2023/08/Casino-Gambling-The-Complete-Guide-for-Beginners-header-1080x610-1.jpg",
    "https://www.assamtimes.org/sites/default/files/styles/718x440/public/articles/Understanding%20the%20Basics_%20An%20Introduction%20to%20Casino%20Games%20Rules.jpg?itok=rkVo29b1",
    "https://www.taxscan.in/wp-content/uploads/2020/01/Casino-Winnnings-India-Public-Gambling-Taxscan.jpg",
    "https://asset.montecarlosbm.com/styles/hero_desktop_wide_responsive_webp/s3/media/orphea/casino_monte_carlo_1900x990_3__0.jpg.webp?itok=pVXEZUFT",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);
  return (
    <div>
      <div className="md:px-40 mt-10">
        <div className="carousel w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item w-full ${
                index === currentIndex ? "block" : "hidden"
              }`}
              style={{
                height: "25rem",
                backgroundImage: `url(${slide})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center px-20 justify-between w-full h-full bg-gray-900/40">
                <div className="text-start">
                  <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                  ₹600 Well Come Package
                    Project
                  </h1>
                  <p className="text-xl text-white mt-2">Receive Your Bonus Up to ₹ 60 to 40 %</p>
                  <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`btn btn-xs ${
                index === currentIndex ? "btn-active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* --------------------------------- Search ----------------------------------- */}

      <form class=" md:px-40 w-full">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block placeholder:font-bold w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Games or Providers"
            required
          />
        </div>
      </form>

      {/* ---------------------- View All ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Orginals
          <div className="flex justify-center items-center mx-5">
          <svg xmlns="http://www.w3.org/2000/svg"className="w-4 h-4 ms-2" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="white"></path></svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-4 h-4 ms-2"
            >
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                fill="white"
              ></path>
            </svg>
            
          </div>
        </button>
        <button
          type="button"
          class="text-gray-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:hover:text-white dark:focus:ring-blue-800"
        >
          View All
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3 h-3 ms-2"
            >
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                fill="white"
              ></path>
            </svg>
        </button>
      </div>

      {/* --------------------------------- card ----------------------------------- */}
      <div className=" grid md:grid-cols-6 gap-3 mx-auto md:px-40">
        <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
          <img
            alt=""
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurk1VwjqiJGqQvMpoLOvtL54FT4BRPbYH2KQTdS7wGQ&s"
          />

          <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:inset-y-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <button
              type="button"
              class="px-3 py-2 text-sm font-extrabold text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play-fill w-6 h-6 text-white me-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  fill="white"
                ></path>{" "}
              </svg>
              Play
            </button>
          </div>
        </div>
        <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
          <img
            alt=""
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/hong-kong-casinos-cover.jpg"
          />

          <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:inset-y-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <button
              type="button"
              class="px-3 py-2 text-sm font-extrabold text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play-fill w-6 h-6 text-white me-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  fill="white"
                ></path>{" "}
              </svg>
              Play
            </button>
          </div>
        </div>
        <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
          <img
            alt=""
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://content.jdmagicbox.com/comp/goa/j7/0832px832.x832.130418164547.v1j7/catalogue/casino-carnival-panjim-goa-casino-lyujql.jpg"
          />

          <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:inset-y-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <button
              type="button"
              class="px-3 py-2 text-sm font-extrabold text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play-fill w-6 h-6 text-white me-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  fill="white"
                ></path>{" "}
              </svg>
              Play
            </button>
          </div>
        </div>
        <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
          <img
            alt=""
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://www.crownmelbourne.com.au/getsydmedia/05d9bfc5-695b-434c-9cd8-4d7465cc08ef/220815-Crown-Melbourne-Gaming-Casino-War-1200x800px-10.jpg"
          />

          <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:inset-y-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <button
              type="button"
              class="px-3 py-2 text-sm font-extrabold text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play-fill w-6 h-6 text-white me-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  fill="white"
                ></path>{" "}
              </svg>
              Play
            </button>
          </div>
        </div>
        <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
          <img
            alt=""
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://www.sycuan.com/wp-content/uploads/2023/06/web-coin-trio-piggy-burst.jpg"
          />

          <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:inset-y-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <button
              type="button"
              class="px-3 py-2 text-sm font-extrabold text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play-fill w-6 h-6 text-white me-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  fill="white"
                ></path>{" "}
              </svg>
              Play
            </button>
          </div>
        </div>
        <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
          <img
            alt=""
            class="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1oSOGfmGufKvdGhNOqg0Hm4hlSqhDFf7C3tw6iCEJA&s"
          />

          <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:inset-y-0 flex justify-center items-center opacity-0 hover:opacity-100">
            <button
              type="button"
              class="px-3 py-2 text-sm font-extrabold text-center inline-flex items-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-play-fill w-6 h-6 text-white me-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  fill="white"
                ></path>{" "}
              </svg>
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
