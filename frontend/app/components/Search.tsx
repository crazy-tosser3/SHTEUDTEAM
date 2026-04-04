'use client'
import { motion } from "framer-motion"
import { SearchIcon } from "lucide-react"
import { useRef } from "react"

const Search = ({ onClickFunc, classes = "" }:any) => {
  const search = useRef<HTMLInputElement>(null);

  return (
    <div className={"relative rounded-[100dvh] bg-(--foreground) flex items-center justify-between border overflow-clip "+classes}>
      <input type="search" placeholder="Найдите что-нибудь" className="flex-1 rounded-[100dvh] p-1" ref={search} />
      <motion.div 
      onClick={() => {if (search.current) onClickFunc(search.current.value)}} 
      className="absolute right-0 gradient border p-1 rounded-full cursor-pointer" 
      whileTap={{rotateZ: 15, scale: 0.8}} 
      transition={{stiffness: 200, type: "spring"}}
      >
        <SearchIcon />
      </motion.div>
    </div>
  )
}

export default Search