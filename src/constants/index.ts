export const APP_NAME = 'Next.js App'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
} as const

export const API_ROUTES = {
  USERS: '/api/users',
} as const
