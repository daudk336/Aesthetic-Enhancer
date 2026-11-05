# Aesthetic Enhancer

A full-stack web application built with React, TypeScript, and Express, with a component-driven interface and a PostgreSQL-backed data layer.

## Technology

- **Frontend:** React 18, Vite, TypeScript
- **Backend:** Node.js, Express 5
- **Database:** PostgreSQL with Drizzle ORM
- **UI:** Radix UI, Tailwind CSS, Framer Motion, Lucide
- **Validation & forms:** Zod, React Hook Form

## Getting started

### Requirements
- Node.js
- PostgreSQL
- npm

### Install and configure
```bash
npm install
```

Create a local environment file and configure the database connection required by the application.

### Development
```bash
npm run dev
```

### Quality checks and production build
```bash
npm run check
npm run build
npm start
```

Database schema changes can be pushed with `npm run db:push` after configuring the database.

## Project notes

This repository contains a full-stack application. Review the server and client configuration before deploying, and keep credentials and environment-specific values out of source control.

## License

MIT
