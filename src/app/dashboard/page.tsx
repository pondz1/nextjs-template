'use client'

import { useState } from 'react'
import {
  DollarSign,
  Users,
  ShoppingBag,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

// Types for chart interactions
interface ChartDataPoint {
  month: string
  revenue: number
  cost: number
  x: number
  yRev: number
  yCost: number
}

export default function DashboardPage() {
  const [hoveredPoint, setHoveredPoint] = useState<ChartDataPoint | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // 1. Metric stats data
  const stats = [
    {
      title: 'Total Revenue',
      value: '$48,259.00',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      color: 'text-primary bg-primary/10',
    },
    {
      title: 'Active Users',
      value: '10,482',
      change: '+8.2%',
      isPositive: true,
      icon: Users,
      color: 'text-accent bg-accent/10',
    },
    {
      title: 'Total Sales',
      value: '1,230',
      change: '-3.1%',
      isPositive: false,
      icon: ShoppingBag,
      color: 'text-secondary bg-secondary/10',
    },
    {
      title: 'System Uptime',
      value: '99.99%',
      change: 'Active',
      isPositive: true,
      icon: Activity,
      color: 'text-emerald-500 bg-emerald-500/10',
    },
  ]

  // 2. Chart dataset
  const chartWidth = 600
  const chartHeight = 220
  const paddingLeft = 50
  const paddingRight = 20
  const paddingTop = 20
  const paddingBottom = 40

  const chartData: ChartDataPoint[] = [
    { month: 'Jan', revenue: 12000, cost: 8000, x: 50, yRev: 160, yCost: 180 },
    { month: 'Feb', revenue: 21000, cost: 11000, x: 156, yRev: 120, yCost: 165 },
    { month: 'Mar', revenue: 17000, cost: 9500, x: 262, yRev: 138, yCost: 172 },
    { month: 'Apr', revenue: 29000, cost: 14000, x: 368, yRev: 84, yCost: 152 },
    { month: 'May', revenue: 24000, cost: 13000, x: 474, yRev: 106, yCost: 156 },
    { month: 'Jun', revenue: 35000, cost: 16500, x: 580, yRev: 58, yCost: 140 },
  ]

  const revenuePath = chartData.map((d) => `${d.x},${d.yRev}`).join(' L ')
  const costPath = chartData.map((d) => `${d.x},${d.yCost}`).join(' L ')

  const revenueArea = `${revenuePath} L 580,${chartHeight - paddingBottom} L 50,${chartHeight - paddingBottom} Z`
  const costArea = `${costPath} L 580,${chartHeight - paddingBottom} L 50,${chartHeight - paddingBottom} Z`

  // 3. Recent Transactions
  const transactions = [
    {
      id: 'TXN-1082',
      customer: 'Sarah Jenkins',
      email: 'sarah.j@example.com',
      amount: '+$1,250.00',
      status: 'Completed',
      date: 'June 6, 2026',
      icon: CheckCircle,
      statusClass: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      id: 'TXN-1081',
      customer: 'Michael Chen',
      email: 'm.chen@example.com',
      amount: '+$320.00',
      status: 'Pending',
      date: 'June 5, 2026',
      icon: Clock,
      statusClass: 'bg-amber-500/10 text-amber-500',
    },
    {
      id: 'TXN-1080',
      customer: 'Emily Rodriguez',
      email: 'emily.r@example.com',
      amount: '-$89.90',
      status: 'Failed',
      date: 'June 4, 2026',
      icon: AlertCircle,
      statusClass: 'bg-destructive/10 text-destructive',
    },
    {
      id: 'TXN-1079',
      customer: 'Alex Thompson',
      email: 'alex.t@example.com',
      amount: '+$4,500.00',
      status: 'Completed',
      date: 'June 4, 2026',
      icon: CheckCircle,
      statusClass: 'bg-emerald-500/10 text-emerald-500',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground text-sm">
            Monitor your system status, revenue growth, and active transactions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="border-border bg-card hover:bg-muted flex items-center gap-1.5 rounded-xl border px-4 py-2 text-xs font-semibold transition-colors">
            Export Report
          </button>
          <button className="bg-primary text-primary-foreground shadow-primary/20 hover:bg-primary/95 flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold shadow-lg transition-all active:scale-95">
            Create Action
          </button>
        </div>
      </div>

      {/* Grid Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="group bg-card relative rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">{stat.title}</span>
              <div
                className={cn(
                  'rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110',
                  stat.color
                )}
              >
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
              <div className="mt-1.5 flex items-center gap-1">
                {stat.isPositive ? (
                  <span className="inline-flex items-center text-xs font-semibold text-emerald-500">
                    <ArrowUpRight className="mr-0.5 h-3.5 w-3.5 shrink-0" />
                    {stat.change}
                  </span>
                ) : (
                  <span className="text-destructive inline-flex items-center text-xs font-semibold">
                    <ArrowDownRight className="mr-0.5 h-3.5 w-3.5 shrink-0" />
                    {stat.change}
                  </span>
                )}
                <span className="text-muted-foreground text-[10px]">vs last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Analytics section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main interactive area chart */}
        <div className="bg-card flex flex-col justify-between rounded-2xl border p-6 shadow-sm lg:col-span-2">
          <div className="border-border/40 mb-4 flex items-center justify-between border-b pb-4">
            <div>
              <h2 className="flex items-center gap-1.5 text-base font-bold tracking-tight">
                <TrendingUp className="text-primary h-5 w-5" />
                Revenue Analytics
              </h2>
              <p className="text-muted-foreground text-xs">
                Detailed revenue and cost projection metrics.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <span className="bg-primary h-2.5 w-2.5 rounded-full" />
                <span className="text-muted-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-secondary h-2.5 w-2.5 rounded-full" />
                <span className="text-muted-foreground">Cost</span>
              </div>
            </div>
          </div>

          {/* SVG Area Chart Container */}
          <div className="relative h-[220px] w-full">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line
                x1="50"
                y1="58"
                x2="580"
                y2="58"
                stroke="currentColor"
                className="text-border/30"
                strokeDasharray="4"
              />
              <line
                x1="50"
                y1="119"
                x2="580"
                y2="119"
                stroke="currentColor"
                className="text-border/30"
                strokeDasharray="4"
              />
              <line
                x1="50"
                y1="180"
                x2="580"
                y2="180"
                stroke="currentColor"
                className="text-border/30"
                strokeDasharray="4"
              />

              {/* Gradient Area under paths */}
              <path d={revenueArea} fill="url(#revenueGrad)" />
              <path d={costArea} fill="url(#costGrad)" />

              {/* Paths lines */}
              <path
                d={`M ${costPath}`}
                fill="none"
                stroke="var(--color-secondary)"
                strokeWidth="2.5"
                className="opacity-80"
              />
              <path
                d={`M ${revenuePath}`}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
              />

              {/* Interactive Hover Nodes */}
              {chartData.map((d, index) => (
                <g key={d.month}>
                  {/* Click/Hover targets */}
                  <circle
                    cx={d.x}
                    cy={d.yRev}
                    r="12"
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => {
                      setHoveredPoint(d)
                      setHoveredIndex(index)
                    }}
                    onMouseLeave={() => {
                      setHoveredPoint(null)
                      setHoveredIndex(null)
                    }}
                  />
                  <circle
                    cx={d.x}
                    cy={d.yRev}
                    r="4"
                    fill="var(--color-background)"
                    stroke="var(--color-primary)"
                    strokeWidth="2.5"
                    className={cn(
                      'pointer-events-none transition-all duration-300',
                      hoveredIndex === index ? 'r-6 stroke-[3.5]' : ''
                    )}
                  />
                </g>
              ))}

              {/* X Axis Labels */}
              {chartData.map((d) => (
                <text
                  key={d.month}
                  x={d.x}
                  y={chartHeight - 15}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[10px] font-medium"
                >
                  {d.month}
                </text>
              ))}

              {/* Y Axis Labels */}
              <text
                x="40"
                y="62"
                textAnchor="end"
                className="fill-muted-foreground text-[10px] font-medium"
              >
                $30k
              </text>
              <text
                x="40"
                y="123"
                textAnchor="end"
                className="fill-muted-foreground text-[10px] font-medium"
              >
                $20k
              </text>
              <text
                x="40"
                y="184"
                textAnchor="end"
                className="fill-muted-foreground text-[10px] font-medium"
              >
                $10k
              </text>
            </svg>

            {/* Float Tooltip Box */}
            {hoveredPoint && (
              <div
                className="bg-card animate-reveal pointer-events-none absolute z-20 rounded-xl border p-3 text-xs shadow-lg"
                style={{
                  left: `${(hoveredPoint.x / chartWidth) * 100}%`,
                  top: `${(hoveredPoint.yRev / chartHeight) * 100 - 35}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <p className="border-border/40 mb-1 border-b pb-1 text-center font-semibold">
                  {hoveredPoint.month}
                </p>
                <div className="min-w-[90px] space-y-1">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Revenue:</span>
                    <span className="text-primary font-bold">
                      ${hoveredPoint.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">Cost:</span>
                    <span className="text-secondary font-bold">
                      ${hoveredPoint.cost.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Circular Donut Chart for Traffic */}
        <div className="bg-card flex flex-col justify-between rounded-2xl border p-6 shadow-sm">
          <div>
            <h2 className="text-base font-bold tracking-tight">Traffic Distribution</h2>
            <p className="text-muted-foreground text-xs">User channel traffic metrics.</p>
          </div>

          <div className="relative my-6 flex items-center justify-center">
            <svg width="150" height="150" viewBox="0 0 100 100" className="-rotate-90">
              {/* Outer Shadow Donut */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="currentColor"
                className="text-border/30"
                strokeWidth="10"
              />

              {/* Direct Traffic (Blue/Primary) - 55% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="var(--color-primary)"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="113" /* (1 - 0.55) * 251.2 */
                strokeLinecap="round"
                className="cursor-pointer transition-all duration-500 hover:stroke-[12]"
              />

              {/* Social (Pink/Secondary) - 25% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="var(--color-secondary)"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="188.4" /* (1 - 0.25) * 251.2 */
                strokeLinecap="round"
                transform="rotate(198 50 50)" /* 0.55 * 360 = 198 */
                className="cursor-pointer transition-all duration-500 hover:stroke-[12]"
              />

              {/* Referral (Teal/Accent) - 20% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="var(--color-accent)"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset="200.9" /* (1 - 0.20) * 251.2 */
                strokeLinecap="round"
                transform="rotate(288 50 50)" /* (0.55 + 0.25) * 360 = 288 */
                className="cursor-pointer transition-all duration-500 hover:stroke-[12]"
              />
            </svg>

            {/* Inner labels */}
            <div className="absolute text-center">
              <span className="text-2xl font-black">10.4k</span>
              <span className="text-muted-foreground block text-[10px] font-bold tracking-wider uppercase">
                Visitors
              </span>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <span className="block font-bold">55%</span>
              <span className="text-muted-foreground text-[10px]">Direct</span>
            </div>
            <div>
              <span className="block font-bold">25%</span>
              <span className="text-muted-foreground text-[10px]">Social</span>
            </div>
            <div>
              <span className="block font-bold">20%</span>
              <span className="text-muted-foreground text-[10px]">Referral</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Log and Logs List */}
      <div className="bg-card rounded-2xl border p-6 shadow-sm">
        <div className="border-border/40 mb-4 flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="text-base font-bold tracking-tight">Recent Activity</h2>
            <p className="text-muted-foreground text-xs">
              Monitor real-time system logs and withdrawals.
            </p>
          </div>
          <button className="text-primary text-xs font-semibold hover:underline">
            View all activity
          </button>
        </div>

        {/* Transaction Table Layout */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Transaction ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell className="font-mono text-xs">{txn.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="text-xs font-medium sm:text-sm">{txn.customer}</p>
                    <p className="text-muted-foreground text-[10px]">{txn.email}</p>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{txn.date}</TableCell>
                <TableCell className="text-xs font-bold sm:text-sm">{txn.amount}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide',
                      txn.statusClass
                    )}
                  >
                    <txn.icon className="h-3 w-3 shrink-0" />
                    {txn.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
