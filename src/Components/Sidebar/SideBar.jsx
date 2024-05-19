import { NavLink } from "react-router-dom";
import { FaBars, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { AiFillHeart} from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
 
  {
    name: "BLAZE ORIGINALS",
    subRoutes: [
      {
        
        name: "Crash",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Crash2",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Double",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Fortune Double",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Slide",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Mines",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Dice",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Plinko",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Limbo",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Tower",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Fruit Slice",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Coin Flip",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    name: "CASINO",
    subRoutes: [
      {
        
        name: "Favorite",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Slots",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Live Casino",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Fortune Games",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Games Shows",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Table Games",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Bonus Buy",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Providers",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Spinner",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Challenges",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    name: "SPORTS",
    subRoutes: [
      {
        
        name: "My Bits",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Live Events",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Upcoming Events",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Brasileiro Series A",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "La Liga",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Premier League",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "UEFA Champion League",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Italy Seria A",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Germany Bundesliga",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "France Ligue 1",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Soccer",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "FIFA",
        icon: <FaMoneyBill />,
      },
      {
        
        name: "American Football",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Badminton",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Baseball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Basketball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Biathlon",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Bowls",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Counterstrike",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Cricket",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Cycling",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Darts",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Formula 1",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Futsal",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Golf",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Handball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Ice Hockey",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "League of Legend",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "MLB",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "MMA",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "NFL",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Motorcycle Racing",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Politics & Entertainment",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Rainbow Six",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Rugby",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Skl Jumping",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Snooker",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Table Tennis",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Tennis",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Volleyball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Waterpolo",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/",
    name: "Live Support",
    icon: <FaUser />,
  },
  {
    path: "/",
    name: "Promotions",
    icon: <MdMessage />,
  },
  {
    path: "/",
    name: "Refer A Friend",
    icon: <BiAnalyse />,
  },
  {
    path: "/",
    name: "Sponsorship",
    icon: <AiFillHeart />,
  },
  {
    path: "/",
    name: "FAQ",
    icon: <AiFillHeart />,
  },
  {
    path: "/",
    name: "Blog",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar ${isOpen ? 'show' : 'hide-on-small'}`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    className="bg-black"
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main className="w-full px-40 mx-auto">{children}</main>
      </div>
    </>
  );
};

export default SideBar;
