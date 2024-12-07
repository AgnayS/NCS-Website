#!/bin/bash

# Create the main project directory
echo "Creating project directory structure..."

# Create src directory and its subdirectories
mkdir -p src/{app/{about,our-work,support-us},components/{layout,sections/{home,work,about},ui},lib/{constants,utils},styles,types}

# Create app router files
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/about/page.tsx
touch src/app/our-work/page.tsx
touch src/app/support-us/page.tsx

# Create layout components
touch src/components/layout/{Header,Footer,Navigation}.tsx

# Create section components
touch src/components/sections/home/{Hero,Featured}.tsx
touch src/components/sections/work/{Conservation,Community,Research}.tsx
touch src/components/sections/about/{History,Team}.tsx

# Create UI components
touch src/components/ui/{Button,Card,Container}.tsx

# Create lib files
touch src/lib/constants/{navigation,content}.ts
touch src/lib/utils/animations.ts

# Create style files
touch src/styles/globals.css

# Create type definitions
touch src/types/index.ts

# Create public directory and its subdirectories
mkdir -p public/images/{hero,conservation,team}
touch public/favicon.ico

# Create root configuration files
echo "Creating configuration files..."

# Create minimal package.json if it doesn't exist
if [ ! -f package.json ]; then
  echo '{
  "name": "ncs-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}' > package.json
fi

# Create tsconfig.json if it doesn't exist
if [ ! -f tsconfig.json ]; then
  echo '{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}' > tsconfig.json
fi

# Create next.config.js
echo "/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
}

module.exports = nextConfig" > next.config.js

# Create tailwind.config.js
echo "/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          900: '#14532d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}" > tailwind.config.js

# Create base globals.css
echo "@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }
}

@layer base {
  body {
    @apply bg-background text-foreground;
  }
}" > src/styles/globals.css

echo "Directory structure and base files created successfully!"

# Make the script create files with appropriate permissions
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;

# Install necessary dependencies
echo "Installing dependencies..."
pnpm add next@latest react@latest react-dom@latest
pnpm add -D typescript @types/node @types/react @types/react-dom
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D framer-motion
pnpm add -D @tailwindcss/typography

echo "Setup complete! You can now start developing your NCS website."
echo "Run 'pnpm dev' to start the development server."