import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function TimelineBox(props) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animation = useAnimation();
  const axis = props.right ? 80 : -80;
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [inView, animation]);
  const gradientStyle = {
    background:
      "linear-gradient(0deg, rgba(18, 18, 18, 0.1), rgba(18, 18, 18, 0.6)), linear-gradient(90deg, #0F0E0E 4.89%, rgba(21, 21, 21, 0) 100%)",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: axis }}
        ref={ref}
        animate={animation}
        className={`  group overflow-hidden hover:shadow-[#ff0000] hover:shadow-2xl  transition-shadow  relative flex flex-col items-start justify-start px-3 py-5 min-h-[220px] w-[400px] max-w-full md:w-[450px] rounded-l-3xl rounded-b-3xl ${props.className} `}
        style={gradientStyle}
      >
        <div className="w-full h-full">
          <div className="absolute top-0 block transition-transform ease-out -right-3 group-hover:-translate-x-3">
            <svg
              width="212"
              height="12"
              viewBox="0 0 212 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.91892 0H42L36.3243 12H0L4.91892 0Z"
                fill="#ff0000"
                fillOpacity="0.55"
              />
              <path
                d="M49.9189 0H87L81.3243 12H45L49.9189 0Z"
                fill="#ff0000"
                fillOpacity="0.79"
              />
              <path
                d="M94.9189 0H132L126.324 12H90L94.9189 0Z"
                fill="#ff0000"
                fillOpacity="0.85"
              />
              <path
                d="M139.919 0H177L171.324 12H135L139.919 0Z"
                fill="#ff0000"
                fillOpacity="0.85"
              />
              <path
                d="M185.034 0H212V12H180L185.034 0Z"
                fill="#ff0000"
                fillOpacity="0.85"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-between w-full gap-x-2 sm:flex-row">
            <h1 className="relative w-full mt-5 text-xl font-semibold tracking-widest uppercase font-clashDisplay">
              {props.title}
            </h1>
            <span className="font-clashDisplay font-semibold text-lg uppercase text-[#ff0000c1] absolute right-1">
              {props.year}
            </span>
          </div>

          <p className="text-sm text-[#eee] h-full leading-6 mt-7 font-light font-generalSans tracking-wider text-justify ">
            {props.desc}
          </p>
          <div className="absolute bottom-0 right-0">
            <svg
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H11V11H0V0Z" fill="#1A2024" />
              <path d="M0 0H11V11H0V0Z" fill="#1A2024" />
              <path d="M22 0L33 0V11H22V0Z" fill="#1A2024" />
              <path d="M22 0L33 0V11H22V0Z" fill="#1A2024" />
              <rect
                x="11"
                y="11"
                width="11.3574"
                height="11.3574"
                fill="#1A2024"
              />
              <rect y="22" width="11.3574" height="11.3574" fill="#1A2024" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TimelineBox;
