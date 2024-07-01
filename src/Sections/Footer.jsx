import Lottie from "react-lottie";
import animationData from "../Lottie/aiBansheeFooter.json";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";

const Footer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <footer className="bg-black pt-12 relative z-[10] ">
      <figure
        aria-hidden
        className="bg-[#540c26] w-32 h-32 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px] absolute z-[-2] -top-16 sm:top-0 left-3/4"
      />
      <div className="w-full max-w-screen-xl py-6 mx-auto md:px-4 lg:py-8">
        <div className="flex flex-col md:flex-row  md:flex gap-[2rem] md:justify-between">
          <div className="mb-6 md:mr-8 lg:mr-0  md:mb-0 w-[90vw] md:w-[40vw]  ">
            <Lottie options={defaultOptions} height={200} width={350} />
          </div>
          <div className="flex md:w-[60vw] px-4  justify-between lg:justify-end gap-[2rem] md:gap-[3rem]">
            <div className="flex flex-col justify-between ">
              <h1>
                Email for Clients:{" "}
                <a href="mailto:client@aibanshee.com">client@aibanshee.com</a>
              </h1>

              <h1>
                Email for Business:{" "}
                <a href="mailto:contact@aibanshee.com">contact@aibanshee.com</a>
              </h1>

              <h1>
                Email for issues:{" "}
                <a href="mailto:support@aibanshee.com">support@aibanshee.com</a>
              </h1>

              <h1>
                Telegram:{" "}
                <a href="https://t.me/AiBanshee" target="_blank">
                  AIBanshee
                </a>
              </h1>
            </div>

            <div className="flex flex-col justify-start gap-[2rem]">
              <h1 className="text-sm font-bold uppercase ">Legal</h1>

              <a
                href="https://aibanshee.gitbook.io/lightpaper/"
                target="_blank"
                className="hover:text-white"
              >
                <h1>Privacy Policy</h1>
              </a>

              <a href="#" className="hover:text-white">
                <h1> Terms &amp; Conditions </h1>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 md:ml-10">
              © 2024 AIBanshee™ . All Rights Reserved.
            </span>
            <a href="https://twitter.com/AIBanshee" target="_blank">
              <FiTwitter style={{ height: "1.3rem", width: "1.3rem" }} />
            </a>
            <a href="https://www.instagram.com/aibanshee_/" target="_blank">
              <FaInstagram style={{ height: "1.3rem", width: "1.3rem" }} />
            </a>
            <a href="https://t.me/AiBanshee" target="_blank" className="">
              <PiTelegramLogoDuotone
                style={{ height: "1.3rem", width: "1.3rem" }}
              />
            </a>
          </div>

          <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
