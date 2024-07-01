import { HoverEffect } from "../Components/HoverEffect";
export function Features() {
  return (
    <div className="max-w-5xl px-8 mx-auto relative overflow-hidden py-[2rem]">
      <div className="text-center text-[2.3rem] md:text-[3rem] font-semibold">
        <h1>FEATURES</h1>
      </div>

      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Secure",
    description:
      "Decentralized AI platforms are more secure than traditional AI platforms because they are not controlled by any one entity. This means that there is no single point of failure that can be attacked.",
    link: "https://aibanshee.gitbook.io/lightpaper/",
  },
  {
    title: "Transparent",
    description:
      " Decentralized AI platforms are more transparent than traditional AI platforms because all of the code is open source. This means that anyone can audit the code to make sure that it is secure and fair.",
    link: "https://aibanshee.gitbook.io/lightpaper/",
  },
  {
    title: "Efficient",
    description:
      "Decentralized AI platforms are more efficient than traditional AI platforms because they use a peer-to-peer network. This means that there is no need for a central server, which reduces costs and improves performance.",
    link: "https://aibanshee.gitbook.io/lightpaper/",
  },
  {
    title: "Create stunning marketing content",
    description:
      "AIBanshee's AI-powered content creation tools make it easy to create professional-quality marketing materials, even if you don't have any design experience.",
    link: "https://aibanshee.gitbook.io/lightpaper/all-in-one",
  },
  {
    title: "Support with finances, legal matters, and more",
    description:
      "AIBanshee's team of experts is available to provide you with support on a wide range of topics, including finances, legal matters, and technology.",
    link: "https://aibanshee.gitbook.io/lightpaper/all-in-one",
  },
  {
    title: "Take care of your health",
    description:
      "AIBanshee's health and fitness tools can help you track your progress, stay motivated, and reach your fitness goals. AIBanshee utilizes AI to provide personalized health fitness assistance, helping you achieve your goals effectively.",
    link: "https://aibanshee.gitbook.io/lightpaper/all-in-one",
  },
];
