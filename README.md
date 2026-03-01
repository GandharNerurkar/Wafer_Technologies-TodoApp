# WaferTodo - Task Management App

A simple and clean Todo application built with the MERN stack and TypeScript.
Users can register, login, create, update, delete, search, and filter tasks.
Authentication is handled with JWT, and only logged-in users can manage their own tasks.

## Live Demo
[WaferTodo Live](https://wafer-technologies-todo-app.vercel.app/)

## Tech Stack

### Frontend
- React + TypeScript
- React Router DOM
- Axios
- React Hot Toast (notifications)
- React Select (task filter)
- React Icons
- Vite
- Custom CSS (CSS variables + responsive styles)

### Backend
- Node.js + Express + TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt (password hashing)
- Nodemon + ts-node (dev server)

### Hosting
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Features
- User authentication (Register/Login)
- Protected routes (only logged-in users can access tasks)
- Create, update, delete tasks
- Filter tasks by status (Completed / Incomplete / All)
- Search tasks by name
- Responsive design (mobile-friendly)
- Light/Dark theme toggle

## Theme Feature
- A global theme toggle is available in the app header.
- Supported themes: `light` and `dark`.
- Theme state is managed using React Context (`ThemeProvider`).
- Selected theme is persisted in `localStorage` under the key `theme`.
- On theme change, the app updates the root `data-theme` attribute and CSS variables automatically.

Related files:
- `frontend/src/context/themeContext.tsx`
- `frontend/src/App.tsx`
- `frontend/src/index.css`

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/GandharNerurkar/Wafer_Technologies-TodoApp.git
```

### 2. Setup backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run backend:
```bash
npm run dev
```

Backend runs on `http://localhost:5000`.

### 3. Setup frontend
```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:
```env
VITE_BASE_URL=http://localhost:5000/api
```

Run frontend:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`.

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Tasks (Protected)
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get single task by ID
- `POST /api/tasks` - Add new task
- `PUT /api/tasks/edit/:id` - Update task name and description
- `PATCH /api/tasks/:id` - Toggle/update task status
- `DELETE /api/tasks/:id` - Delete task

## Project Structure
```text
Wafer_Technologies-TodoApp/
|-- backend/
|   |-- src/
|   |   |-- config/        # DB connection
|   |   |-- controllers/   # Auth and task controllers
|   |   |-- middleware/    # Auth middleware
|   |   |-- models/        # Mongoose models
|   |   |-- routes/        # Express routes
|   |   |-- utils/         # Helper functions
|   |   `-- index.ts
|   `-- package.json
|-- frontend/
|   |-- src/
|   |   |-- components/    # Reusable UI components
|   |   |-- context/       # Theme context
|   |   |-- pages/         # Register, Login, Home, AddTask, ViewTask
|   |   |-- services/      # Axios API setup
|   |   |-- types/         # TypeScript types
|   |   |-- App.tsx
|   |   `-- main.tsx
|   `-- package.json
`-- README.md
```

Gandhar Nerurkar
- GitHub: <https://github.com/GandharNerurkar>
