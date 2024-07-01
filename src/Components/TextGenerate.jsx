"use client";
import { motion } from "framer-motion";

export const TextGenerateEffect = ({ words, className }) => {
  const renderWords = () => {
    return (
      <motion.div>
        <motion.span className="font-serif text-black text-[0.8rem] md:text-[1rem] poppins dark:text-white">
          {words}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className="mt-4">
      <div className="text-2xl leading-snug tracking-wide text-black dark:text-white">
        {renderWords()}
      </div>
    </div>
  );
};
