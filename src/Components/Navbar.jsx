import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ConnectButton from "./ConnectButton";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { referralRoute } from "../utils/RecoilState/ReferralRoute";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const referral = useRecoilValue(referralRoute);
  const handleClick = () => {
    setOpen((open) => !open);
  };
  const { pathname } = useLocation();

  const homelink = referral !== "" || referral ? `/?referral=${referral}` : "/";

  return (
    <div className="h-[4.2rem] z-[100] w-full fixed top-0 bg-transparent backdrop-blur-sm ">
      <nav className="flex h-[100%] w-full justify-between  items-center overflow-hidden">
        <div className="relative font-bold text-white lg:pl-8 r-4 md:static">
          <NavLink to={homelink}>
            <img
              className="lg:h-[220px] lg:w-[250px] w-[200px] h-[100px]"
              src="Images/logo.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <ul
          className={
            open
              ? " flex flex-col pt-[8rem] pl-8 gap-14 text-[white] z-10  absolute right-0 top-0 h-[100vh] w-[100vw] bg-[#03031b] z-100 "
              : "hidden lg:flex justify-between items-center gap-4 md:gap-16 relative z-20 lg:gap-20 pr-8 text-white "
          }
        >
          <li className="relative">
            {pathname === "/" && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="tab-bg"
                className="absolute inset-0 left-0 hidden lg:block gradient "
                style={{ borderRadius: 999 }}
              ></motion.div>
            )}
            <NavLink
              to={homelink}
              onClick={() => {
                setOpen(false);
              }}
              className={
                "p-2 block cursor-pointer z-10 relative lg:!w-[5rem] lg:text-center w-full  rounded-full"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="relative">
            {pathname === "/guide" && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="tab-bg"
                className="absolute inset-0 left-0 hidden lg:block gradient "
                style={{ borderRadius: 999 }}
              ></motion.div>
            )}
            <NavLink
              to={"/guide"}
              onClick={() => setOpen(false)}
              className={
                "p-2 block lg:!w-[5rem] lg:text-center w-full z-10  relative  rounded-full"
              }
            >
              Guide
            </NavLink>
          </li>
          {/* <li className="relative">
            {pathname === "/staking" && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="tab-bg"
                className="absolute inset-0 left-0 hidden lg:block gradient "
                style={{ borderRadius: 999 }}
              ></motion.div>
            )}
            <NavLink
              to={"/staking"}
              onClick={() => setOpen(false)}
              className={
                "p-2 block lg:!w-[5rem] lg:text-center w-full z-10  relative  rounded-full"
              }
            >
              Staking
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={"https://aibanshee.gitbook.io/lightpaper/"}
              target="_blank"
              onClick={() => setOpen(false)}
              className={
                "p-2 block lg:!w-fit w-full  hover:gradient rounded-full "
              }
            >
              WhitePaper
            </NavLink>
          </li>

          <ConnectButton />
        </ul>
        <div className="absolute z-40 flex items-center h-[3rem] w-[3rem] justify-center pr-4 right-2 lg:hidden ">
          <NavLink to="#" className="text-white " onClick={handleClick}>
            {open ? (
              <IoClose className="text-[1.4rem]" />
            ) : (
              <GiHamburgerMenu className="text-[1.4rem]" />
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
