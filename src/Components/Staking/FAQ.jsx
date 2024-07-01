import { useState } from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import ResizablePanel from "../ResizablePanel";

export function FAQ() {
  const [openedFaqIndex, setOpenedFaqIndex] = useState(null);

  const milestone = [
    {
      quarter: "When can I claim my purchased tokens?",
      tasks: [
        "Ans: With the announcement of the token listing, we will specify the date and time when you can claim your purchased tokens.",
      ],
    },
    {
      quarter: "Can I collect all my tokens during the token launch?",
      tasks: [
        "Ans: No, your tokens will be released according to a vesting schedule.",
      ],
    },
    {
      quarter: "How is the vesting schedule structured?",
      tasks: [
        "Ans: The vesting schedule varies based on the phase of token purchase:",
        "For Phase 1 purchases: 60% of the tokens will be available at TGE (Token Generation Event), with the remaining 10% released monthly.",
        "For Phase 2 purchases: 70% of the tokens will be available at TGE, with the remaining 10% released monthly.",
        "For Phase 3 purchases: 80% of the tokens will be available at TGE, with the remaining 10% released monthly.",
      ],
    },
    {
      quarter: "What is staking and how can I participate?",
      tasks: [
        "Ans: Staking is a process where users lock up their tokens for certain period of time and earn rewards in return. To participate in staking, you need to hold the required amount of tokens and lock them in a staking contract",
      ],
    },
    {
      quarter: "What staking options are available?",
      tasks: [
        "Ans: We offer two staking options: a 1-month option and a 3-month option. Each option has its own terms and conditions, including the duration of the staking period and the maximum tokens that can be locked.",
      ],
    },
    {
      quarter: "What are the terms for the 1-month staking option?",
      tasks: [
        "Ans: The terms for the 1-month staking option are as follows:",
        "Maximum Tokens to be Locked: 25 Million BANSHAI",
        "Annual Percentage Yield (APY): 20%",
      ],
    },
    {
      quarter: "What are the conditions for the 3-month staking option?",
      tasks: [
        "Ans: The terms for the 3-month staking option are as follows:",
        "Maximum Tokens to be Locked: 75 Million BANSHAI",
        "Annual Percentage Yield (APY): 35%",
      ],
    },
    // {
    //   quarter: " How are staking rewards calculated?",
    //   tasks: [
    //     "Ans: Staking rewards are calculated based on factors such as the amount of tokens staked, the duration of the staking period, and the compounding frequency (monthly, in this case).",
    //   ],
    // },
    {
      quarter: " Can I unstake my tokens before the end of the staking period?",
      tasks: [
        "Ans: No, You can only withdraw your token after completion of staking period.",
      ],
    },
    {
      quarter: "Can I join multiple staking pools?",
      tasks: [
        "Ans: Yes, but once the maximum limit is reached for a particular staking option, joining in staking pool will be impossible",
      ],
    },
    {
      quarter:
        "Where can I find more information about staking and your project's staking system?",
      tasks: [
        "Ans: For more information about staking and our project's staking system, please refer to our whitepaper, or reach out to our community support channels.",
      ],
    },
  ];

  const handleIconCLick = (idx) => {
    const currnetIdx = idx == openedFaqIndex ? null : idx;
    setOpenedFaqIndex(currnetIdx);
  };

  const FAQs = milestone.map((_milestone, idx) => (
    <div key={idx} className="relative pb-2">
      <div>
        <div
          onClick={() => handleIconCLick(idx)}
          style={{ height: openedFaqIndex === idx ? "auto" : "fit-content" }}
          className="cursor-pointer px-4 border-[#ff0000] border-[2px] bg-transparent flex flex-col justify-center py-4"
        >
          <div className="flex justify-between gap-2">
            <h1 className="w-full font-semibold md:text-[1.1rem] text-[1rem]">
              {_milestone.quarter}
            </h1>
            <div className="w-8">
              <IoIosArrowDropdown style={{ width: "2rem" }} />
            </div>
          </div>

          {openedFaqIndex === idx && (
            <>
              <hr className="mt-2 w-[100%] border-[#ff0000]"></hr>
              <div className="mt-4 text-gray-300 font-BebasNeue">
                <ResizablePanel>
                  <ul>
                    {_milestone.tasks.map((task, index) => {
                      const splitTask = task.split(":");
                      const heading = splitTask[0];
                      const description = splitTask.slice(1).join(":");
                      return (
                        <li key={index}>
                          <span style={{ color: "red" }}>{heading}</span>:{" "}
                          {description}
                        </li>
                      );
                    })}
                  </ul>
                </ResizablePanel>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section className="h-auto">
      <div id="faq" className="p-8 py-4 lg:px-36">
        <h1 className="font-BebasNeue text-center font-[400] pb-2 text-[2rem]">
          FAQ
        </h1>
        <div className="pt-8 text-white">{FAQs}</div>
      </div>
    </section>
  );
}
