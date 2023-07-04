'use client'

import { MainNavItem } from "@/types"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode,
  onDismiss: () => void
}

export function MobileNav({
  items,
  children,
  onDismiss,
}: MobileNavProps) {
  const router = useRouter()
  return (
    <div
      className={cn(
        "fixed inset-0 top-20 z-10 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-32 shadow-md animate-in fade-in md:hidden"
      )}
    >
      <div className="relative grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <p
              key={index}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-base font-medium hover:text-secondary",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={() => {
                router.push(item.href)
                onDismiss()
              }}
            >
              {item.title}
            </p>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}