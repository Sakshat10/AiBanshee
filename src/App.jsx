import Navbar from "./Components/Navbar";
import Footer from "./Sections/Footer";
import { Guide } from "./Pages/Guide";
import Homepage from "./Pages/Homepage";
// import Staking from "./Pages/Staking";
import { Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <div className="bg-custom bg-[#000] text-white overflow-hidden relative h-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/guide" element={<Guide />}></Route>
        {/* <Route path="/staking" element={<Staking />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
};
