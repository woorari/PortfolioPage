
# Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite, featuring a blog, CV section, and project showcase.

## Features

- Portfolio showcase with project filtering
- Blog section with Markdown support
- Interactive CV with PDF download
- Contact form integration
- Responsive design

## Tech Stack

- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Sequelize

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The server will run on http://0.0.0.0:3001

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## API Endpoints

- `/api/portfolio` - Portfolio projects
- `/api/blog` - Blog posts
- `/api/cv` - CV data
- `/api/contact` - Contact form submissions

## Testing

Run the test suite:
```bash
npm run test
```

## Folder Structure

```
src/
  ├── components/    # Reusable components
  ├── pages/         # Page components
  ├── server/        # Backend API
  ├── models/        # Database models
  ├── utils/         # Utility functions
  └── tests/         # Test files
```

## ESLint Configuration

The project uses ESLint with TypeScript support. Configuration can be found in `eslint.config.js`.
