import { useState } from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import ResizablePanel from "../Components/ResizablePanel";

export function Roadmap() {
  const [openedFaqIndex, setOpenedFaqIndex] = useState(null);

  const milestone = [
    {
      quarter: "Our plans for Q1 2024",
      tasks: [
        "Whitepaper: Finalize and publish the project's whitepaper.",
        "Beta Version 1.0 Launch: Release the first beta version of the AIBanshee platform.",
        "Business Model: Define and solidify the project's business model.",
        "Token: Develop and deploy the AIBanshee token.",
        "Marketing: Initiate marketing campaigns to raise awareness.",
        "Joining 'Microsoft for Startups Founders Hub' Program: Benefit from resources and networking opportunities.",
        "Boarding Matrix Capital: Secure funding and support from Matrix Capital.",
        "Presale: Conduct a presale of the project's tokens.",
        "DEX Listing: List the project's token on decentralized exchanges.",
      ],
    },
    {
      quarter: "Our plans for Q2 2024",
      tasks: [
        "Collaborations: Establish partnerships with other projects and organizations.",
        "Use of Microsoft Azure OpenAI Service: Integrate Microsoft Azure services for enhanced capabilities.",
        "Additional Microsoft Grant: Apply for supplementary grants to further leverage Microsoft services.",
        "Beta Version 2.0 Launch: Release an updated version of the AIBanshee platform.",
        "Enhanced AI Integration: Incorporate GPT3.5 Turbo, OpenAI, and DALL-E-2 for advanced AI functionalities.",
        "Token Burning: Implement token burning mechanisms to manage token supply.",
        "Marketing Tools Implementation: Develop and deploy various marketing tools for enhanced outreach.",
        "CEX Listing: Secure listing on centralized exchanges for increased liquidity.",
        "Staking System: Introduce staking mechanisms for token holders.",
        "Decentralization: Begin transitioning the platform to a decentralized network.",
      ],
    },
    {
      quarter: "Our plans for Q3 2024",
      tasks: [
        "Product Subscription Launch: Introduce subscription-based access to the AIBanshee platform.",
        "Crypto Payments: Enable cryptocurrency payments for subscriptions and transactions.",
        "Cooperation with Top Projects: Collaborate with established projects to expand reach and capabilities.",
        "Mobile App Development: Launch beta versions of the AIBanshee mobile app for Android and iOS.",
        "Personalization Features: Add personal assistant and chat personalization functionalities to the mobile app.",
        "NVIDIA DGX Cloud Integration: Utilize NVIDIA DGX Cloud for improved performance.",
        "Custom Application Development: Begin offering custom AI solutions for businesses and individuals.",
        "Workflow Optimization: Implement comprehensive workflow solutions based on NVIDIA AI technologies.",
      ],
    },
    {
      quarter: "Our plans for Q4 2024",
      tasks: [
        "Quarterly Profit Payout: Distribute profits to token holders.",
        "Mobile Applications 2.0: Release updated versions of the AIBanshee mobile app.",
        "Global Marketing Expansion: Expand marketing efforts to new regions and demographics.",
        "Top CEX Listing: Secure listing on major centralized exchanges for wider accessibility.",
      ],
    },
    {
      quarter: "Additional Plans",
      tasks: [
        "Community Building: Actively engage with users through social media, forums, and events. Assign dedicated community managers to facilitate interactions and moderate discussions.",
        "Security: We ensure ongoing vigilance to protect users and their assets.",
        "Regulatory Compliance: Establish a legal compliance team to navigate regulatory requirements.",
        "User Education: Develop comprehensive educational resources to empower users and investors.",
        "Feedback Mechanisms: Implement feedback channels to gather insights and improve user experience.",
        "Scalability Planning: Prepare for scalability challenges and explore solutions to accommodate growth.",
        "Environmental Sustainability: Assess and mitigate the project's environmental impact.",
        "Continuous Innovation: Allocate resources for research and development to stay at the forefront of AI technology.",
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
            <h1 className="w-full font-semibold text-[1.2rem]">
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
        <h1 className="font-BebasNeue text-center font-[400] pb-2 text-[2.5vmax]">
          DEVELOPMENT MILESTONES
        </h1>
        <div className="pt-8 text-white">{FAQs}</div>
      </div>
    </section>
  );
}
