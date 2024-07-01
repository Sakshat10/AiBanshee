import { useState } from "react";
// import CouponTab from "./CouponTab";
// import BuyTab from "./BuyTab";
import StakingTab from "./Staking/StakingTab";
import ClaimTab from "./Staking/ClaimTab";
import BalanceTab from "./BalanceTab";
import TokenFormHeader from "./TokenFormHeader";

function TokenForm() {
  const [activeTab, setActiveTab] = useState("stakingTab");

  return (
    <div className="flex flex-col justify-start bg-transparent w-[90vw]  sm:w-[60vw] lg:min-w-[30vw] lg:max-w-[30rem]  items-center border-2 rounded-xl border-red-500 backdrop-blur-md ">
      <TokenFormHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="w-full h-full px-4 py-4 md:px-8 md:py-8 lg:py-4 ">
        {activeTab === "stakingTab" ? (
          // <BuyTab />
          <StakingTab />
        ) : activeTab === "stakeDetails" ? (
          // <CouponTab />
          <ClaimTab />
        ) : (
          <BalanceTab />
        )}
      </div>
    </div>
  );
}

export default TokenForm;
