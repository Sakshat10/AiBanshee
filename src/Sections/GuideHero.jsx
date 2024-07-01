import img from "/Images/HeroImage.jpg";
import vdo from "/Images/homeVideo.mp4";

import { TextGenerateEffect } from "../Components/TextGenerate";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { referralRoute } from "../utils/RecoilState/ReferralRoute";
export const GuideHero = () => {
  const referral = useRecoilValue(referralRoute);

  const homelink = referral !== "" || referral ? `/?referral=${referral}` : "/";

  return (
    <section className="relative min-h-screen py-8 pt-8">
      <video
        id="background-video"
        className="absolute top-0 left-0 w-full h-[100%] lg:h-screen object-cover z-[1] brightness-[0.5]"
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
      <div className=" min-h-[90vh] px-4 flex relative text-center z-[1] flex-col items-center justify-center gap-8">
        <div className=" text-[2rem] pt-[4rem] lg:pt-0 md:text-[3.5rem] min-h-[15vh] font-bold text">
          {" "}
          <Typewriter
            options={{
              strings: ["AIBanshee a decentralized AI", "Welcome to AIBanshee"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* <p className="text-white w-[60%] md:text-[1.2rem]">
          Welcome to the AIBanshee Token Purchase Guide! The AIBanshee token, a
          BEP-20 token powering our innovative AI platform, is available for
          purchase using BNB and USDT. We're thrilled to introduce a referral
          program and an exclusive partnership opportunity for crypto
          enthusiasts and influencers. Here's a detailed guide on how to acquire
          AIBanshee tokens:
        </p> */}
        <div className="text-white w-[100%] md:w-[80%]  lg:w-[60%] font-semibold ">
          <TextGenerateEffect words="Your gateway to decentralized AI! We're thrilled to announce that we've successfully completed the presale for our AIBanshee token. AIBanshee is a BEP-20 token that fuels our cutting-edge AI platform, driving innovation and efficiency." />

          <TextGenerateEffect
            words="
As we move forward, our next step is listing AIBanshee on exchanges. Stay tuned as we'll be announcing the listing date very soon! Get ready to be part of the future of AI with AIBanshee token."
          />
        </div>
        {/* <Link
          to={homelink}
          className="rounded-md hover:!rounded-md btn41-43 btn-43 w-fit overflow-hidden disabled:cursor-not-allowed text-[1.2rem] shadow-md "
        >
          Buy Tokens
        </Link> */}
      </div>
    </section>
  );
};
