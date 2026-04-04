'use client'

import useSiteStore from "@/app/stores/SiteStore";
import { useState } from "react"

interface mailData{
  title:string,
  desc:string,
  action1:string[],
  action2:string[],
  action3:string[],
  rightAnswer:number,
  difficulty:number
}

const Mail = ({title, desc, action1, action2, action3, rightAnswer, difficulty}:mailData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const setModalVisibility = useSiteStore((state:any) => state.setModalVisibility);
  const setModalInfo = useSiteStore((state:any) => state.setModalInfo);

  const handleCheck = (num:number) => {
    setModalVisibility(true);
    setIsHidden(true);
  };

  return (
    <div className={"border flex flex-col gap-1 w-full justify-between p-1 rounded " + (isHidden ? "hidden" : "")} onClick={() => setIsOpen(!isOpen)}>
      <div className="flex gap-1 items-center justify-between">
        <h1 className="text-xl">{title}</h1> 
        <div className="flex gap-1 items-center">
          <button onClick={() => {setModalInfo(title, action1[1], "", "Дальше"); handleCheck(1)}}>
            {action1[0]}
          </button>
          <button onClick={() => {setModalInfo(title, action2[1], "", "Дальше"); handleCheck(2)}}>
            {action2[0]}
          </button>
          <button onClick={() => {setModalInfo(title, action3[1], "", "Дальше"); handleCheck(3)}}>
            {action3[0]}
          </button>
        </div>
      </div>
      {isOpen && <p>{desc}</p>}
      <h3 className="ghost">Сложность:</h3>
      <h2>{"☆".repeat(difficulty)}</h2>
    </div>
  )
}

export default Mail