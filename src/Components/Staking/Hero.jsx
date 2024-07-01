import vdo from "/Images/homeVideo.mp4";
import img from "/Images/HeroImage.jpg";

import { Membership } from "./Membership";

export default function Hero() {
  return (
    <div className="relative items-center min-h-[100vh] justify-center pt-12 pb-4 lg:flex lg:px-6">
      <div>
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

        <div className="relative  z-[20]">
          <Membership />
        </div>
      </div>
    </div>
  );
}
