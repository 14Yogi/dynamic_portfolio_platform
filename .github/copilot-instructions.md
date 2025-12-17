# Copilot Instructions for Dynamic Portfolio Platform

## Architecture Overview
A **full-stack animated portfolio platform** with frontend/backend separation:
- **Frontend** (`/frontend`): React + GSAP/Framer Motion for animations, deployed on Netlify
- **Backend** (`/backend`): Spring Boot REST API with MongoDB, handles authentication & CRUD operations
- **Docs** (`/docs`): Architecture and deployment documentation

### Key Data Flow
Users interact with the React UI → API calls to Spring Boot backend → MongoDB persistence → Real-time UI updates with animations

## Frontend Stack (`/frontend`)
**Tech**: React, Vite (build), GSAP + Framer Motion (animations), responsive CSS

### Key Conventions
- **Components**: Build reusable UI components with animation layers using Framer Motion (`<motion.*>` elements)
- **Dashboard**: Separate authenticated dashboard for portfolio content management (CRUD)
- **State Management**: Use React hooks (useState, useContext) for local and auth state
- **Animations**: GSAP for complex sequences, Framer Motion for component-level transitions
- **API Integration**: Centralize API calls in a service layer, handle auth tokens for protected endpoints
- **Responsive Design**: Mobile-first CSS with breakpoints for tablet/desktop

### Build & Run
```bash
cd frontend
npm install      # Install dependencies
npm run dev      # Development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Backend Stack (`/backend`)
**Tech**: Spring Boot, MongoDB, REST API architecture

### Key Conventions
- **API Endpoints**: RESTful design for portfolio CRUD (`/api/portfolio/*`, `/api/auth/*`)
- **Authentication**: JWT or session-based; validate tokens on protected endpoints
- **Database**: MongoDB collections for users, portfolio sections, and metadata
- **Controllers**: Handle HTTP requests, call service layer for business logic
- **Services**: Implement business logic and repository interaction (separation of concerns)
- **Error Handling**: Return meaningful HTTP status codes (400, 401, 403, 404, 500) with error messages
- **CORS**: Configure to allow frontend domain (important for local dev + production)

### Build & Run
```bash
cd backend
mvn clean install     # Build and run tests
mvn spring-boot:run   # Run development server
```

## Critical Integration Points
1. **Authentication Flow**: Frontend sends credentials → Backend validates & returns JWT/session token → Frontend stores in localStorage/cookies → All subsequent requests include token
2. **API Base URL**: Frontend must target correct backend URL (environment-specific: localhost:8080 for dev, production URL for prod)
3. **CORS Configuration**: Backend must allow requests from frontend origin
4. **Portfolio Schema**: Align frontend form fields with backend MongoDB collection structure

## Common Developer Tasks

### Adding a New Portfolio Section
1. **Backend**: Create MongoDB collection schema, add GET/POST/PUT/DELETE endpoints in Controller
2. **Frontend**: Build React component, integrate with dashboard form, add Framer Motion animations
3. **Integration**: Test API endpoint, verify token-based authorization works

### Deployment
- **Frontend**: Push to GitHub → Netlify auto-deploys on main branch
- **Backend**: Deploy Spring Boot JAR to cloud platform (AWS, Heroku, etc.) or containerize with Docker

## Project-Specific Patterns
- **Responsive animations**: Use Framer Motion `whileHover` and `whileInView` for portfolio showcase
- **Protected routes**: Frontend routes requiring auth should check token before rendering
- **Error UI**: Display API errors gracefully without breaking animations
- **Loading states**: Show loading spinners during API calls using state flags

## Key Files to Reference
- README.md: Tech stack and feature overview
- `/frontend/src`: React components and logic
- `/backend/src`: Spring Boot controllers and services
- `/docs`: Architecture decisions and deployment guides
