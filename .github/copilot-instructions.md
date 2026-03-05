
# GitHub Copilot Instructions for PBR Next.js Application

## 📋 Project Overview

This is a **Next.js 16 + TypeScript** application using the App Router, built for a legal practice management platform (PBR).

The project prioritizes:
- strict TypeScript usage
- modular React component architecture
- Next.js App Router conventions
- maintainable, testable frontend code
- performance-focused UI development

---

# 🛠 Technology Stack

- Language: TypeScript
- Framework: Next.js (App Router)
- Runtime / Tooling: Node.js
- Package Manager: npm
- Styling: Tailwind CSS
- Testing: Jest + React Testing Library
- Linting: ESLint
- Formatting: Prettier

---

# 📁 Project Structure

src/
  app/          – Next.js App Router pages and layouts
  components/   – shared reusable UI components

__tests__/      – Jest test files mirroring src/ structure
public/         – static assets

Folder responsibilities:

app/ – route-level pages using Next.js App Router  
components/ – reusable UI components shared across pages

---

# 💻 Code Style & Conventions

## TypeScript Guidelines

- Strict typing required
- Avoid `any`
- Prefer `unknown` if type is uncertain
- Use interfaces for object contracts
- Use type aliases for unions or complex types

Example:

```typescript
interface Matter {
  id: number
  name: string
  client: string
  status: "active" | "draft" | "completed"
}
```

---

## Naming Conventions

Components: PascalCase  
Hooks: useCamelCase  
Variables: camelCase  
Types: PascalCase  
Constants: UPPER_CASE  

Example file names:

PageHeader.tsx  
MatterCard.tsx  
use-auth.ts

---

## Function Guidelines

Prefer arrow functions.

Example:

```typescript
const getMatter = async (id: number): Promise<Matter> => {
  const response = await api.get(`/matters/${id}`)
  return response.data
}
```

---

# ⚛️ React & Next.js Guidelines

## Component Architecture

Prefer functional components with explicit TypeScript props types.

Example:

```typescript
type Props = {
  title: string
  description?: string
}

export const PageHeader = ({ title, description }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}
```

---

## Next.js App Router Conventions

- Place pages in `src/app/` following the App Router file conventions (`page.tsx`, `layout.tsx`)
- Use Server Components by default; add `"use client"` only when needed (interactivity, hooks)
- Shared layouts go in `layout.tsx`
- Use `loading.tsx` and `error.tsx` for loading and error states

---

## Component Design Principles

Components should be:
- small
- focused
- reusable
- predictable

Avoid components larger than ~200 lines.

Extract reusable logic into hooks.

---

## Hooks Usage

Common hooks:

useState  
useEffect  
useMemo  
useCallback  
useRef  

Reusable logic should be placed in custom hooks.

---

# 🎨 Styling Guidelines

This project uses **Tailwind CSS** exclusively.

- Use Tailwind utility classes for all styling
- Avoid inline styles or separate CSS files unless strictly necessary
- Follow mobile-first responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Use Tailwind's `backdrop-blur`, `shadow`, and opacity utilities for the glassmorphism design style used in this project

Example:

```tsx
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
  {/* card content */}
</div>
```

---

# 📱 Responsive Design

Layouts must support:
- desktop
- tablet
- mobile

Use Tailwind's responsive prefixes:

```
sm:   md:   lg:   xl:
```

Prefer grid and flexbox utilities.

---

# 🧪 Testing Guidelines

Focus testing on:
- component behaviour
- rendering with different props
- user interactions

Tools:

Jest  
React Testing Library

Test files live in `__tests__/` mirroring the `src/` structure.

Naming pattern:

`ComponentName.test.tsx`

Example test structure:

```typescript
import { render, screen } from "@testing-library/react"
import Dashboard from "@/app/page"

describe("Dashboard", () => {
  it("renders the dashboard heading", () => {
    render(<Dashboard />)
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  })
})
```

---

# 🔒 Security

Always:
- validate user input
- sanitise dynamic content
- avoid exposing secrets
- use environment variables

Use:

.env  
.env.local

Never commit secrets.

---

# ♿ Accessibility

Follow accessibility best practices:

- semantic HTML
- alt text for images
- keyboard navigation support
- ARIA attributes when required

Example:

```html
<button aria-label="Close dialog"></button>
```

---

# ⚡ Performance

Prioritise:

- Server Components where possible (no client-side JS)
- lazy loading for large client components
- code splitting
- memoisation
- avoiding unnecessary renders

Example:

```typescript
const HeavyComponent = React.lazy(() => import("./HeavyComponent"))
```

---

# 📂 File Organization

Group files by feature or route.

Example:

```
src/app/matters/
  page.tsx

src/components/
  PageHeader.tsx
  Card.tsx

__tests__/pages/
  Matters.test.tsx
```

Keep related files together.
