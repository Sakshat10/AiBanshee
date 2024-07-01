import ConnectButton from "../Components/ConnectButton";
import CountDown from "../Components/CountDown";
import TokenForm from "../Components/TokenForm";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import vdo from "/Images/homeVideo.mp4";
import img from "/Images/HeroImage.jpg";
import { Partnership } from "./Partnership";
export default function Home() {
  const utcTimestamp = Date.UTC(2024, 4, 18, 16, 0, 0);
  const [isCopied, setIsCopied] = useState(false);
  // Convert UTC timestamp to local time
  const localDate = new Date(utcTimestamp);
  const localDateString = localDate.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const copyTokenAddress = () => {
    const tokenAddress = "0xAB2bf23E54d40b5df09C3B5219c7280d4c6b3c49";
    navigator.clipboard.writeText(tokenAddress);
    setIsCopied(true);
    // Reset the copied state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className=" relative py-16 pb-4   lg:flex justify-center lg:px-6  items-center min-h-[100vh] ">
      <div>
        <video
          id="background-video"
          className="absolute top-0 left-0 w-full h-[100%] lg:h-screen object-cover z-[1] brightness-[0.6]"
          autoPlay
          muted
          loop
        >
          <source src={vdo} type="video/mp4" />
          <img
            id="background-video"
            className="absolute top-0 left-0 w-full h-screen object-cover  z-[1] brightness-[55%]"
            src={img}
          ></img>
        </video>
        <div className="flex flex-col w-[95vw] md:pt-16 lg:pt-4 md:px-8 lg:px-0 ">
          <div className="relative flex flex-col  lg:justify-between  z-[1] lg:pt-0 lg:pl-16 lg:flex-row poppins">
            <div className="lg:w-[40%]  md:pl-0 pl-4    min-h-[45vh]  lg:min-h-[60vh] py-4 flex flex-col  gap-2">
              <div className=" lg:hidden">{/* <CountDown /> */}</div>
              <div>
                <h1 className="text-[2.2rem] md:text-[3rem] font-semibold">
                  AI{" "}
                  <span className="text-[2.2rem] md:text-[3rem] font-semibold text-white">
                    Banshee
                  </span>
                </h1>

                <h1 className="text-left text-[1.5rem] md:text-[2.2rem]">
                  Future of Decentralized AI
                </h1>
              </div>
              <div className="lg:flex gap-2 h-[4rem] hidden  ">
                <div className="hidden sm:block">
                  <a
                    href="https://aibanshee.com/product/"
                    target="_blank"
                    className="rounded-md hover:!rounded-md btn41-43 btn-43 w-fit overflow-hidden disabled:cursor-not-allowed !font-bold !px-3"
                  >
                    Check Beta Product
                  </a>
                </div>
              </div>
              <div>
                <div className="pr-8 text-[0.9rem] md:text-[1.3rem] lg:text-[1.2rem] md:pr-0">
                  <h1 className="text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] pb-2">
                    Pancakeswap Listing date
                  </h1>
                  <CountDown />
                  <div className="flex gap-2 pt-2">
                    <h1 className="text-[0.7rem] md:text-[1.4rem] text-wrap lg:text-[1.1rem] font-semibold">
                      0xAB2bf23E54d40b5df09C3B5219c7280d4c6b3c49
                    </h1>
                    <button className="text-red-300" onClick={copyTokenAddress}>
                      <FiCopy></FiCopy>
                    </button>
                    {isCopied && (
                      <p className="lg:text-[1rem] hidden lg:block font-light">
                        Copied!
                      </p>
                    )}
                  </div>
                  {isCopied && (
                    <p className="text-[1rem] lg:hidden block font-light">
                      Copied!
                    </p>
                  )}
                </div>

                <div className="pt-4 sm:hidden">
                  <ConnectButton />
                </div>
              </div>
            </div>
            <div className="flex items-center  justify-center lg:py-8 w-full pl-4 sm:w-[90vw] lg:w-[50%]">
              <TokenForm />
            </div>
          </div>
        </div>
        <div className=" w-[100%]">
          <Partnership />
        </div>
      </div>
    </div>
  );
}
