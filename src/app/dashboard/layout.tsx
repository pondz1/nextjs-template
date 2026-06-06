'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/layout/sidebar'
import { Navbar } from '@/components/layout/navbar'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      {/* Desktop Sidebar (fixed inline position) */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (Sheet component) */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 border-r-0 p-0">
          <SheetTitle className="sr-only">Sidebar Navigation</SheetTitle>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main Page Area */}
      <div className="flex min-h-screen flex-col md:pl-64">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content with premium Grid background */}
        <main className="bg-grid-pattern dark:bg-grid-pattern-dark relative flex-1 overflow-x-hidden p-6 md:p-8">
          {/* Subtle glowing radial background blobs */}
          <div className="bg-primary/5 pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          <div className="bg-secondary/5 pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

          <div className="animate-reveal relative z-10">{children}</div>
        </main>
      </div>
    </div>
  )
}
