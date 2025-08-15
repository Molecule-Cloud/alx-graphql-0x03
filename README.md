# 🚀 GraphQL Rick and Morty Project

A comprehensive project series exploring GraphQL concepts through the Rick and Morty API, progressing from basic queries to a full React application.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Tasks](#tasks)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## 🎯 Overview

This project series is designed to teach GraphQL fundamentals through practical implementation with the Rick and Morty API. Students will progress through multiple phases:

1. **GraphQL Queries** - Learn to write basic GraphQL queries
2. **Character & Episode Queries** - Fetch specific data using IDs and pagination
3. **React Integration** - Build a Next.js application with Apollo Client
4. **Full Application** - Create a complete Rick and Morty episode browser

## 📁 Project Structure

```
alx-graphql-projects/
├── alx-graphql-0x00/
│   ├── character/
│   │   ├── README.md
│   │   ├── character-id-*.graphql
│   │   └── character-id-*-output.json
│   └── episode/
│       ├── README.md
│       ├── episode-page-*.graphql
│       └── episode-page-*-output.json
├── alx-graphql-0x01/
│   └── alx-rick-and-morty-app/
│       ├── graphql/
│       │   ├── apolloClient.ts
│       │   └── queries.ts
│       └── pages/
│           └── _app.tsx
└── alx-graphql-0x02/
    └── alx-rick-and-morty-app/
        ├── components/common/
        │   └── EpisodeCard.tsx
        ├── interfaces/
        │   └── index.ts
        ├── graphql/
        └── pages/
```

## 🔧 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of JavaScript/TypeScript
- Understanding of React concepts
- GraphQL fundamentals

## 📚 Tasks

### Task 0: Character Queries by ID
Write GraphQL queries to fetch specific character information using character IDs (1-4).

**Required Fields:**
- `id`
- `name`
- `status`
- `species`
- `type`
- `gender`

### Task 1: Paginated Character List
Create queries to retrieve paginated lists of characters (pages 1-4).

**Required Fields:**
- `id`
- `name`
- `status`
- `image`

### Task 2: Episode Queries by ID
Fetch episode details using GraphQL queries with episode IDs.

**Required Fields:**
- `id`
- `name`
- `air_date`
- `episode`

### Task 3: React Application Setup
Initialize a Next.js application with TypeScript, Apollo Client, and GraphQL integration.

**Key Components:**
- Apollo Client configuration
- GraphQL query definitions
- Provider setup in `_app.tsx`

### Task 4: Complete Episode Browser
Build a full-featured episode browser with pagination and interactive cards.

**Features:**
- Episode listing with cards
- Pagination controls
- Responsive design
- Loading and error states

## 🚀 Getting Started

### For GraphQL Queries (Tasks 0-2)

1. Use the Rick and Morty GraphQL endpoint:
   ```
   https://rickandmortyapi.com/graphql
   ```

2. Test your queries using GraphQL Playground or any GraphQL client

3. Save queries as `.graphql` files and outputs as `.json` files

### For React Application (Tasks 3-4)

1. **Clone and setup:**
   ```bash
   git clone <repository-url>
   cd alx-graphql-0x01/alx-rick-and-morty-app
   npm install
   ```

2. **Install GraphQL dependencies:**
   ```bash
   npm install @apollo/client graphql
   npm install @types/graphql
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **View application:**
   Open [http://localhost:3000](http://localhost:3000)

## 🛠 Technologies Used

- **GraphQL** - Query language and runtime
- **Next.js** - React framework with TypeScript
- **Apollo Client** - GraphQL client library
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - JavaScript linting utility

## 🌐 API Endpoints

### Rick and Morty GraphQL API
- **Endpoint:** `https://rickandmortyapi.com/graphql`
- **Documentation:** [Rick and Morty API Docs](https://rickandmortyapi.com/documentation)

### Available Queries
- `character(id: ID!)` - Get character by ID
- `characters(page: Int, filter: FilterCharacter)` - Get paginated characters
- `episode(id: ID!)` - Get episode by ID
- `episodes(page: Int, filter: FilterEpisode)` - Get paginated episodes

## 📝 Example Queries

### Get Character by ID
```graphql
query GetCharacter($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    type
    gender
  }
}
```

### Get Episodes with Pagination
```graphql
query GetEpisodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    info {
      pages
      next
      prev
      count
    }
    results {
      id
      name
      air_date
      episode
    }
  }
}
```

## 🎨 Features

- 📱 **Responsive Design** - Works on all device sizes
- 🔄 **Pagination** - Navigate through episodes seamlessly
- 🎭 **Interactive Cards** - Hover effects and smooth transitions
- ⚡ **Fast Loading** - Optimized with Next.js and Apollo Client
- 🎯 **TypeScript** - Full type safety throughout the application
- 🎨 **Modern UI** - Beautiful gradient backgrounds and card designs

## 📋 Development Guidelines

1. **Code Quality:**
   - Use TypeScript for type safety
   - Follow ESLint rules
   - Maintain consistent code formatting

2. **Component Structure:**
   - Keep components small and focused
   - Use proper TypeScript interfaces
   - Implement proper error handling

3. **GraphQL Best Practices:**
   - Use fragments for reusable fields
   - Implement proper error handling
   - Optimize queries for performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the ALX curriculum and is intended for educational purposes.

## 🙏 Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the GraphQL endpoint
- ALX for the comprehensive curriculum structure
- The Rick and Morty creators for the amazing content

---

**Happy Coding! 🚀✨**

*Explore the multiverse of GraphQL with Rick and Morty!*