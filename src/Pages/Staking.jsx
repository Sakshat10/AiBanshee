import { Toaster } from "react-hot-toast";
import Hero from "../Components/Staking/Hero";
import { FAQ } from "../Components/Staking/FAQ";
import { Meteors } from "../Components/Meteors";

export default function Staking() {
  return (
    <div>
      <Meteors className={"fixed top-0"} number={80} />

      <Toaster position="top-center" />
      <Hero />
      <div className="my-8 md:my-16">
        <FAQ />
      </div>
    </div>
  );
}
