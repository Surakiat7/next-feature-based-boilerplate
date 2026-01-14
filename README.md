# Next.js Feature-Based Boilerplate

A modern, production-ready Next.js starter template with **feature-based architecture**, **TailwindCSS v4**, **shadcn/ui**, **dark mode**, and comprehensive testing setup.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🏗️ **Feature-Based Architecture** - Organized codebase with feature folders for scalable development
- 🎨 **shadcn/ui Components** - Beautiful, accessible, and customizable UI components
- 🌙 **Dark Mode** - Built-in theme support with Light, Dark, and System modes using next-themes
- 🧪 **Testing Ready** - Pre-configured Jest unit tests and Playwright E2E tests
- 📝 **TypeScript** - Full TypeScript support for type-safe development
- ⚡ **Turbopack** - Fast development with Next.js Turbopack

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   ├── counter/page.tsx          # Counter demo page
│   └── about/page.tsx            # About page
├── components/
│   ├── common/                   # Common components
│   │   └── ThemeToggle.tsx       # Theme switcher component
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer
│   │   └── MainLayout.tsx        # Main layout wrapper
│   └── ui/                       # Design tokens (shadcn/ui)
│       ├── button.tsx
│       └── card.tsx
├── features/                     # Feature-based modules
│   ├── counter/
│   │   ├── components/           # Feature-specific components
│   │   ├── hooks/                # Feature-specific hooks
│   │   └── views/                # Feature views
│   ├── home/
│   │   └── views/
│   └── about/
│       └── views/
├── providers/                    # Global providers
│   └── ThemeProvider.tsx
├── lib/                          # Utility functions
├── tests/                        # Unit tests (Jest)
└── e2e/                          # E2E tests (Playwright)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Surakiat7/next-feature-based-boilerplate.git
cd next-feature-based-boilerplate

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server with Turbopack |
| `bun run build` | Build for production |
| `bun start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun test` | Run unit tests (Jest) |
| `bun test:watch` | Run unit tests in watch mode |
| `bun test:coverage` | Run unit tests with coverage report |
| `bun test:e2e` | Run E2E tests (Playwright) |
| `bun test:e2e:ui` | Run E2E tests with UI |

## 🧪 Testing

### Unit Tests (Jest)

```bash
# Run all unit tests
bun test

# Run tests in watch mode
bun test:watch

# Run tests with coverage
bun test:coverage
```

### E2E Tests (Playwright)

```bash
# Run E2E tests
bun test:e2e

# Run E2E tests with UI
bun test:e2e:ui
```

## 🎨 Theme Support

This boilerplate includes built-in dark mode support with three options:

- **Light** - Light theme
- **Dark** - Dark theme  
- **System** - Follows system preference

Click the theme toggle button in the header to switch between themes.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Testing:** [Jest](https://jestjs.io/) + [Playwright](https://playwright.dev/)
- **Package Manager:** [Bun](https://bun.sh/)

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
