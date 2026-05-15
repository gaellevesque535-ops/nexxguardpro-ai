# Marketing Site with AI Assistant

An interactive marketing site with an AI-powered product assistant. Built with TanStack Start and deployed on Netlify.

## Tech Stack

- **Framework**: TanStack Start
- **Frontend**: React 19, TanStack Router v1
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4
- **AI**: TanStack AI with multi-provider support
- **Language**: TypeScript 5.7 (strict mode)
- **Deployment**: Netlify

## Running Locally

### Prerequisites

- Node.js v18+
- npm / pnpm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables. Create a `.env` file with one of the following AI provider keys:
   ```
   ANTHROPIC_API_KEY=...
   # or
   OPENAI_API_KEY=...
   # or
   GEMINI_API_KEY=...
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/   # UI and feature components
├── data/         # Static product catalog
├── lib/          # Hooks and AI tools
├── routes/       # File-based routes (TanStack Router)
├── store/        # Zustand global state
└── styles.css    # Global styles
public/
└── _redirects    # Netlify SPA redirect rules
```
