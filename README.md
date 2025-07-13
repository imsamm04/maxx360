# Max360 Project

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with modern features
- 🏷️ **TypeScript** - Type safety and better development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📁 **Path Aliases** - Clean imports with `@/` prefix
- 🧩 **Component Library** - Reusable UI components
- 🛠️ **ESLint** - Code linting and formatting

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable components
│   ├── common/      # Common shared components
│   └── ui/          # UI components (Button, Input, etc.)
├── pages/           # Page components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions and helpers
├── App.tsx          # Main App component
├── main.tsx         # Application entry point
└── index.css        # Global styles with Tailwind directives
```

## 🔧 Path Aliases

The project is configured with the following path aliases:

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/pages/*` → `./src/pages/*`
- `@/utils/*` → `./src/utils/*`
- `@/types/*` → `./src/types/*`
- `@/assets/*` → `./src/assets/*`

### Example Usage

```tsx
import { Button } from '@/components/ui'
import { formatNumber } from '@/utils/helpers'
import type { User } from '@/types'
```

## 🎨 Tailwind CSS

Tailwind CSS is configured and ready to use. The configuration includes:

- **Content paths**: Automatically purges unused styles
- **Custom theme**: Extendable theme configuration

### Example Classes

```tsx
<div className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold mb-4">Hello World</h1>
  <button className="bg-white text-blue-500 px-4 py-2 rounded transition-colors">
    Click me
  </button>
</div>
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM rendering

### Development
- `@types/node` - Node.js TypeScript definitions
- `@types/react` - React TypeScript definitions
- `@types/react-dom` - React DOM TypeScript definitions
- `@vitejs/plugin-react` - Vite React plugin
- `autoprefixer` - CSS autoprefixer
- `eslint` - Code linting
- `tailwindcss` - Utility-first CSS framework
- `typescript` - TypeScript compiler
- `vite` - Build tool and dev server

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript project configuration
- `tsconfig.app.json` - App-specific TypeScript config with path mapping
- `eslint.config.js` - ESLint configuration

## ✅ Setup Complete

The project now includes:

- ✅ **Tailwind CSS** - Fully configured and working
- ✅ **Path Aliases** - TypeScript and Vite configured for `@/` imports
- ✅ **Component Structure** - Example UI components in `src/components/ui/`
- ✅ **Type Definitions** - Custom types in `src/types/`
- ✅ **Utility Functions** - Helper functions in `src/utils/`
- ✅ **Modern UI** - Beautiful gradient design with Tailwind classes
