# PBR Drafting App

A modern legal drafting application for matter management, intake processing, evidence organization, and document drafting. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Dashboard** — Overview of active matters, pending intake, evidence items, and drafts
- **Matter Overview** — Browse and manage all legal matters
- **Intake** — Submit new matter intake forms with autosave
- **Evidence Workspace** — Search, filter, and organize evidence across matters
- **Draft Workspace** — Create and edit legal documents with autosave

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint (with Next.js config)
- **Formatting:** Prettier
- **CI:** GitHub Actions

## Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+
- **VS Code** (recommended, with suggested extensions)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/simon1971/pbrv7.git
cd pbrv7

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### VS Code Setup

When you open this project in VS Code, you'll be prompted to install recommended extensions:

- **ESLint** — Linting in the editor
- **Prettier** — Code formatting on save
- **Tailwind CSS IntelliSense** — Autocomplete for Tailwind classes

Settings are preconfigured in `.vscode/settings.json` for format-on-save and ESLint auto-fix.

## Available Scripts

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start development server          |
| `npm run build`        | Create production build           |
| `npm start`            | Start production server           |
| `npm run lint`         | Run ESLint                        |
| `npm run lint:fix`     | Run ESLint with auto-fix          |
| `npm run format`       | Format code with Prettier         |
| `npm run format:check` | Check formatting without changes  |
| `npm test`             | Run tests                         |
| `npm run test:watch`   | Run tests in watch mode           |
| `npm run test:ci`      | Run tests with coverage (CI mode) |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Dashboard (home page)
│   ├── layout.tsx        # Root layout with navigation
│   ├── globals.css       # Global styles
│   ├── matters/          # Matter Overview page
│   ├── intake/           # Intake form page
│   ├── evidence/         # Evidence Workspace page
│   └── drafts/           # Draft Workspace page
├── components/           # Shared UI components
│   ├── Navigation.tsx    # Responsive navigation bar
│   ├── PageHeader.tsx    # Page header with title/description
│   ├── Card.tsx          # Card container component
│   ├── StatusBadge.tsx   # Status indicator badges
│   └── AutosaveIndicator.tsx  # Autosave status indicator
__tests__/                # Test files
├── components/           # Component unit tests
└── pages/                # Page integration tests
```

## Contributing

### Pull Request Guidelines

1. **Branch naming:** Use descriptive branch names (e.g., `feature/intake-validation`, `fix/navigation-mobile`)
2. **Commits:** Write clear, concise commit messages
3. **Tests:** Add or update tests for any new functionality
4. **Linting:** Ensure `npm run lint` and `npm run format:check` pass before submitting
5. **Review:** All PRs require at least one code review approval

### Code Review Checklist

- [ ] Code follows existing patterns and conventions
- [ ] TypeScript types are properly defined
- [ ] Components are responsive (tested on mobile and desktop viewports)
- [ ] Tests are included and passing
- [ ] No console errors or warnings
- [ ] Accessibility considerations are addressed

## Non-Functional Requirements

- **Reliability:** Error boundaries and graceful degradation for all pages
- **Autosave:** Stub implementation in intake and draft forms (saves on input change)
- **Performance:** Static rendering where possible, minimal client-side JavaScript
- **Responsive:** Fully usable on desktop (1024px+) and mobile (320px+) viewports

## License

Private — All rights reserved.
