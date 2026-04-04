'use client'
import { useEffect, useState } from "react"

const Light = () => {

  const [x, setX] = useState(0);

  const [y, setY] = useState(0);

  useEffect(() => {
    document.body.addEventListener('mousemove', (e) => {
      setX(e.clientX);
      setY(e.clientY);
    })
  }, [])
  

  return (
    <div className="-z-1 h-[60dvh] light aspect-square fixed rounded-full" style={{left: x, top: y, transform: "translateX(-50%) translateY(-50%)"}} />
  )
}

export default Light