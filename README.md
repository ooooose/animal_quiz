# Next.js 16 Demo - Todo Application

A modern Todo application built with Next.js 16 to demonstrate the latest features .

## Architecture

This project follows a modern full-stack architecture with the following technology stack:

| Layer | Technology | Description |
|-------|------------|-------------|
| Frontend | Next.js 16 + TypeScript | React-based framework with App Router and TypeScript for type safety |
| Database | Supabase (PostgreSQL) | Cloud-hosted PostgreSQL database with real-time capabilities |
| Deployment | Vercel | Serverless deployment platform optimized for Next.js |
| Authentication | NextAuth.js | Secure authentication with multiple provider support |
| Styling | Tailwind CSS | Utility-first CSS framework for rapid UI development |
| Data Fetching | React Query (TanStack Query) | Powerful data synchronization for React applications |
| Validation | Zod | TypeScript-first schema validation library |

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager
- Supabase account (for database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ooooose/next16-demo.git
   cd next16-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `NEXTAUTH_SECRET`: A random secret for NextAuth.js
   - `NEXTAUTH_URL`: Your application URL (http://localhost:3000 for development)

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure（WIP）

```
next16-demo/
├── app/                    # Next.js App Router directory
│   ├── api/               # API routes
│   ├── components/        # Reusable UI components
│   ├── lib/              # Utility functions and configurations
│   └── page.tsx          # Main page component
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── README.md            # Project documentation
```

## Development

### Code Style

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
