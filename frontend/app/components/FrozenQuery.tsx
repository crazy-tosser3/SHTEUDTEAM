'use client'

import { useContext, useRef, ReactNode } from "react"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function FrozenQuery({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  )
}