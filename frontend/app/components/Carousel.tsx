'use client'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"

interface carouselData{
  srcs:any[],
  classes?:string
}

const minDragDist = 50;

const Carousel = ({srcs, classes = ""}:carouselData) => {
  const [curIndex, setCurIndex] = useState(0);

  const dragX = useMotionValue(0);

  const smoothDragX = useSpring(dragX, { stiffness: 100, damping: 50 })

  const handleDragEnd = (_e:any, info:any) => {
    if (info.offset.x < -minDragDist && curIndex < srcs.length-1){
      setCurIndex(curIndex+1);
    } 
    else if (info.offset.x > minDragDist && curIndex > 0){
      setCurIndex(curIndex-1);
    };
    dragX.set(0);
  }

  return (
    <div className={"h-full w-full overflow-hidden flex flex-col gap-3 pb-1 "+classes}>
      <motion.div 
      drag="x" 
      dragConstraints={{left: 0, right: 0}}
      dragMomentum={false}
      className="z-1 flex-1 h-full flex items-center cursor-grab active:cursor-grabbing rounded overflow-hidden"
      onDragEnd={handleDragEnd}
      onDrag={(_e, info) => dragX.set(info.offset.x)}
      style={{willChange: "transform"}}
      >
        <motion.div 
        className="flex h-full w-full"
        animate={{ x: `-${curIndex * 100}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        {srcs.map((src, index) => (
          <div 
          style={{
            backgroundImage: `url(${src.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-full min-w-full w-full shrink-0 flex-none overflow-y-scroll relative pointer-events-none" 
          key={"carousel-image-"+index}
          >
            <div className="relative z-3 w-2/3 md:w-1/2 h-full glass p-2 rounded flex flex-col justify-between gap-1 overflow-y-scroll pointer-events-auto">
              <h1 className="text-4xl aldrich w-fit">{src.title}</h1>
              <p className="w-full">{src.text}</p>
              {src.btn && <button className="w-fit primary" onClick={src.onClickFunc}>{src.btn}</button>}
            </div>
          </div>
        ))}
        </motion.div>
      </motion.div>
      <div className="w-full justify-center flex gap-1 items-center">
        {srcs.length > 1 && srcs.map((_src, index) => (
          <motion.div
          className="relative z-10 rounded-full h-[15px] w-[15px] cursor-pointer" 
          key={index}
          style={{left: useTransform(smoothDragX, [-100, 0, 100], [50, 0, -50])}}
          animate={{y: curIndex === index ? -20 : 0, backgroundColor: curIndex === index ? "var(--accent-lightest)" : "var(--accent-light)"}}
          transition={{duration: 0.8, type: "spring", damping: 7}}
          onClick={() => setCurIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel