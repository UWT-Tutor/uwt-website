import Link from "next/link"

import { MainNavItem } from "@/types"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-20 z-10 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-32 shadow-md animate-in fade-in md:hidden"
      )}
    >
      <div className="relative grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-base font-medium hover:text-secondary",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}