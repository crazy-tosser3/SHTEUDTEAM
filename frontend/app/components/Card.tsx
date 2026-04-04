import clsx from 'clsx';
import { motion } from 'framer-motion';

const Card = ({wave = "false", accent = "false", classes = "", contentClasses = "", children }:any) => {
  return (
    <div className={clsx("relative overflow-clip p-1 rounded layer", classes, accent === "true" ? "accent-border accent-gradient" : "border gradient cutoff")}>
      <div className="absolute z-0 mix-blend-multiply pointer-events-none inset-0" style={{backgroundImage: `url(${wave === "true" ? "waves.png" : "noise.png"})`, backgroundRepeat: 'repeat'}} />
      <div className={"relative z-10 p h-full "+contentClasses}>
        {children}
      </div>
    </div>
  )
}

export default Card