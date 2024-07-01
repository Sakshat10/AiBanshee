import { Meteors } from "../Components/Meteors";
import { Toaster } from "react-hot-toast";
import Home from "../Sections/Home";
import { Features } from "../Sections/Features";
import Tokenomics from "../Components/Tokenomics";
import Timeline from "../Sections/Timeline";
import { AITrend } from "../Sections/AITrend";
import Business from "../Sections/Business";
import { Sponsors } from "../Sections/Sponsors";
import { Roadmap } from "../Sections/Roadmap";

export default function Homepage() {
  return (
    <>
      <Meteors className={"fixed top-0"} number={80} />
      <Toaster position="top-center" />
      <Home />
      <Features />
      <Tokenomics />
      <Roadmap />
      <div className="lg:hidden">
        <Sponsors />
      </div>
      <Timeline />
      <AITrend />
      <Business />
    </>
  );
}
