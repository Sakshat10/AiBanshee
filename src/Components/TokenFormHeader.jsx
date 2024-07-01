import { motion } from "framer-motion";

export default function TokenFormHeader({ activeTab, setActiveTab }) {
  return (
    <div className="flex select-none justify-around w-full py-2 divide-x-2  divide-red-500 h-fit flex-nowrap">
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
              className="absolute inset-0 left-0  gradient "
              style={{ borderRadius: "25px" }}
            ></motion.div>
          )}
          <span className="z-[2]">Staking</span>{" "}
        </div>
      </div>
      <div
        className={`w-full py-2  hover:cursor-pointer flex justify-center items-center  duration-300`}
        onClick={() => {
          setActiveTab("stakeDetails");
        }}
      >
        <div className="md:w-[80%] w-[90%]  relative flex justify-center items-center py-2">
          {activeTab === "stakeDetails" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="token-tab"
              className="absolute inset-0 left-0  gradient "
              style={{ borderRadius: "25px" }}
            ></motion.div>
          )}
          <span className="z-[2]">Stake details</span>
        </div>
      </div>
      <div
        className={`w-full py-2  hover:cursor-pointer flex justify-center items-center relative duration-300`}
        onClick={() => {
          setActiveTab("balanceTab");
        }}
      >
        <div className="md:w-[80%] w-[90%]  relative flex justify-center items-center py-2">
          {activeTab === "balanceTab" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="token-tab"
              className="absolute inset-0 left-0 gradient "
              style={{ borderRadius: "25px" }}
            ></motion.div>
          )}
          <span className="z-[2]">Vesting</span>{" "}
        </div>
      </div>
    </div>
  );
}
