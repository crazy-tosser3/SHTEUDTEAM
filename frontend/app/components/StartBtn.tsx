'use client'

import { ChevronRight } from "lucide-react"
import Link from "next/link"

const StartBtn = () => {
  return (
    <Link href="/tasks/1">
      <button className="flex gap-1 items-center primary text-(--background)">
        <ChevronRight size={48} />
      </button>
    </Link>
  )
}

export default StartBtn