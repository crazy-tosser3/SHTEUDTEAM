'use client'
import { AnimatePresence, motion } from "framer-motion";
import useSiteStore from "../stores/SiteStore"

const Modal = () => {

  const isVisible = useSiteStore((state:any) => state.modalIsVisible);
  const setVisibility = useSiteStore((state:any) => state.setModalVisibility);
  const content = useSiteStore((state:any) => state.modalContent);

  return (
    <AnimatePresence mode="wait">
      {isVisible && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} className="glass p-1 fixed h-full w-full z-999 flex items-center justify-center">
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{type: "spring", duration: 0.5}} className="layer w-fit p-1 rounded flex flex-col items-center gap-1">
          {content.head && <h1 className="text-2xl aldrich">{content.head}</h1>}
          {content.text && <p>{content.text}</p>}
          {content.subText && <p className="ghost">{content.subText}</p>}
          <div className="flex gap-2 items-center justify-center">
            {content.btn1Title && <button className="primary flex-1" onClick={() => {
              setVisibility(false);
            }}>{content.btn1Title}</button>}
            {content.btn2Title && <button className="secondary flex-1"onClick={() => {
              setVisibility(false);
            }}>{content.btn2Title}</button>}
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
    
  )
}

export default Modal