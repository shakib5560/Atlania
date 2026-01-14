# Atlania - Modern Tech Blog

![Atlania Preview](/public/preview.png)

Atlania is a premium, high-performance blog website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. It features a modern design with dark mode support, smooth scroll animations, and a fully responsive layout.

## 🚀 Features

-   **Modern Tech Stack**: Built with Next.js 16 (App Router) and React 19.
-   **Premium UI/UX**: Clean typography, bento-grid layouts, and glassmorphism effects.
-   **Dark Mode**: Fully supported dark/light theme switching using `next-themes`.
-   **Animations**: Stunning entrance and scroll animations powered by `framer-motion`.
-   **Responsive Design**: optimized for mobile, tablet, and desktop devices.
-   **Dynamic Routing**: Individual article pages (`/article/[id]`) with dynamic data rendering.
-   **Typography**: Beautiful reading experience with `@tailwindcss/typography`.

## 🛠️ Technologies

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
-   **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

## 📂 Project Structure

```bash
src/
├── app/                  # App Router pages and layouts
│   ├── article/[id]/     # Dynamic Article Details page
│   ├── blog/             # All Articles page
│   ├── feature/          # Feature Highlights page
│   └── globals.css       # Global styles and variables
├── components/           # Reusable UI components
│   ├── home/             # Homepage specific sections
│   ├── layout/           # Global Header and Footer
│   └── ui/               # Core UI primitives (Button, Card, etc.)
└── lib/                  # Utilities and mock data
```

## ⚡ Getting Started

Follow these steps to set up the project locally:

### 1. Prerequisites

Ensure you have **Node.js** (v18 or later) installed on your machine.

### 2. Installation

Install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Running Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Configuration

### Tailwind CSS
The project uses Tailwind CSS v3. Configuration can be found in `tailwind.config.ts`.
Variables for colors and radius are defined in `src/app/globals.css` using HSL values for dynamic theming.

### Mock Data
Currently, the blog uses static mock data located in `src/lib/mockData.ts`. You can modify this file to add or change articles.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.
