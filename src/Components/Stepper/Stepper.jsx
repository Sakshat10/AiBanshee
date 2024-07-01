import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { ParaImage } from "./ParaImage";

const Stepper = () => {
  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
  ];
  const words = [
    "Enter the token panel, which you will find on the home page of the official domain https://aibanshee.com/ or click directly here: https://aibanshee.com/",
    "Log into your wallet by clicking on connect wallet button and make sure you are on Binance blockchain",
    "After login you can select the crypto you want to use to purchase.",
    `Enter the Amount: Specify the amount you wish to buy.
    Initiate the Purchase: Click on the "Buy" button to proceed with your transaction.`,
    `For USDT purchases, you'll need to approve the cap request. Once approved, allow a few seconds for your purchase transaction to automatically initiate. Keep an eye on the transaction status to track the progress of your purchase. You'll receive a notification or a popup message confirming the successful completion of your purchase.
    Follow a similar process for BNB payments to ensure a smooth and secure transaction.`,
    `After making a purchase of over $100, you're eligible to create your unique referral link. Visit the Referral section on our platform, enter your name or code in the "Generate Referral Link" section, and complete the transaction. Congratulations, your referral link is set! Now, start your promotional activities. Share this link, and as others make purchases using it, your earnings will accumulate`,
    "You can review your purchase details in the vesting section. Your tokens will be vested once the pre-sale ends, meaning they will be locked in vesting until then.",
  ];
  const totalSteps = steps.length;
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep === totalSteps ? 1 : prevStep + 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep === 1 ? totalSteps : prevStep - 1));
  };

  return (
    <div className="flex w-screen lg:items-center   lg:min-h-[100vh] md:gap-8 pt-16 lg:pt-32  flex-col">
      <div className="flex flex-col lg:justify-between relative  justify-center items-end lg:items-start   lg:gap-4  lg:flex-row w-[95vw] h-fit  lg:w-screen lg:pr-8  ">
        <figure
          aria-hidden
          className="bg-[#540c26] w-32 h-32 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px] absolute -top-16 sm:top-0 left-3/4"
        />
        {steps?.map((step, i) => (
          <div
            onClick={() => {
              setCurrentStep(i + 1);
            }}
            key={i}
            className={`hover:cursor-pointer   step-item ${
              currentStep === i + 1 && "active"
            } ${(i + 1 < currentStep || complete) && "complete"}   `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="hidden text-white lg:flex">{step}</p>
          </div>
        ))}

        {!complete && (
          <div>
            <button
              className="rounded-md hover:!rounded-md btn41-43 btn-43 !hidden lg:!block w-fit overflow-hidden  text-[1rem] shadow-md  "
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className="">
        <div className="flex items-center justify-between w-full px-4 lg:hidden">
          <span className="text-[1.3rem]  font-bold  lg:hidden text-left ">
            Step {currentStep}
          </span>
          {!complete && (
            <button
              className="rounded-md hover:!rounded-md btn41-43 btn-43   w-fit overflow-hidden  text-[1rem] shadow-md  "
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
        </div>
        <ParaImage index={currentStep} words={words[currentStep - 1]} />
      </div>
      <figure
        aria-hidden
        className="bg-[#C81D5B] w-36 h-36 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px]  absolute  -bottom-12 sm:-bottom-6 left-0"
      ></figure>
    </div>
  );
};

export default Stepper;
