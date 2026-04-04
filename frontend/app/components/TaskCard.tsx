'use client'

import { InfoIcon } from "lucide-react"
import useSiteStore from "../stores/SiteStore"

interface taskCardData{
  src:string,
  index:number,
  title:string,
  desc:string
}

const TaskCard = ({src, index, title, desc}:taskCardData) => {
  const setModalVisibility = useSiteStore((state:any) => state.setModalVisibility);
  const setModalInfo = useSiteStore((state:any) => state.setModalInfo)

  const handleOpenInfo = () => {
    setModalInfo(title, desc, "", "Буду знать")
    setModalVisibility(true)
  }

  return (
    <div className="border flex flex-col gap-1 rounded p-1 shrink-0">
      <img src={src} className="rounded w-full aspect-square object-cover pointer-events-none" />
      <div className="flex gap-1 items-center justify-between">
        <h2 className="aldrich text-2xl">#{index}</h2>
        <InfoIcon className="btn" size={32} onClick={handleOpenInfo} />
      </div>
      <h3 className="text-xl">{title}</h3>
    </div>
  )
}

export default TaskCard