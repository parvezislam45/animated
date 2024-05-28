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
                    ₹600 Well Come Package Project
                  </h1>
                  <p className="text-xl text-white mt-2">
                    Receive Your Bonus Up to ₹ 60 to 40 %
                  </p>
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

      {/* -------------------- Category ------------------------------ */}

      <div className="grid grid-cols-2 md:grid-cols-6 md:px-40 gap-3 mt-6 w-10/12">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 w-40 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-2"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
            alt=""
          />
          Lobby
        </button>
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-2"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
            alt=""
          />
          Featured Slots
        </button>
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-2"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
            alt=""
          />
          Live Casino
        </button>
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-2"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
            alt=""
          />
          Casual
        </button>
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-2"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
            alt=""
          />
          Game Shows
        </button>
        <button
          type="button"
          class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-red-600 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-2"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
            alt=""
          />
          Blaze Orginal
        </button>
        
        <div className="flex items-center gap-1">
          
        </div>
      </div>

      {/* ---------------------- View All ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Orginals
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://store-images.s-microsoft.com/image/apps.442.14492077886571533.b0266c29-bb30-438c-b201-6b7e235b7920.6ebc94e7-3c85-4277-bee7-bdb2b8ef12dc?q=90&w=256&h=384&mode=crop&format=jpg&background=%23FFFFFF"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Minicraft</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://yt3.googleusercontent.com/447XAt80-ow7poHghoEV2f_0xf-QypVPzTqEFlwVsvijrS56-dpTU3ICge4OP48V8nfk6x5j"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Free Fire</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.crazygames.com/games/capybara-clicker-2/cover_2x3-1698042124876.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Capybara</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.crazygames.com/goober-dash_2x3/20231002025034/goober-dash_2x3-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Globber</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.unrealengine.com/egs-fortnite-c5s3-carousel-mobile-1200x1600-2c7984b43cee.jpg?h=854&quality=medium&resize=1&w=640"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Action</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://yt3.googleusercontent.com/xyrZw1Xw8BdnslDxg-BPVvTsJZ_w2yLrbBofPqdWTqwgIYbEGOgBW33C4BJd-GNx2hxXsCsx7pQ"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Valuerent</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>

      {/* ---------------------- Fortune Games ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Fortune Games
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://store-images.s-microsoft.com/image/apps.36093.14343301090572358.2000000000007864116.1feb0fed-abe9-4849-b638-8d7eca69cff4?q=90&w=256&h=384&mode=crop&format=jpg&background=%23FFFFFF"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Forza</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn.marvel.com/content/1x/marvelcontestofchampions_lob_crd_02.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Champion</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://store-images.s-microsoft.com/image/apps.53518.13510798883386282.a1e5df65-8dd7-427c-9da9-506afa37b254.706886cc-3ee8-42ab-b3d1-2faff7915f6f?q=90&w=256&h=384&mode=crop&format=jpg&background=%230078D7"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Roblox</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.unrealengine.com/egs-wuthering-waves-carousel-mobile-1200x1600-c9a5f943c98b.png?h=854&quality=medium&resize=1&w=640"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Moddlc</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GMDAxppeC3pwsUk60KLF9amSPi3MQhB4eCwhxYDaPUK8yrEukW4327Tad0ydBQOqQ-Q&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Epic 7</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://m.media-amazon.com/images/I/91OHAgKm+jL._AC_UF1000,1000_QL80_.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Untold</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Popular Games ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Popular
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://main.assets.gameloft.com/assets/home/hotspot/DH6/Dungeon_Mage_368x416.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Dungon</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGKHAZ9-FmaqeW2sL9ybI6bFPCC-0JBj_YJ4FSkSUXg&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Call of Duty</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://main.assets.gameloft.com/assets/home/hotspot/DDV/DDV-Keyart-412.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Archar</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.ctfassets.net/nwksj2ft7iku/iUBVwIL5X0kEnFSThHgcJ/e572bb2d05e4e28f214559f724d29357/Card_Battle_Art_640_x_640.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Harry Poter</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GMDAxppeC3pwsUk60KLF9amSPi3MQhB4eCwhxYDaPUK8yrEukW4327Tad0ydBQOqQ-Q&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Epic 7</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://m.media-amazon.com/images/I/91OHAgKm+jL._AC_UF1000,1000_QL80_.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Untold</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Neymer Favorite ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Neymar Jr Favorite
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VuUACrBQpg5hxnetwytNHBunghMsblzyjFB8rhptcDkGXpitdehKp4uT3u54Pv38pG0&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Relampago</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://i.ytimg.com/vi/TJWnO0DvowA/maxresdefault.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Ao vivo</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://bnldata.com.br/wp-content/uploads/2022/05/Drake_17_Milhoes_roleta.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Blackujack</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://ik.imagekit.io/leovegas/lv/games/rNrR9Vp9w/mwmxt0yMXn0RM.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Crazy Time</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiIkfzOpzkzRkGdayOGjsYtIAWt-aZOrpna8JQ3kz3ySFKpSrbcpNziWVV8yQY9O727I&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Braseliria</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Playtech
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIL0EacQ66awvbDwRWmvI4NArfSpjlv_wxvczHk5UwBQ&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Monopoly</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- New ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          New
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
      <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.crazygames.com/games/capybara-clicker-2/cover_2x3-1698042124876.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Capybara</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.crazygames.com/goober-dash_2x3/20231002025034/goober-dash_2x3-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Globber</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.unrealengine.com/egs-fortnite-c5s3-carousel-mobile-1200x1600-2c7984b43cee.jpg?h=854&quality=medium&resize=1&w=640"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Action</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://store-images.s-microsoft.com/image/apps.36093.14343301090572358.2000000000007864116.1feb0fed-abe9-4849-b638-8d7eca69cff4?q=90&w=256&h=384&mode=crop&format=jpg&background=%23FFFFFF"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Forza</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn.marvel.com/content/1x/marvelcontestofchampions_lob_crd_02.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Champion</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://store-images.s-microsoft.com/image/apps.53518.13510798883386282.a1e5df65-8dd7-427c-9da9-506afa37b254.706886cc-3ee8-42ab-b3d1-2faff7915f6f?q=90&w=256&h=384&mode=crop&format=jpg&background=%230078D7"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Roblox</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Game ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Game Provider
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mx-auto md:px-40 mt-5">
        <a href="/">
          <img
            src="https://i.postimg.cc/nVNGngbz/Screenshot-from-2024-05-20-00-51-12.png"
            alt="1"
            className="w-full"
          />
        </a>
        <a href="/">
          <img
            src="https://i.postimg.cc/sgrPhW2C/Screenshot-from-2024-05-20-00-52-26.png"
            alt="2"
            className="w-full"
          />
        </a>
        <a href="/">
          <img
            src="https://i.postimg.cc/bv61WF9q/Screenshot-from-2024-05-20-00-52-49.png"
            alt="3"
            className="w-full"
          />
        </a>
        <a href="/">
          <img
            src="https://i.postimg.cc/CMnbr7BV/Screenshot-from-2024-05-20-00-53-08.png"
            alt="4"
            className="w-full"
          />
        </a>
        <a href="/">
          <img
            src="https://i.postimg.cc/xTrMwmMN/Screenshot-from-2024-05-20-00-53-31.png"
            alt="5"
            className="w-full"
          />
        </a>
        <a href="/">
          <img
            src="https://i.postimg.cc/T3fmwXkR/Screenshot-from-2024-05-20-00-53-52.png"
            alt="6"
            className="w-full"
          />
        </a>
      </div>

      {/* ---------------------- Live Casino ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Live Casino
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://www.galera.bet/library/Game%20Icons/Live%20Casino/rol_deutschrol.jpg?siteid=1"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Adventure</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Playtech
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://gmimages.cdnppb.net/betfair-com/0cecac6b-a6ab-4493-b5d0-6efc1506ff9b_3118550_Bucharest_Roulette_Live_flat.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Blackjack</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Evalotion Games
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://gmimages.cdnppb.net/betfair-com/9ebbdd15-3ec8-42b8-b26c-bbabbdcd4504_DESIGNS-85080_Quantum_Roulette_flat.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Supertranfo</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://gmimages.cdnppb.net/betfair-com/493575e3-c4be-4d12-a8bd-09e0199fe154_DESIGNS-111595_Roulette_D_Live_flat.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Back Bo</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Evalotion Games
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70469llBkpUtWwUhDAEoHdrzknWCqlK83296c1VJTkg&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Rolattle</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://ik.imagekit.io/leovegas/lv/games/JbV6j36qa/Dej75I1G7DybOq.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Ultimate</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Ezugi
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Browse Theme ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Browse Theme
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2 mx-auto md:px-40">
        <div className="card w-32 h-14 rounded-md bg-blue-600 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-xs font-extrabold text-white">Stickly</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-yellow-600 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Fruit</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-purple-600 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Magic</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-pink-600 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Horror</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-fuchsia-300 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Egiptian</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-cyan-300 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Animals</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-lime-600 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Tv</h2>
          </div>
        </div>
        <div className="card w-32 h-14 rounded-md bg-rose-600 text-neutral-content">
          <div className="card-body justify-center -mt-4 items-center text-center">
            <h2 className="text-sm font-extrabold text-white">Dragon</h2>
          </div>
        </div>
      </div>
      {/* ---------------------- Casual Games ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Casual Games
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
      <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.ctfassets.net/nwksj2ft7iku/iUBVwIL5X0kEnFSThHgcJ/e572bb2d05e4e28f214559f724d29357/Card_Battle_Art_640_x_640.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Harry Poter</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GMDAxppeC3pwsUk60KLF9amSPi3MQhB4eCwhxYDaPUK8yrEukW4327Tad0ydBQOqQ-Q&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Epic 7</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.unrealengine.com/egs-fortnite-c5s3-carousel-mobile-1200x1600-2c7984b43cee.jpg?h=854&quality=medium&resize=1&w=640"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Action</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://yt3.googleusercontent.com/xyrZw1Xw8BdnslDxg-BPVvTsJZ_w2yLrbBofPqdWTqwgIYbEGOgBW33C4BJd-GNx2hxXsCsx7pQ"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Valuerent</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GMDAxppeC3pwsUk60KLF9amSPi3MQhB4eCwhxYDaPUK8yrEukW4327Tad0ydBQOqQ-Q&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Epic 7</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://m.media-amazon.com/images/I/91OHAgKm+jL._AC_UF1000,1000_QL80_.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Untold</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Mega Ways ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Megaways
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://pm-bet.in/service-discovery/service/pm-casino/img/tr:n-slots_game_image_mobile/Casino/eva/games/pg-asia-barnyard-megahays-megaways.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Burnerd</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://pm-bet.in/service-discovery/service/pm-casino/img/tr:n-slots_game_image_mobile/Casino/eva/games/pg-asia-pompeii-megareels-megaways.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Pumpell</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.softswiss.net/primobet/i/s3/infin/BuffaloPowerMegaways.webp"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Bufallo</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://slotogate.com/wp-content/uploads/2023/04/machina-reloaded-megaways.jpg.webp"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Game 4</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://i.pinimg.com/736x/23/e1/93/23e1935cd7f4214e445b0160bb6390ec.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Atlantic</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8_q3L2LCtLGrP-dvV85XTwHSj5Qd6eXavEMJHpO9gFcwbVegi4aM17PzRbRa1F1-DgM&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Dealdead</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        
      </div>
      {/* ---------------------- Bonus Buy ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Bonus Buy
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
      <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.unrealengine.com/egs-fortnite-c5s3-carousel-mobile-1200x1600-2c7984b43cee.jpg?h=854&quality=medium&resize=1&w=640"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Action</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://store-images.s-microsoft.com/image/apps.36093.14343301090572358.2000000000007864116.1feb0fed-abe9-4849-b638-8d7eca69cff4?q=90&w=256&h=384&mode=crop&format=jpg&background=%23FFFFFF"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Forza</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                Hackshow Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://main.assets.gameloft.com/assets/home/hotspot/DDV/DDV-Keyart-412.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Archar</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.ctfassets.net/nwksj2ft7iku/iUBVwIL5X0kEnFSThHgcJ/e572bb2d05e4e28f214559f724d29357/Card_Battle_Art_640_x_640.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Harry Poter</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.crazygames.com/games/capybara-clicker-2/cover_2x3-1698042124876.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Capybara</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://images.crazygames.com/goober-dash_2x3/20231002025034/goober-dash_2x3-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Globber</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Blaze Orginals
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Games Shows ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Game Shows
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VuUACrBQpg5hxnetwytNHBunghMsblzyjFB8rhptcDkGXpitdehKp4uT3u54Pv38pG0&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Relampago</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://i.ytimg.com/vi/TJWnO0DvowA/maxresdefault.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Ao vivo</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://www.galera.bet/library/Game%20Icons/Live%20Casino/rol_deutschrol.jpg?siteid=1"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Adventure</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Playtech
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://gmimages.cdnppb.net/betfair-com/0cecac6b-a6ab-4493-b5d0-6efc1506ff9b_3118550_Bucharest_Roulette_Live_flat.jpg?auto=compress,format&rect=0,0,900,900&w=450&h=450"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Blackjack</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-xs font-semibold leading-6 text-gray-300">
                Evalotion Games
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://games.evolution.com/wp-content/uploads/2023/09/immersive_roulette_poster_600x840.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Emversive</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2RH9FADbrTxOoCdHQ0T5VGmxF7YyGAENBhPQTTEBhQ&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Paris</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ---------------------- Table Games ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Table Games
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBU18Qo0uBFdN3ve9hJKSPhLje_62iJrdaGnDVVfLUQ&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Relampago</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuuK1xG5ZBlSm0EmTdaUkfg_4FCO1Q9KrAP0O32mHLw&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Ao vivo</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyJt6KwnPwaOBK7BA5Jjwibbr5lmUlpu1wPDuv169ow&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Blackujack</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3qPJC_LACHzFq9SF9rQDxmlJk7R7Lhg22sEWpL7OYg&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Crazy Time</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiIkfzOpzkzRkGdayOGjsYtIAWt-aZOrpna8JQ3kz3ySFKpSrbcpNziWVV8yQY9O727I&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Braseliria</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Playtech
              </div>
            </article>
            <div class="absolute top-2 right-2 py-1 px--2">
          <img className="w-7 h-7" src="https://oec.world/images/icons/country/country_bra.png" alt="" />
        </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://ik.imagekit.io/leovegas/lv/games/bv717V2pR/yW13tQeVvr1Wq.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Monopoly</h3>
              <div class="z-10 overflow-hidden font-semibold text-xs text-gray-300">
              Evalution Gameing
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ----------------------Scratch Card ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Scratch Cards
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
      <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://pm-bet.in/service-discovery/service/pm-casino/img/tr:n-slots_game_image_mobile/Casino/eva/games/pg-asia-pompeii-megareels-megaways.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Pumpell</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.softswiss.net/primobet/i/s3/infin/BuffaloPowerMegaways.webp"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Bufallo</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDdiN2JmYzUtZjNjZS00NTdlLTg5ODUtNGIyMzk2YWRjMDI1XkEyXkFqcGdeQXVyMTMwOTQxNzA4._V1_UY209_CR8,0,140,209_AL_.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Kingdoms</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTQyI5bQ5TAXRw3sVrPHmaP1rjzRMygziI6mX1Zs8lWawlbl5_JgYQMcHtmPP5nyZrU4&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Arena</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bf/b5/97/bfb59780-f664-ae4f-a27f-f918f33f5a56/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Shadow Gun</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpd8Q0RtXAgXXtUj8v2HNwL_Vhb5J_MPeMZtug3RBWOw&s"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Rayman</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                City of love
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
      </div>
      {/* ----------------------Drops & Wins ------------------------ */}

      <div className="flex justify-between items-center md:px-40 mt-5">
        <button
          type="button"
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Drops & Wins
          <div className="flex justify-center items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ms-2"
              viewBox="0 0 320 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                fill="white"
              ></path>
            </svg>
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
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 mx-auto md:px-40">
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://pm-bet.in/service-discovery/service/pm-casino/img/tr:n-slots_game_image_mobile/Casino/eva/games/pg-asia-barnyard-megahays-megaways.png"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Burnerd</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://st2.depositphotos.com/5954192/10637/i/950/depositphotos_106374956-stock-photo-couple-playing-roulette-wins-at.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Pumpell</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://cdn2.softswiss.net/primobet/i/s3/infin/BuffaloPowerMegaways.webp"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Bufallo</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20220828/pngtree-three-people-in-casino-playing-roulette-smiling-baby-boomers-boyfriend-couple-photo-image_543585.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Game 4</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://i.pinimg.com/736x/23/e1/93/23e1935cd7f4214e445b0160bb6390ec.jpg"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Atlantic</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        <a href="/">
          <div class="relative group w-44 h-60 overflow-hidden bg-black m-auto mt-10">
            <article class="flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8_q3L2LCtLGrP-dvV85XTwHSj5Qd6eXavEMJHpO9gFcwbVegi4aM17PzRbRa1F1-DgM&usqp=CAU"
                alt="Paris"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 class="z-10 mt-3 text-xl font-bold text-white">Dealdead</h3>
              <div class="z-10 gap-y-1 overflow-hidden text-sm font-semibold leading-6 text-gray-300">
                Programic Play
              </div>
            </article>

            <div class="absolute inset-0 bg-gradient-to-t from-black w-full h-full transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
                  <path
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    fill="white"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>
        </a>
        
      </div>
    </div>
  );
};

export default Casino;
