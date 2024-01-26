# Next.js GraphQL Starter Pack

### Welcome to the Next.js GraphQL Starter Pack! 🚀 This open-source project is tailored for beginners looking to learn GraphQL using Next.js and App Router. If you've been struggling with GraphQL integration or understanding its concepts, this starter pack is here to make your journey smoother.

## Live Demo

Check out the live demo [here](https://graphql-prisma-for-beginners.vercel.app).

## Deploy to Vercel With Just One Click 

[![Deploy to Vercel](https://vercel.com/button)]([https://vercel.com/import/project?template=https://github.com/your-username/your-repo](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdevdaim6%2Fnextjs-graphql-prisma-for-beginners))

## Table of Contents

- [Getting Started](#getting-started)
  - [Clone the Repository](#1-clone-the-repository)
  - [Install Dependencies](#2-install-dependencies)
  - [Configure Prisma and PostgreSQL](#3-configure-prisma-and-postgresql)
  - [Migrate and Seed the Database](#4-migrate-and-seed-the-database)
  - [Configure GraphQL Endpoint](#5-configure-graphql-endpoint)
  - [Run the Application](#6-run-the-application)
  - [Features](#7-features)
  - [Folder Structure](#8-folder-structure)
- [Contributing](#9-contributing)
- [License](#10-license)

## Getting Started

## 1-Clone the Repository

```bash
   git clone https://github.com/devdaim6/nextjs-graphql-prisma-for-beginners.git
   cd nextjs-graphql-prisma-for-beginners
```

## 2-Install Dependencies

```bash
   npm install
   # or
   yarn install
```

## 3-Configure Prisma and PostgreSQL

Create a .env file and configure your PostgreSQL connection URL:

```bash
   DATABASE_URL = "postgresql://username:password@localhost:5432/yourdatabase"
```

Update the schema.prisma file with your database connection details.

## 4-Migrate and Seed the Database

Run the following commands to apply migrations and seed data:

```bash
   npx prisma migrate dev
   npx prisma db seed --preview-feature
```

**OR**

**Create a new Instance**

```bash
   npx prisma init
   npx prisma db push
   npx prisma generate
```

## 5-Configure GraphQL Endpoint

Open the .env file and replace the placeholder with your GraphQL endpoint:

```bash
   NEXT_PUBLIC_GRAPHQL_ENDPOINT=YOUR_GRAPHQL_ENDPOINT
```

## 6-Run the Application

```bash
   npm run dev
   # or
   yarn dev
```

**Visit http://localhost:3000 in your browser to see the magic happen!**

## 7-Features

- **GraphQL Integration:** Easily connect and interact with GraphQL APIs.
- **Next.js and App Router:** Leverage the power of Next.js for server-side rendering and App Router for seamless navigation.
- **Prisma ORM:** Use Prisma for type-safe database access.
- **PostgreSQL Integration:** Store your data in a PostgreSQL database.
- **Beginner-Friendly:** The project structure and codebase are designed to be beginner-friendly, making it easy to understand GraphQL concepts.

## 8-Folder Structure

```lua
nextjs-graphql-prisma-for-beginners/
|-- .next/
|-- app/
|   |-- graphql/
|   |   |-- gql/
|   |   |   |-- route.ts
|   |   |-- resolvers.ts
|   |   |-- schema.ts
|   |   |-- typeDefs.ts
|   |-- user/
|   |   |-- Add/
|   |   |   |-- page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- DisplayData.jsx
|-- prisma/
|   |-- schema.prisma
|-- utils/
|   |-- prisma.ts
|   |-- util.ts
|-- .env
|-- .eslintrc.json
|-- .gitignore
|-- next.config.mjs
|-- next-env.d.ts
|-- node_modules/
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.ts
|-- tsconfig.json
```

## 9-Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. We welcome contributions from the community to make this starter pack even more beneficial for beginners.

## 10-License

    This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.

# Happy coding! 🚀
