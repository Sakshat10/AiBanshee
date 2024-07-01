import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-[2.5rem] lg:text-[3rem]">
        Tokenomics
      </h1>
      <div className="lg:gap-[10rem] gap-[3rem] container22 ">
        <div className="lg:w-[30vw]  ">
          <Pie
            data={{
              labels: [
                "Presale",
                "Staking",
                "Liquidity/MM/CEX",
                "Burn",
                "AirDrop",
              ],
              datasets: [
                {
                  label: "% ",
                  data: [20, 10, 50, 10, 10],
                  backgroundColor: [
                    "rgba(200,56,22)",
                    "rgba(280 28 84)",
                    "rgb(90,29,54)",
                    "rgb(110,20,1)",
                    "rgb(227,40,24)",
                  ],
                  borderColor: ["rgba(0,0,0)"],
                  borderWidth: 2,
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        </div>
        <div className="card md:w-[80vw] lg:w-[25vw] group">
          <figure
            aria-hidden
            className="bg-[#540c26] w-32 h-32 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px] absolute -top-16 sm:top-0 left-3/4"
          />
          <div className=" box">
            <div className="py-8 content">
              <p>
                <span className="text-[1rem] font-semibold text-red-500">
                  Total supply:
                </span>
                <span> </span> 500,000,000
              </p>
              <br />
              <p>
                <span className="text-[1rem] font-semibold text-red-500">
                  Presale:
                </span>
                <span> </span>20%
              </p>
              <br />
              <p>
                {" "}
                <span className="text-[1rem] font-semibold text-red-500">
                  Liquidity/MM/CEX:
                </span>
                <span> </span>50%
              </p>
              <br />
              <p>
                {" "}
                <span className="text-[1rem] font-semibold text-red-500">
                  Burn:
                </span>
                <span> </span> 10%
              </p>
              <br />
              <p>
                {" "}
                <span className="text-[1rem] font-semibold text-red-500">
                  Airdrop:
                </span>
                <span> </span>10%
              </p>
              <br />
              <p>
                {" "}
                <span className="text-[1rem] font-semibold text-red-500">
                  Staking:
                </span>
                <span> </span>10%
              </p>
              <a
                href="https://aibanshee.gitbook.io/lightpaper/all-in-one"
                target="_blank"
                className="!bg-red-700 !hover:bg-white px-[8px] py-[5px] mt-2"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
