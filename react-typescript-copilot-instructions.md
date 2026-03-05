
# GitHub Copilot Instructions for React + TypeScript Application

## 📋 Project Overview
This is a React + TypeScript application built using modern JavaScript tooling and strongly typed development practices.

The project prioritizes:
- strict TypeScript usage
- modular React component architecture
- predictable state management
- maintainable, testable frontend code
- performance-focused UI development

---

# 🛠 Technology Stack

- Language: TypeScript
- Framework: React
- Runtime / Tooling: Node.js
- Package Manager: npm
- Build System: Vite / Webpack / modern bundler
- Testing: Vitest / Jest + React Testing Library
- Linting: ESLint
- Formatting: Prettier

---

# 📁 Project Structure

src/
  components/
  pages/
  hooks/
  services/
  api/
  types/
  utils/
  styles/
  context/

tests/
public/

Folder responsibilities:

components/ – reusable UI components  
pages/ – route-level pages  
hooks/ – custom React hooks  
services/ – business logic  
api/ – API communication layer  
types/ – global TypeScript types  
utils/ – helper functions  
styles/ – styling and themes

---

# 💻 Code Style & Conventions

## TypeScript Guidelines

- Strict typing required
- Avoid `any`
- Prefer `unknown` if type is uncertain
- Use interfaces for object contracts
- Use type aliases for unions or complex types

Example:

interface User {
  id: string
  name: string
  email: string
}

---

## Naming Conventions

Components: PascalCase  
Hooks: useCamelCase  
Variables: camelCase  
Types: PascalCase  
Constants: UPPER_CASE  

Example file names:

UserProfile.tsx  
use-auth.ts  
api-client.ts

---

## Function Guidelines

Prefer arrow functions.

Example:

const getUser = async (id: string): Promise<User> => {
  const response = await api.get(`/users/${id}`)
  return response.data
}

---

# ⚛️ React Guidelines

## Component Architecture

Prefer functional components.

Example:

type Props = {
  user: User
}

export const UserCard = ({ user }: Props) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
}

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

Reusable logic should be placed in custom hooks such as:

useAuth()  
useApi()  
usePagination()

---

# 🌐 API & Data Fetching Guidelines

API calls belong in:

src/services  
or  
src/api

Never place API logic directly inside React components.

Example:

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get("/users")
  return response.data
}

---

# 🎨 Styling Guidelines

Preferred styling approaches:

- CSS Modules
- Tailwind
- Component-scoped CSS
- Styled Components

Avoid large global CSS files.

Example structure:

UserCard.tsx  
UserCard.module.css

---

# 📱 Responsive Design

Layouts must support:
- desktop
- tablet
- mobile

Preferred layout systems:

flexbox  
CSS grid

Prefer relative units:

rem  
em  
%

Avoid fixed pixel layouts where possible.

---

# 🧪 Testing Guidelines

Focus testing on:
- component behaviour
- business logic
- service interactions

Tools:

Vitest / Jest  
React Testing Library

Naming pattern:

Component_Scenario_ExpectedResult

Example:

UserCard_WithValidUser_RendersCorrectData  
LoginForm_InvalidCredentials_ShowsError

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

<button aria-label="Close dialog"></button>

---

# ⚡ Performance

Prioritise:

- lazy loading
- code splitting
- memoisation
- avoiding unnecessary renders

Example:

const SettingsPage = React.lazy(() => import("./SettingsPage"))

---

# 📂 File Organization

Group files by feature.

Example:

components/
  user/
    UserCard.tsx
    UserCard.module.css
    UserCard.test.tsx

Keep related files together.
