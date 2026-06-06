'use client'

import { useTheme } from '@/components/providers/theme-provider'
import { Menu, Sun, Moon, Bell, Search, LogOut, User } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-background border-border/40 sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b px-6">
      {/* Left section: Mobile Toggle & Search */}
      <div className="flex flex-1 items-center gap-4">
        <button
          onClick={onMenuClick}
          className="hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg p-2 transition-colors md:hidden"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Premium Search Input */}
        <div className="relative hidden w-full max-w-md sm:block">
          <Search className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
          <input
            type="search"
            placeholder="Search commands, metrics..."
            className="border-border/50 bg-muted/40 placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:ring-primary/20 w-full rounded-xl border py-2 pr-4 pl-10 text-sm transition-all duration-300 outline-none focus:ring-2"
          />
        </div>
      </div>

      {/* Right section: Utilities */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="hover:bg-muted text-muted-foreground hover:text-foreground relative rounded-xl p-2.5 transition-all duration-300 active:scale-95"
          aria-label="Toggle Theme"
        >
          <div className="relative h-5 w-5">
            <Sun className="absolute inset-0 h-5 w-5 scale-100 rotate-0 text-amber-500 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute inset-0 h-5 w-5 scale-0 rotate-90 text-indigo-400 transition-all dark:scale-100 dark:rotate-0" />
          </div>
        </button>

        {/* Notifications Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="hover:bg-muted text-muted-foreground hover:text-foreground relative cursor-pointer rounded-xl p-2.5 transition-all duration-300"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              {/* Active Ping Dot */}
              <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                <span className="bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-secondary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-card border-border/40 w-80 rounded-2xl border p-4 shadow-xl"
          >
            <div className="border-border/40 mb-2 flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-semibold">Notifications</h3>
              <button className="text-primary text-xs hover:underline">Mark all read</button>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2.5 text-xs">
                <span className="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
                <div>
                  <p className="font-medium">System Update Completed</p>
                  <p className="text-muted-foreground mt-0.5">
                    All libraries updated to their latest compatible versions.
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5 text-xs">
                <span className="bg-secondary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
                <div>
                  <p className="font-medium">Performance Alert</p>
                  <p className="text-muted-foreground mt-0.5">
                    CPU load exceeded 90% for 5 seconds.
                  </p>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-xl p-1 transition-all duration-300"
              aria-label="User profile"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="from-primary to-secondary bg-gradient-to-tr text-[10px] font-bold text-white uppercase shadow-sm">
                  JD
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-card border-border/40 w-56 rounded-2xl border p-2 shadow-xl"
          >
            <div className="border-border/40 mb-1 border-b px-3 py-2">
              <p className="text-sm font-semibold">Jane Doe</p>
              <p className="text-muted-foreground truncate text-xs">jane.doe@example.com</p>
            </div>
            <DropdownMenuItem asChild>
              <button className="text-muted-foreground hover:bg-muted hover:text-foreground flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors">
                <User className="h-4 w-4" />
                <span>Account Details</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="text-destructive hover:bg-destructive/10 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors">
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
