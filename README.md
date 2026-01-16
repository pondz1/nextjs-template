# Next.js App

A modern Next.js application with TypeScript, Tailwind CSS, and App Router architecture.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Prettier** - Code formatting
- **Husky + lint-staged** - Pre-commit hooks

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup pre-commit hooks
npm run prepare

# Copy environment variables
cp .env.example .env.local
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run prepare` | Setup Git hooks (Husky) |

## Project Structure

```
src/
├── actions/          # Server Actions for mutations
├── app/              # App Router (routes, layouts, API)
├── components/       # Reusable React components
│   ├── ui/          # Shadcn/ui base components
│   ├── forms/       # Form components
│   └── layout/      # Layout components
├── config/          # App configuration
├── constants/       # Routes, API endpoints, app constants
├── hooks/           # Custom React hooks
├── lib/             # Utilities & shared code
├── middleware/      # Next.js middleware
├── services/        # External API integrations
├── styles/          # Additional styles
└── types/           # TypeScript definitions
```

### Key Directories

- **`app/`** - File-based routing with App Router
  - Route groups `(name)` for organization without URL path
  - `api/` for Route Handlers (API endpoints)
  - `layout.tsx` for shared UI
  - `page.tsx` for route pages

- **`components/ui/`** - Shadcn/ui components
  - Button, Card, Input, Label, and more
  - Fully customizable with Tailwind
  - Copy-paste components

- **`components/`** - React components
  - `ui/` - Reusable base components (Button, Input, etc.)
  - `forms/` - Form-specific components
  - `layout/` - Header, Footer, Sidebar, etc.

- **`lib/`** - Shared utilities and helpers
  - `cn()` - Class name merger for Tailwind
  - Database clients
  - API functions

- **`actions/`** - Server Actions
  - Form submissions
  - Data mutations

- **`hooks/`** - Custom React hooks
  - Reusable stateful logic

- **`config/`** - App configuration
  - Site config, feature flags

- **`constants/`** - App constants
  - Route definitions
  - API endpoints

- **`services/`** - External API integrations
  - Third-party service wrappers

## Adding Shadcn/ui Components

```bash
# Add a component
npx shadcn@latest add [component-name]

# Examples
npx shadcn@latest add badge
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

[View all available components](https://ui.shadcn.com/docs/components)

## Features

- [x] App Router with file-based routing
- [x] TypeScript for type safety
- [x] Tailwind CSS with custom theme
- [x] Shadcn/ui components
- [x] Route Handlers for API endpoints
- [x] Server Actions for mutations
- [x] Route groups for organization
- [x] ESLint for code quality
- [x] Prettier for formatting
- [x] Husky + lint-staged for pre-commit hooks
- [x] Dark mode support (CSS variables)
- [x] Absolute imports (`@/`)

## Code Quality

### Formatting

Prettier automatically formats your code on commit. Run manually:

```bash
npm run format
```

### Pre-commit Hooks

Husky runs lint-staged before each commit:
- Formats all files with Prettier
- Fixes ESLint issues in TypeScript/JavaScript files

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
