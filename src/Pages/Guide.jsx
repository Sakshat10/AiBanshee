import { Meteors } from "../Components/Meteors";
import { FAQ } from "../Components/Staking/FAQ";
import { Membership } from "../Components/Staking/Membership";

import { GuideHero } from "../Sections/GuideHero";
// import Referral from "../Sections/Referral";
export const Guide = () => {
  return (
    <div className="relative h-full overflow-hidden text-white bg-black">
      <GuideHero />
      <Meteors className={"fixed top-0 "} number={80} />
      <Membership />
      <FAQ />
      {/* <Referral /> */}
    </div>
  );
};
