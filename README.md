# QuizPulse ⚡️

QuizPulse is a complete, production-ready daily trivia and quiz web application built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

- **Daily Quiz**: 10 fresh questions every day, resetting at midnight.
- **Lightning Round**: A fast-paced 60-second challenge.
- **Streak System**: Keep your daily streak alive to earn more XP.
- **Global Leaderboard**: Compete with players worldwide.
- **Personal Stats**: Detailed analytics of your performance and strongest categories.
- **Achievement Badges**: 12+ unique badges to unlock.
- **Premium Tier**: Unlock unlimited replays, all categories, and no ads via Stripe.
- **Mobile-First Design**: Vibrant, energetic design that works perfectly on any device.
- **Demo Mode**: Works out-of-the-box with 100+ pre-loaded questions without needing Supabase.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Backend/Database**: Supabase
- **Payments**: Stripe
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd quizpulse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

The Supabase schema is included in `supabase-schema.sql`. You can run this in the Supabase SQL Editor to set up your tables and RLS policies.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
  - `landing`: Components for the homepage.
  - `game`: Core quiz game components.
  - `layout`: Shared layout components (Navbar, Footer).
- `src/context`: Game state management using React Context.
- `src/data`: Pre-loaded quiz questions.
- `src/types`: TypeScript interfaces and types.

## License

MIT
