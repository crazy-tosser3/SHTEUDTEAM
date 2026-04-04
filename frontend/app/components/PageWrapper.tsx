'use client'

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { FrozenRoute } from "./FrozenRoute"

const PageWrapper = ({ children }:{ children:React.ReactNode}) => {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div className="relative" initial={{left: "100dvw"}} animate={{left: 0}} exit={{left: "-100dvw"}} key={pathname} transition={{duration: 0.6, ease: "easeInOut"}}>
        <FrozenRoute>
          {children}
        </FrozenRoute>
      </motion.div>
    </AnimatePresence>
    
  )
}

export default PageWrapper