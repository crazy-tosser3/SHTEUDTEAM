'use client'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react"

interface sliderProps{
  maxVal:any,
  onChange:Function
}

const Slider = ({ maxVal = 100, onChange }:sliderProps) => {
  const sliderVelocity = useMotionValue(0);
  const sliderSpring = useSpring(sliderVelocity, { stiffness: 300 });

  const slider = useRef<HTMLDivElement>(null);

  const handleSlide = (_e:any, info:any) => {
    
    if (!slider.current) return;

    const rect = slider.current.getBoundingClientRect();

    const relativeX = info.point.x - rect.left;
    
    const percentage = Math.max(0, Math.min(1, relativeX / rect.width));
    
    const newValue = Math.round(percentage * maxVal);
    
    setValue(newValue);
    onChange(newValue);

    sliderVelocity.set(info.velocity.x)
  }

  const [value, setValue] = useState(0);
  
  return (
    <div ref={slider} className="relative rounded-[5px] border my-1 h-[10px]">
      <motion.div 
      drag="x" 
      dragConstraints={slider} 
      style={{rotateZ: useTransform(sliderSpring, [-1000, 1000], [25, -25])}} 
      dragMomentum={false} 
      whileTap={{scale: 1.2, cursor: 'grabbing'}} 
      onDragEnd={() => sliderVelocity.set(0)} 
      onDrag={handleSlide} 
      className={"w-[70px] absolute top-[-12px] h-[30px] accent-gradient px-(--spacing) flex items-center rounded-full"}
      whileHover={{scale: 1.1, cursor: 'grab'}}
      >
        <motion.h2 whileTap={{paddingBottom: 50}} className="relative aldrich text-center w-full">
          {Math.floor(value)}
        </motion.h2>
      </motion.div>
    </div>
  )
}

export default Slider