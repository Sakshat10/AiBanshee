import Lottie from "react-lottie";
import staking from "../../Lottie/staking.json";
export const Membership = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: staking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="relative grid items-center w-full grid-cols-1 gap-16 pt-8 pb-8 md:pt-12 z-2 lg:grid-cols-2 lg:gap-8 ">
      <div className="flex flex-col justify-center gap-6 px-10 md:gap-4 sm:pl-24 sm:pr-16 ">
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] font-semibold">
            Staking
          </h1>
          <p>
            Staking will be available in a limited form. Starting from the Token
            Generation Event (TGE) and listing, investors can participate in
            this system!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[1.3rem] font-semibold md:text-[1.6rem]">
            1-Month Option (Terms):
          </h1>

          <h1 className="font-semibold ">
            Maximum Tokens to be Locked:{" "}
            <span className="text-white ">25 Million BANSHAI</span>
          </h1>
          <h1 className="font-semibold">
            Annual Percentage Yield (APY):{" "}
            <span className="text-white ">20%</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[1.3rem] font-semibold md:text-[1.6rem]">
            3-Month Option (Conditions):
          </h1>
          <h1 className="font-semibold ">
            Maximum Tokens to be Locked:{" "}
            <span className="text-white ">75 Million BANSHAI</span>
          </h1>
          <h1 className="font-semibold">
            Annual Percentage Yield (APY):{" "}
            <span className="text-white ">35%</span>
          </h1>
        </div>
        <p>
          Once the maximum limit is reached for a particular staking option,
          joining in staking pool will be impossible!
        </p>
      </div>
      {/* <div><Form /></div> */}
      <div className="mb-6 md:mr-8 lg:mr-0  md:mb-0 w-[90vw] md:w-[40vw] hidden lg:block  ">
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
};
