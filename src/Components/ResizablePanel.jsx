import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ResizablePanel({ children }) {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="relative overflow-hidden w-full"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            // transition: { duration: duration / 2, delay: duration / 2 },
          }}
          exit={{
            opacity: 0,
            // transition: { duration: duration / 2 }
          }}
        >
          <div ref={ref} className="space-y-8 absolute">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/*
    Replacer function to JSON.stringify that ignores
    circular references and internal React properties.
    https://github.com/facebook/react/issues/8669#issuecomment-531515508
  */
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
