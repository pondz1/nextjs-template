'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, TrendingUp, Users, DollarSign, Settings, X, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface SidebarProps {
  onClose?: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname()

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
    { name: 'Customers', href: '/dashboard/customers', icon: Users },
    { name: 'Transactions', href: '/dashboard/transactions', icon: DollarSign },
    { name: 'System Status', href: '/dashboard/status', icon: Activity },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  return (
    <aside className="bg-card text-card-foreground flex h-full w-full flex-col border-r">
      {/* Sidebar Header */}
      <div className="border-border/40 flex h-16 items-center justify-between border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2" onClick={onClose}>
          <div className="from-primary to-secondary text-primary-foreground shadow-primary/20 animate-glow flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr shadow-md">
            <span className="text-lg font-extrabold tracking-wider">A</span>
          </div>
          <span className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Antigravity <span className="text-primary font-light">UI</span>
          </span>
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            className="hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg p-1.5 transition-colors md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={cn(
                'group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300',
                isActive
                  ? 'bg-primary/10 text-primary border-primary shadow-primary/5 border-l-2 shadow-sm'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              )}
            >
              <item.icon
                className={cn(
                  'h-5 w-5 transition-transform duration-300 group-hover:scale-110',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                )}
              />
              <span>{item.name}</span>
              {isActive && (
                <span className="bg-primary absolute right-3 h-2 w-2 animate-pulse rounded-full" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="border-border/40 bg-muted/20 border-t p-4">
        <div className="flex items-center gap-3 px-2 py-1.5">
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback className="from-primary/30 to-secondary/30 text-foreground bg-gradient-to-tr text-xs font-bold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Jane Doe</p>
            <p className="text-muted-foreground truncate text-xs">jane.doe@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
