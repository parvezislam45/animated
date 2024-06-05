import React, { useCallback, useEffect, useState } from "react";
import "swiper/css/pagination";

const Sports = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (targetTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTime({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }
  };

  const startCountDown = useCallback(() => {
    const currentTime = new Date();
    const countDownDate = new Date(
      currentTime.getTime() +
        5 * 24 * 60 * 60 * 1000 +
        24 * 60 * 60 * 1000 +
        60 * 60 * 1000 +
        60 * 1000
    );

    const interval = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanupInterval = startCountDown();
    return cleanupInterval;
  }, [startCountDown]);
  return (
    <div className="">
      <div className=" flex justify-start md:justify-between lg:justify-start sm:justify-center flex-wrap">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 mb-2 lg:mb-0 sm:me-0 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-1"
            src="https://i.postimg.cc/x1DXWxXJ/Screenshot-from-2024-05-26-21-47-27.png"
            alt=""
          />
          HIGHLIGHTS
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 sm:me-0 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-8 me-1"
            src="https://i.postimg.cc/fLG3DB8r/Screenshot-from-2024-05-26-21-52-16.png"
            alt=""
          />
          SCHEDULE
        </button>
      </div>

      <div className=" mt-10">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-md px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-950 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-12 me-2"
            src="https://i.postimg.cc/9Fj4kgR4/Screenshot-from-2024-05-26-21-53-46.png"
            alt=""
          />
          Popular
        </button>
      </div>
      <div className=" mt-6 w-9/12">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/7LNXCJF9/Screenshot-from-2024-05-26-22-07-11.png"
            alt=""
          />
          Soccer
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/nVm275fM/Screenshot-from-2024-05-26-22-21-54.png"
            alt=""
          />
          Fifa
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Basketball
        </button>

        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images.vexels.com/media/users/3/132455/isolated/lists/e1eea465424652fe7635d476dcb24eae-tennis-racket-ball-icon.png"
            alt=""
          />
          Tennis
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8d11cbf0-fb3a-4211-afd9-4e4f35dad665/d3jrqmb-6cd9a1f5-fcb9-4f6f-a91e-95a9c91b2ebc.png/v1/fill/w_256,h_256,q_80,strp/token_light_counter_strike_by_idontcare1210_d3jrqmb-fullview.jpg"
            alt=""
          />
          Counter-Strike
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Volleyball
        </button>
      </div>
      <div className="grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <div className="w-full h-60 bg-gray-800 rounded-xl">
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-2">
              <img
                className="w-4 h-4 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                alt=""
              />
              <h1 className="text-xs text-gray-400 font-bold">
                Denmark Superliga
              </h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4 h-4"
                src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                alt=""
              />
              <img
                className="w-4 h-4"
                src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2 md:px-5 mt-4">
            <h1 className="text-xs text-white font-bold">Halftime</h1>
            <img
              className="w-8 h-4"
              src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://www.stickees.com/files/sports/spanish-football-club/5590-real-madrid-sticker.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Real Madrid Fc</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://cdn-icons-png.flaticon.com/256/824/824748.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Fc Barcelona</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
          <div className="flex justify-between items-center px-3 gap-2">
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">1</p>
                <p className="text-xs font-extrabold text-white">1.2</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">draw</p>
                <p className="text-xs font-extrabold text-white">7.25</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">2</p>
                <p className="text-xs font-extrabold text-white">50.0</p>
              </div>
            </div>
            <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
              <svg
                className="w-5 h-5 mx-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-60 bg-gray-800 rounded-xl">
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-2">
              <img
                className="w-4 h-4 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                alt=""
              />
              <h1 className="text-xs text-gray-400 font-bold">
                Denmark Superliga
              </h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4 h-4"
                src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                alt=""
              />
              <img
                className="w-4 h-4"
                src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2 md:px-5 mt-4">
            <h1 className="text-xs text-white font-bold">Halftime</h1>
            <img
              className="w-8 h-4"
              src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://cdn.icon-icons.com/icons2/103/PNG/256/liverpool_fc_17975.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Liverpool Fc</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://ballkhmer.com/upload/catalog/c/981/s_manchester-united-football-club.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">
                Menchester United
              </h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
          <div className="flex justify-between items-center px-3 gap-2">
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">1</p>
                <p className="text-xs font-extrabold text-white">1.2</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">draw</p>
                <p className="text-xs font-extrabold text-white">7.25</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">2</p>
                <p className="text-xs font-extrabold text-white">50.0</p>
              </div>
            </div>
            <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
              <svg
                className="w-5 h-5 mx-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-60 bg-gray-800 rounded-xl">
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-2">
              <img
                className="w-4 h-4 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                alt=""
              />
              <h1 className="text-xs text-gray-400 font-bold">
                Denmark Superliga
              </h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4 h-4"
                src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                alt=""
              />
              <img
                className="w-4 h-4"
                src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2 md:px-5 mt-4">
            <h1 className="text-xs text-white font-bold">Halftime</h1>
            <img
              className="w-8 h-4"
              src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://logoeps.com/wp-content/uploads/2011/05/arsenal-logo-vector-200x200.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Arsenal Club</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://logoeps.com/wp-content/uploads/2012/12/west-ham-united-logo-vector-200x200.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">WestHum United</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
          <div className="flex justify-between items-center px-3 gap-2">
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">1</p>
                <p className="text-xs font-extrabold text-white">1.2</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">draw</p>
                <p className="text-xs font-extrabold text-white">7.25</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">2</p>
                <p className="text-xs font-extrabold text-white">50.0</p>
              </div>
            </div>
            <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
              <svg
                className="w-5 h-5 mx-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-60 bg-gray-800 rounded-xl">
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-2">
              <img
                className="w-4 h-4 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                alt=""
              />
              <h1 className="text-xs text-gray-400 font-bold">
                Denmark Superliga
              </h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4 h-4"
                src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                alt=""
              />
              <img
                className="w-4 h-4"
                src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2 md:px-5 mt-4">
            <h1 className="text-xs text-white font-bold">Halftime</h1>
            <img
              className="w-8 h-4"
              src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://seeklogo.com/images/M/manchester-city-fc-new-logo-4C45133019-seeklogo.com.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Manchester City</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://seeklogo.com/images/C/chelsea-da-pedra-da-saudade-logo-4DD5AD6EB7-seeklogo.com.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Chelse Fc</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
          <div className="flex justify-between items-center px-3 gap-2">
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">1</p>
                <p className="text-xs font-extrabold text-white">1.2</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">draw</p>
                <p className="text-xs font-extrabold text-white">7.25</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">2</p>
                <p className="text-xs font-extrabold text-white">50.0</p>
              </div>
            </div>
            <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
              <svg
                className="w-5 h-5 mx-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-60 bg-gray-800 rounded-xl">
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-2">
              <img
                className="w-4 h-4 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                alt=""
              />
              <h1 className="text-xs text-gray-400 font-bold">
                Denmark Superliga
              </h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4 h-4"
                src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                alt=""
              />
              <img
                className="w-4 h-4"
                src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2 md:px-5 mt-4">
            <h1 className="text-xs text-white font-bold">Halftime</h1>
            <img
              className="w-8 h-4"
              src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-5 h-6"
                src="https://seeklogo.com/images/B/burnley-fc-logo-D08E749A01-seeklogo.com.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Burnaly Fc</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-5 h-6"
                src="https://seeklogo.com/images/A/aston-villa-football-club-logo-87EA15CC94-seeklogo.com.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Aston Vila Fc</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
          <div className="flex justify-between items-center px-3 gap-2">
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">1</p>
                <p className="text-xs font-extrabold text-white">1.2</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">draw</p>
                <p className="text-xs font-extrabold text-white">7.25</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">2</p>
                <p className="text-xs font-extrabold text-white">50.0</p>
              </div>
            </div>
            <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
              <svg
                className="w-5 h-5 mx-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-60 bg-gray-800 rounded-xl">
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-2">
              <img
                className="w-4 h-4 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                alt=""
              />
              <h1 className="text-xs text-gray-400 font-bold">
                Denmark Superliga
              </h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-4 h-4"
                src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                alt=""
              />
              <img
                className="w-4 h-4"
                src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2 md:px-5 mt-4">
            <h1 className="text-xs text-white font-bold">Halftime</h1>
            <img
              className="w-8 h-4"
              src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://icons.veryicon.com/png/Sport/English%20Football%20Club/Newcastle%20United.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Newcastle United</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <div className="flex justify-between items-center px-3 mt-2">
            <div className="flex gap-3 items-center">
              <img
                className="w-9 h-9"
                src="https://i.pinimg.com/originals/ed/a5/71/eda571be69767295a5a60aeb98879a51.png"
                alt=""
              />
              <h1 className="text-sm text-white font-bold">Weldstone Fc</h1>
            </div>
            <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
              2
            </button>
          </div>
          <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
          <div className="flex justify-between items-center px-3 gap-2">
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">1</p>
                <p className="text-xs font-extrabold text-white">1.2</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">draw</p>
                <p className="text-xs font-extrabold text-white">7.25</p>
              </div>
            </div>
            <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
              <div className="flex justify-between items-center px-3 mt-2.5">
                <p className="text-xs font-extrabold">2</p>
                <p className="text-xs font-extrabold text-white">50.0</p>
              </div>
            </div>
            <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
              <svg
                className="w-5 h-5 mx-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-md px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-950 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-12 me-2"
            src="https://i.postimg.cc/rFf7f9nv/Screenshot-from-2024-05-27-14-03-07.png"
            alt=""
          />
          Live
        </button>
      </div>
      <div className=" mt-6 gap-3">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/7LNXCJF9/Screenshot-from-2024-05-26-22-07-11.png"
            alt=""
          />
          Soccer
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/nVm275fM/Screenshot-from-2024-05-26-22-21-54.png"
            alt=""
          />
          Fifa
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Basketball
        </button>

        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images.vexels.com/media/users/3/132455/isolated/lists/e1eea465424652fe7635d476dcb24eae-tennis-racket-ball-icon.png"
            alt=""
          />
          Tennis
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8d11cbf0-fb3a-4211-afd9-4e4f35dad665/d3jrqmb-6cd9a1f5-fcb9-4f6f-a91e-95a9c91b2ebc.png/v1/fill/w_256,h_256,q_80,strp/token_light_counter_strike_by_idontcare1210_d3jrqmb-fullview.jpg"
            alt=""
          />
          Counter-Strike
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Volleyball
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/nVm275fM/Screenshot-from-2024-05-26-22-21-54.png"
            alt=""
          />
          Fifa
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Basketball
        </button>

        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images.vexels.com/media/users/3/132455/isolated/lists/e1eea465424652fe7635d476dcb24eae-tennis-racket-ball-icon.png"
            alt=""
          />
          Tennis
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8d11cbf0-fb3a-4211-afd9-4e4f35dad665/d3jrqmb-6cd9a1f5-fcb9-4f6f-a91e-95a9c91b2ebc.png/v1/fill/w_256,h_256,q_80,strp/token_light_counter_strike_by_idontcare1210_d3jrqmb-fullview.jpg"
            alt=""
          />
          Counter-Strike
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-10">
        <div class=" shadow-md shadow-black/5 rounded-md lg:col-span-3">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="w-full h-60 bg-gray-800 rounded-xl">
              <div className="flex justify-between items-center px-3 mt-2">
                <div className="flex gap-2">
                  <img
                    className="w-4 h-4 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                    alt=""
                  />
                  <h1 className="text-xs text-gray-400 font-bold">Laliga
                  </h1>
                </div>
                <div className="flex gap-2">
                  <img
                    className="w-4 h-4"
                    src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                    alt=""
                  />
                  <img
                    className="w-4 h-4"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2 md:px-5 mt-4">
                <h1 className="text-xs text-white font-bold">Halftime</h1>
                <img
                  className="w-8 h-4"
                  src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between items-center px-3 mt-2">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-9 h-9"
                    src="https://www.stickees.com/files/sports/spanish-football-club/5590-real-madrid-sticker.png"
                    alt=""
                  />
                  <h1 className="text-sm text-white font-bold">
                    Real Madrid Fc
                  </h1>
                </div>
                <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                  2
                </button>
              </div>
              <div className="flex justify-between items-center px-3 mt-2">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-9 h-9"
                    src="https://cdn-icons-png.flaticon.com/256/824/824748.png"
                    alt=""
                  />
                  <h1 className="text-sm text-white font-bold">Fc Barcelona</h1>
                </div>
                <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                  2
                </button>
              </div>
              <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
              <div className="flex justify-between items-center px-3 gap-2">
                <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                  <div className="flex justify-between items-center px-3 mt-2.5">
                    <p className="text-xs font-extrabold">1</p>
                    <p className="text-xs font-extrabold text-white">1.2</p>
                  </div>
                </div>
                <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                  <div className="flex justify-between items-center px-3 mt-2.5">
                    <p className="text-xs font-extrabold">draw</p>
                    <p className="text-xs font-extrabold text-white">7.25</p>
                  </div>
                </div>
                <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                  <div className="flex justify-between items-center px-3 mt-2.5">
                    <p className="text-xs font-extrabold">2</p>
                    <p className="text-xs font-extrabold text-white">50.0</p>
                  </div>
                </div>
                <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                  <svg
                    className="w-5 h-5 mx-2 mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      Italian Seria
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Halftime</h1>
                  <img
                    className="w-8 h-4"
                    src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://seeklogo.com/images/A/AC_Milan-logo-D6197AF2D5-seeklogo.com.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">AC Milan</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://seeklogo.com/images/I/inter-milan-logo-45731EF4DB-seeklogo.com.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Inter Nilan
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
            </div>
            <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      Denmark Superliga
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Halftime</h1>
                  <img
                    className="w-8 h-4"
                    src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://media5.iamcalcio.it/colors/badges/realsize/popular/paris.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Parise Saint Germay
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/AwpOg9EBSdw787FNq_JHyw_96x96.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Bolton Fc</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      Denmark Superliga
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Halftime</h1>
                  <img
                    className="w-8 h-4"
                    src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/-d0oJPgaoSOrEJJvZYc8Vw_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Port Valy</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/wQoXWkUYrjmIT2snkRexoQ_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Exter City</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      Denmark Superliga
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Halftime</h1>
                  <img
                    className="w-8 h-4"
                    src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://logoeps.com/wp-content/uploads/2011/05/arsenal-logo-vector-200x200.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Arsenal Club
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://logoeps.com/wp-content/uploads/2012/12/west-ham-united-logo-vector-200x200.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      WestHum United
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      Denmark Superliga
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Halftime</h1>
                  <img
                    className="w-8 h-4"
                    src="https://i.postimg.cc/G2cCxX09/Screenshot-from-2024-05-26-23-50-16.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://icons.veryicon.com/png/Sport/English%20Football%20Club/Newcastle%20United.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Newcastle United
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-9 h-9"
                      src="https://i.pinimg.com/originals/ed/a5/71/eda571be69767295a5a60aeb98879a51.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Weldstone Fc
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
          </div>
          <div>
            <canvas id="order-chart"></canvas>
          </div>
        </div>
        <div class="bg-black shadow-md shadow-black/5 lg:col-span-2">
        <div className="flex justify-center items-center gap-3 mt-6">
              <img
                className="w-9 me-2"
                src="https://i.postimg.cc/9Fj4kgR4/Screenshot-from-2024-05-26-21-53-46.png"
                alt=""
              />
              <h1 className="text-white font-extrabold text-xl">Top Match</h1>
            </div>
            <h1 className="font-bold text-center text-xs text-gray-400 mt-7">
              EVENT START IN
            </h1>
            <div className="mt-3">
              <div className="flex justify-center gap-4 mx-5">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">
                    {countDownTime?.days}
                  </span>
                  <span className="text-[#8486A9] text-md font-semibold mt-2 text-center capitalize">
                    {countDownTime?.days == 1 ? "Day" : "Days"}
                  </span>
                </div>
                <h1 className="text-white font-extrabold text-3xl">:</h1>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">
                    {countDownTime?.hours}
                  </span>
                  <span className="text-[#8486A9] text-md font-semibold mt-2 text-center capitalize">
                    {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                  </span>
                </div>
                <h1 className="text-white font-extrabold text-3xl">:</h1>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">
                    {countDownTime?.minutes}
                  </span>
                  <span className="text-[#8486A9] text-md font-semibold mt-2 text-center capitalize">
                    {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                  </span>
                </div>
                <h1 className="text-white font-extrabold text-3xl">:</h1>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">
                    {countDownTime?.seconds}
                  </span>
                  <span className="text-[#8486A9] text-md font-semibold mt-2 text-center capitalize">
                    {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-14 mt-5">
              <div className="flex gap-2">
                <img
                  className="w-4 h-4 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                  alt=""
                />
                <h1 className="text-xs text-gray-400 font-bold">
                  Denmark Superliga
                </h1>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-4 h-4 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                  alt=""
                />
                <img
                  className="w-4 h-4 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-center gap-5 items-center mt-5">
              <div className="w-48 h-60 bg-gray-700">
                <img
                  className=" mx-auto mt-3"
                  src="https://1.bp.blogspot.com/-hXIlQNRv0sY/Xm08iowFFYI/AAAAAAABYJ0/g3G4OPsDV5kUVOKJ22qGh5wqChEJKgLawCLcBGAsYHQ/s1600/Real%2BMadrid%2BCF256x.png"
                  alt=""
                />
                <h1 className="text-sm text-white text-center font-bold mt-2">
                  Real Madrid
                </h1>
                <h1 className="text-sm text-white text-center font-bold mt-3">
                  7.32
                </h1>
              </div>
              <div className="w-16 h-60 bg-gray-700">
                <img
                  className="w-3 h-5 mt-24 mx-auto"
                  src="https://cdn-icons-png.flaticon.com/256/458/458595.png"
                  alt=""
                />
                <h1 className="text-sm text-white text-center font-bold mt-24">
                  7.32
                </h1>
              </div>

              <div className="w-48 h-60 bg-gray-700">
                <img
                  className=" mx-auto mt-3"
                  src="https://assets-sports.thescore.com/soccer/team/114/logo.png"
                  alt=""
                />
                <h1 className="text-sm text-white text-center font-bold mt-2">
                  Borusia Dotmondu
                </h1>
                <h1 className="text-sm text-white text-center font-bold mt-3">
                  4.32
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center mt-16">
              <button
                type="button"
                class="py-2 px-16 me-2 mb-2 text-sm font-medium text-white bg-gray-600 hover:bg-gray-600 hover:text-white"
              >
                15 ₹
              </button>
              <button
                type="button"
                class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                50
              </button>
              <button
                type="button"
                class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                100
              </button>
              <button
                type="button"
                class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                500
              </button>
              <button
                type="button"
                class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                1000
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                class="py-3 px-20 mt-10 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-600"
              >
                PLACE BID
              </button>
            </div>
            <div className="flex justify-between items-center px-12 mt-10">
              <button
                type="button"
                class="text-blue-700 bg-gray-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-left-fill w-3 h-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
              <button
                type="button"
                class="text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go to Event
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-right-fill w-3 h-3 mx-1"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    fill="white"
                  ></path>{" "}
                </svg>
              </button>
              <button
                type="button"
                class="text-blue-700 bg-gray-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-right-fill w-3 h-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
        </div>
      </div>
      <div className="text-center mt-5 h-10 w-full bg-gray-800">
        <button
          type="button"
          class="text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go to Live
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-caret-right-fill w-3 h-3 mx-1"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
              fill="white"
            ></path>{" "}
          </svg>
        </button>
      </div>
      <div className=" mt-10">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-md px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-950 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-12 me-2"
            src="https://i.postimg.cc/QMMWTpxh/Screenshot-from-2024-05-27-14-05-18.png"
            alt=""
          />
          Upcoming
        </button>
      </div>
      <div className=" mt-6 gap-3">
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/7LNXCJF9/Screenshot-from-2024-05-26-22-07-11.png"
            alt=""
          />
          Soccer
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/nVm275fM/Screenshot-from-2024-05-26-22-21-54.png"
            alt=""
          />
          Fifa
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Basketball
        </button>

        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images.vexels.com/media/users/3/132455/isolated/lists/e1eea465424652fe7635d476dcb24eae-tennis-racket-ball-icon.png"
            alt=""
          />
          Tennis
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8d11cbf0-fb3a-4211-afd9-4e4f35dad665/d3jrqmb-6cd9a1f5-fcb9-4f6f-a91e-95a9c91b2ebc.png/v1/fill/w_256,h_256,q_80,strp/token_light_counter_strike_by_idontcare1210_d3jrqmb-fullview.jpg"
            alt=""
          />
          Counter-Strike
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Volleyball
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://i.postimg.cc/nVm275fM/Screenshot-from-2024-05-26-22-21-54.png"
            alt=""
          />
          Fifa
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://cdn-icons-png.freepik.com/256/10588/10588294.png"
            alt=""
          />
          Basketball
        </button>

        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-32 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images.vexels.com/media/users/3/132455/isolated/lists/e1eea465424652fe7635d476dcb24eae-tennis-racket-ball-icon.png"
            alt=""
          />
          Tennis
        </button>
        <button
          type="button"
          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-xs px-3 py-1 w-40 text-center inline-flex items-center me-2 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
        >
          <img
            className="w-6 me-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8d11cbf0-fb3a-4211-afd9-4e4f35dad665/d3jrqmb-6cd9a1f5-fcb9-4f6f-a91e-95a9c91b2ebc.png/v1/fill/w_256,h_256,q_80,strp/token_light_counter_strike_by_idontcare1210_d3jrqmb-fullview.jpg"
            alt=""
          />
          Counter-Strike
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-10">
        <div class=" shadow-md shadow-black/5 rounded-md lg:col-span-3">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      UEFA Champion League
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">
                    02 June 01.00
                  </h1>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://1.bp.blogspot.com/-hXIlQNRv0sY/Xm08iowFFYI/AAAAAAABYJ0/g3G4OPsDV5kUVOKJ22qGh5wqChEJKgLawCLcBGAsYHQ/s1600/Real%2BMadrid%2BCF256x.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Real Madrid Fc
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://assets-sports.thescore.com/soccer/team/114/logo.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Borusia Dotmondu
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      League 1
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Today 22.30</h1>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/26dWWcdpCiRwnKoCLpX_JA_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Blackpool Fc
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/1vdPDOnkmY_Dn6LrWClXJw_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Oxford Utc</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl mt-2">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">
                      League 1
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">
                    28 April 23.10
                  </h1>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/OMSY7cyLfOxoxcCsVtnTCw_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Leyton Orient
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/NzM-_otW1vP84AvjBPwh1A_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Stevenge</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl mt-2">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">Laliga</h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Today 01.30</h1>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/S0fDZjYYytbZaUt0f3cIhg_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Real Sociadad
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">
                      Atletico Madrid
                    </h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl mt-2">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">Laliga</h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Today 12.40</h1>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/H1vdTrUUqJBeUW1HfbW0nQ_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Cadiz</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/yOIfuEFVFzu1dD8HiJt9vA_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Las Palmas</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-60 bg-gray-800 rounded-xl mt-2">
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B9dpdumS92dgliIMJ-F9X11gRatKnbBK0IyJAd1GiQ&s"
                      alt=""
                    />
                    <h1 className="text-xs text-gray-400 font-bold">Laliga</h1>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://icons.veryicon.com/png/128/media/music-player-related-icons/equalizer-26.png"
                      alt=""
                    />
                    <img
                      className="w-4 h-4 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-star-30-100158.png?f=webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-2 md:px-5 mt-4">
                  <h1 className="text-xs text-white font-bold">Today 03.00</h1>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/sHiSmLm_rA0BOC5MfrNt8A_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Girona</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <div className="flex justify-between items-center px-3 mt-2">
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-7 h-7"
                      src="https://ssl.gstatic.com/onebox/media/sports/logos/pk-hNCNpGM_JDoHHvLVF-Q_48x48.png"
                      alt=""
                    />
                    <h1 className="text-sm text-white font-bold">Osasuna</h1>
                  </div>
                  <button className="w-8 h-6 rounded-lg text-xs font-extrabold border border-sky-500">
                    2
                  </button>
                </div>
                <p className="text-sm font-bold text-white px-3 mt-3">1 * 2</p>
                <div className="flex justify-between items-center px-3 gap-2">
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">1</p>
                      <p className="text-xs font-extrabold text-white">1.2</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">draw</p>
                      <p className="text-xs font-extrabold text-white">7.25</p>
                    </div>
                  </div>
                  <div className="w-full h-9 bg-gray-700 mt-3 rounded-md">
                    <div className="flex justify-between items-center px-3 mt-2.5">
                      <p className="text-xs font-extrabold">2</p>
                      <p className="text-xs font-extrabold text-white">50.0</p>
                    </div>
                  </div>
                  <div className="w-10 h-9 bg-gray-700 mt-3 rounded-md">
                    <svg
                      className="w-5 h-5 mx-2 mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="bg-black shadow-md shadow-black/5 lg:col-span-2">
        
        <div className="flex justify-center items-center gap-3 mt-10">
              <img
                className="w-12 me-2"
                src="https://i.postimg.cc/vBsFKvgd/Screenshot-from-2024-05-27-14-07-35.png"
                alt=""
              />
              <h1 className="text-white font-extrabold text-xl">
                Top Outright
              </h1>
            </div>
            <div className="text-center mt-5 h-16 w-11/12 mx-5 bg-gray-900">
              <div className="flex justify-between items-center w-72 mx-auto ">
                <img
                  className="w-12 h-12 rounded-full mt-2"
                  src="https://i.postimg.cc/h4ZZzrDP/Screenshot-from-2024-05-27-14-09-07.png"
                  alt=""
                />
                <img
                  className="w-12 h-12 rounded-full mt-2"
                  src="https://i.postimg.cc/T30txq46/Screenshot-from-2024-05-27-14-11-03.png"
                  alt=""
                />
                <img
                  className="w-12 h-12 rounded-full mt-2"
                  src="https://i.postimg.cc/C1qCRjmd/Screenshot-from-2024-05-27-14-11-55.png"
                  alt=""
                />
                <img
                  className="w-12 h-12 rounded-full mt-3"
                  src="https://i.postimg.cc/fRVVWMHR/Screenshot-from-2024-05-27-14-15-42.png"
                  alt=""
                />
              </div>
            </div>
            <p className="font-bold text-gray-400 mx-10 mt-3 text-xs">
              June 3, 10.00
            </p>
            <h1 className="text-xs font-bold text-white mx-10 mt-3">
              UEFA EURO -<span className="text-xs font-normal">Winner</span>
            </h1>
            <div className="text-center mt-10 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">England</p>
                  <p className="text-white text-xs font-bold mt-1">3.95</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">France</p>
                  <p className="text-white text-xs font-bold mt-1">4.89</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">Germany</p>
                  <p className="text-white text-xs font-bold mt-1">6.2</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">Spain</p>
                  <p className="text-white text-xs font-bold mt-1">8.85</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">Portugal</p>
                  <p className="text-white text-xs font-bold mt-1">8.85</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">Italy</p>
                  <p className="text-white text-xs font-bold mt-1">15.2</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">Belgium</p>
                  <p className="text-white text-xs font-bold mt-1">16.8</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">
                    Netherland
                  </p>
                  <p className="text-white text-xs font-bold mt-1">23.2</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-3 h-7 w-10/12 mx-10 bg-gray-700 rounded-lg">
              <a href="/">
                <div className="flex justify-between px-3 items-center">
                  <p className="text-white text-xs font-bold mt-1">Croatia</p>
                  <p className="text-white text-xs font-bold mt-1">40.0</p>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center px-12 mt-20">
              <button
                type="button"
                class="text-blue-700 bg-gray-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-left-fill w-3 h-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
              <button
                type="button"
                class="text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go to Event
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-right-fill w-3 h-3 mx-1"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    fill="white"
                  ></path>{" "}
                </svg>
              </button>
              <button
                type="button"
                class="text-blue-700 bg-gray-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-right-fill w-3 h-3"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-3 mx-auto mt-10">
          <h1 className="font-bold text-gray-500 text-xs">
            O D D S<span className="mx-3">F O R M A T</span>
          </h1>
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="bg-gray-800 w-36 rounded-full">
                <summary className="text-xs font-semibold">European</summary>
                <ul className="p-2">
                  <li className="text-xs font-semibold">
                    <a>American</a>
                  </li>
                  <li className="text-xs font-semibold">
                    <a>Hong Kong</a>
                  </li>
                  <li className="text-xs font-semibold">
                    <a>Indonesian</a>
                  </li>
                  <li className="text-xs font-semibold">
                    <a>Fractional</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sports;
