# Vite Monorepo Example

This repository demonstrates a monorepo setup using Vite, React 19, and TypeScript, where a component library (`components-lib`) serves as a design system that is consumed by an application (`app`).

## Project Structure

```
monorepo/
├── app/                   # Consumer application
│   ├── src/               # Application source code
│   ├── package.json       # App-specific dependencies
│   └── vite.config.ts     # App-specific Vite configuration
├── components-lib/        # Design system / Component library
│   ├── src/               # Component source files
│   ├── package.json       # Library-specific dependencies
│   └── vite.config.ts     # Library build configuration
└── package.json           # Monorepo root with workspace configuration
```

## Features

- 📦 **Workspace Management**: Uses npm workspaces for package management
- ⚡ **Fast Development**: Powered by Vite for both component library and application
- 🔄 **Live Reloading**: Changes to the component library are immediately reflected in the app
- 📐 **TypeScript Support**: Full type definitions across the codebase
- 🧩 **Modular Design**: Clear separation between design system and consumer application

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v8.0.0 or higher)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd monorepo

# Install dependencies for all workspaces
npm install
```

### Development

The monorepo provides several development scripts:

```bash
# Start the component library in watch mode and the app development server
npm run dev

# Start only the component library in watch mode
npm run dev:components

# Start only the app development server
npm run dev:app
```

When you run `npm run dev`, the component library will build in watch mode and the app will start its development server. Any changes you make to the component library will automatically rebuild and reflect in the app due to the live module replacement in Vite.

### Building for Production

To build all packages for production:

```bash
npm run build
```

This will build both the component library and the application.

## How It Works

### Component Library (`components-lib`)

The component library serves as a design system containing reusable UI components. Key points:

- Built with Vite and configured as a library
- Generates TypeScript definitions (via `vite-plugin-dts`)
- Exports React components in ES module format
- Configured for development with watch mode to recompile on changes

### Application (`app`)

The application consumes the component library and implements the final product:

- Imports components directly from the component library
- Hot module reloading for development
- Uses the same React version as the component library

### Workspace Integration

The monorepo setup allows for:

- Shared dependencies to avoid duplication
- Simplified versioning and package management
- Consistent development environment
- Direct imports between packages without publishing

## Contributing

1. Make changes to the component library or app
2. Run tests if applicable
3. Submit a pull request

## License

[ISC License](LICENSE)
