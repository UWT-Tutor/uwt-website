'use client'

import { useSelectedLayoutSegment } from "next/navigation"
import { MainNavItem } from "@/types"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { MobileNav } from "./moble_nav"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  // TODO: support mobile
  return (
    <header className='fixed top-0 left-0 right-0 bg-primary w-full h-auto py-4 md:py-5 z-30'>
      <div className="flex justify-between items-center container">
        <h1 className='text-primary-foreground text-3xl'>UWT</h1>
        <nav className="hidden md:flex items-center gap-8">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center transition-colors hover:text-primary-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`) || (segment == "(home)" && item.href == "/")
                  ? "text-secondary"
                  : "text-secondary-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Hamburger
            toggled={showMobileMenu}
            toggle={setShowMobileMenu}
            color="#FFF"
            size={24}
          />
        </div>
        {showMobileMenu && items && (
          <MobileNav items={items} onDismiss={() => { setShowMobileMenu(false) }}></MobileNav>
        )}
      </div>
    </header>
  )
}
