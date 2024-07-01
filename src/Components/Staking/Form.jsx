import { useState } from "react";
import ClaimTab from "./ClaimTab";
import StakingTab from "./StakingTab";
import { motion } from "framer-motion";

export default function Form() {
  const [activeTab, setActiveTab] = useState("stakingTab");

  return (
    <div className="flex mx-auto  mt-20 md:mt-0 flex-col justify-start bg-transparent w-[90vw]  sm:w-[60vw] lg:min-w-[30vw] lg:max-w-[30rem]   items-center border-2 rounded-xl border-red-500 backdrop-blur-md ">
      <div className="flex justify-around w-full py-2 divide-x-2 divide-red-500 select-none flex-nowrap">
        <div
          className={`w-full py-2  hover:cursor-pointer flex justify-center items-center relative duration-300`}
          onClick={() => {
            setActiveTab("stakingTab");
          }}
        >
          <div className="md:w-[80%] w-[90%]  relative flex justify-center items-center py-2">
            {" "}
            {activeTab === "stakingTab" && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="token-tab"
                className="absolute inset-0 left-0 gradient "
                style={{ borderRadius: "25px" }}
              ></motion.div>
            )}
            <span className="z-[3]">Staking</span>{" "}
          </div>
        </div>
        <div
          className={`w-full py-2  hover:cursor-pointer flex justify-center items-center  duration-300`}
          onClick={() => {
            setActiveTab("claimTab");
          }}
        >
          <div className="md:w-[80%] w-[90%]  relative flex justify-center items-center py-2">
            {activeTab === "claimTab" && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="token-tab"
                className="absolute inset-0 left-0 gradient "
                style={{ borderRadius: "25px" }}
              ></motion.div>
            )}
            <span className="z-[3]">Claim</span>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-4 md:px-8 md:py-8 lg:py-4 ">
        {activeTab === "stakingTab" ? (
          <StakingTab />
        ) : activeTab === "claimTab" ? (
          <ClaimTab />
        ) : null}
      </div>
    </div>
  );
}
