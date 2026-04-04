'use client'
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const CheckBox = ({ onClickFunc }:any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    onClickFunc(isChecked);
  }, [isChecked])

  return (
    <div className="cursor-pointer relative bg-(--foreground) flex items-center justify-center h-[30px] max-w-[30px] rounded-full border aspect-square overflow-clip" onClick={handleSwitch}>
      <AnimatePresence>
        {isChecked && <motion.div className="absolute rounded-full bg-(--text) w-[30px] aspect-square" animate={{scale: [0,1]}} transition={{duration: 0.5}} exit={{opacity: 0}} key={"checkboxBg-"+isChecked} />}
        {isChecked && <motion.div className="absolute rounded-full bg-(--foreground) w-[30px] aspect-square flex items-center justify-center" style={{willChange: "transform"}} animate={{scale: [0,1]}} transition={{duration: 0.5, delay: 0.25}} exit={{scale: 0}} key={"checkbox-"+isChecked}><Check /></motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default CheckBox