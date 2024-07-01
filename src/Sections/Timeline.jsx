import React, { Fragment, useEffect, useRef } from "react";
import TimelineBox from "../Components/TimelineBox";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function Timeline() {
  const heading = useRef(null);
  const isInView = useInView(heading, { amount: 1 });
  const ref = useRef(null);
  const [height, setHeight] = React.useState(100);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useSpring(useParallax(scrollYProgress, height), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      heading.current?.classList.add("start");
    }
    if (ref.current?.clientHeight) setHeight(ref.current?.clientHeight);
  }, [isInView]);

  return (
    <main ref={ref} className="relative pb-16  py-[2rem]">
      <div className="relative flex flex-col items-center justify-center my-10 mb-16 gap-y-7">
        <h1 className="z-30 align-middle text-center block font-clashDisplay md:leading-[70px] font-medium md:font-semibold  text-4xl sm:text-6xl  ">
          Our Journey
        </h1>
        <h3 className="text-lg py-4 font-clashDisplay italic text-white leading-[0px]  w-full text-center font-light pt-2">
          How AIBANSHEE product is made
        </h3>
        <figure
          aria-hidden
          className="bg-[#540c26] w-32 h-32 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px] absolute -top-16 sm:top-0 left-3/4"
        />
      </div>

      <section className="relative z-10 grid w-full h-full grid-cols-1 pb-20 mx-auto px-7 md:grid-cols-2 gap-x-12 lg:gap-x-9 gap-y-12 lg:gap-y-4 place-items-center">
        <div className="absolute top-0   rounded-full  overflow-clip left-0 md:-translate-x-1/2 md:left-1/2   sm:left-7 h-full w-4 bg-[#282828] ">
          <motion.div
            style={{ height: y }}
            className=" w-[70%] mx-auto rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-800"
          ></motion.div>
        </div>
        {timeline.map((e, index) => {
          return (
            <Fragment key={index}>
              {e.id % 2 != 0 ? <div className="hidden md:block"></div> : null}
              <TimelineBox
                right={e.id % 2 == 0 ? true : false}
                className={
                  e.id % 2 != 0
                    ? "ml-auto md:mr-auto md:ml-4"
                    : "ml-auto md:mr-4 md:ml-auto"
                }
                id={e.id}
                title={e.title}
                year={e.year}
                desc={e.description}
              />
              {e.id % 2 == 0 ? <div className="hidden md:block"></div> : null}
            </Fragment>
          );
        })}
      </section>
      <figure
        aria-hidden
        className="bg-[#C81D5B] w-36 h-36 sm:w-52 sm:h-52 bg-blend-luminosity blur-[100px]  absolute  -bottom-12 sm:-bottom-6 left-0"
      />
    </main>
  );
}

const timeline = [
  {
    id: 1,
    title: "The dawn of a new era",
    year: 2022,
    description:
      "AIBanshee was born from the vision of a team of AI pioneers, determined to revolutionize the way businesses operate. With relentless research and development, we laid the foundation for our groundbreaking AI tool, setting it on a path to disrupt the industry.",
  },
  {
    id: 2,
    title: "Building a force to be reckoned with",
    year: 2023,
    description:
      "We focused on building a robust and user-friendly platform, integrating cutting-edge AI algorithms and machine learning techniques. Through meticulous testing and refinement, we honed AIBanshee's capabilities, ensuring its effectiveness and usability for businesses of all sizes.",
  },
  {
    id: 3,
    title: "Unleashing the power of AI",
    year: 2024,
    description:
      "With a solid platform in place, we are poised to expand our reach and impact, empowering businesses worldwide. We are actively forging partnerships with key players in various industries, integrating AIBanshee's solutions into their workflows. Our commitment to continuous innovation drives us to constantly evolve AIBanshee, staying ahead of the curve and meeting the ever-changing needs of our clients.",
  },
  {
    id: 4,
    title: "A global revolution in business intelligence",
    year: 2025,
    description:
      "We envision AIBanshee as the go-to AI solution for businesses and corporations worldwide, transforming the way they operate and achieve their goals. We are dedicated to providing tailored solutions to meet the specific needs of each client, maximizing their efficiency and productivity. Our journey has only just begun, and we are excited to continue shaping the future of AI with AIBanshee, leading the charge towards a more intelligent and efficient business landscape.",
  },
];

export { Timeline, timeline };
