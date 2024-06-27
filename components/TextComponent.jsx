"use client";

import { motion, AnimatePresence } from "framer-motion";

const TextComponent = ({ songText, score }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      className="text-component-container max-w-[1200px] h-[250px] lg:h-[300px] mx-auto text-center flex flex-col items-center justify-center my-6 bg-[url('/text-pattern.png')] bg-cover bg-center p-4 rounded-md shadow-lg 
      border-2 border-slate-50 border-opacity-50 relative z-10
    "
    >
      <div className=" top-[-20px] right-[-20px] w-[60px] md:w-[100px] aspect-square bg-[#151515] border-slate-50 border-2 rounded-md score-container text-slate-50 text-3xl md:text-5xl flex items-center justify-center font-semibold">
        {score}
      </div>

      <AnimatePresence mode="out-in">
        {songText?.map((line, index) => (
          <motion.p
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="text-slate-50 text-sm md:text-2xl lg:text-3xl font-semibold"
          >
            {line}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextComponent;
