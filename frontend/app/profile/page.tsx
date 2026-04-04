'use client'

import { motion } from "framer-motion";
import { Award, LogOut, Shield } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const profile = () => {
  const { data:session } = useSession();

  const [curScore, setCurScore] = useState(18);
  const [maxScore, setMaxScore] = useState(24);

  return (
    <div className="m-auto border rounded p-1 flex flex-col items-center gap-2 w-fit">
      <div className="flex items-center gap-2 border rounded-[100dvh]">
        <img src="/placeholder.webp" className="rounded-full h-[128px] aspect-square object-cover pointer-events-none" />
        {<h1 className="text-3xl text-(--accent) p-1 pr-5">{session?.user?.name}</h1>}  
      </div>
      <h3 className="ghost">статус:</h3>
      <Shield className="m-auto text-(--accent) highlight" size={128} absoluteStrokeWidth={true} />
      <h2>Защищенный пользователь сети</h2>
      <div className="h-[12px] w-full border rounded overflow-clip relative">
        <motion.div className="accent-gradient absolute left-0 top-0 h-full rounded" animate={{width: `${Math.floor(curScore/maxScore*100)}%`}} transition={{delay: 0.5, duration: 2, type: "spring", stiffness: 10}} />
      </div>
      <h3 className="ghost">(18/24 баллов)</h3>
      <div className="flex gap-2 items-center">
        <button className="primary flex items-center">
          <h2>сертификат</h2>
          <Award />
        </button>
        <button className="flex items-center gap-2" onClick={() => signOut()}>
          <h2>выйти</h2>
          <LogOut />
        </button>
      </div>
    </div>
  )
}

export default profile