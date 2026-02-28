import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AddTask from "./pages/AddTask"
import ViewTask from "./pages/ViewTask"
import { useTheme } from "./context/themeContext"


const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-root">
      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
        {/* {theme === "light" ? "🌙" : "🌞"} */}
      </button>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-task"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-tasks/:id"
          element={
            <ProtectedRoute>
              <ViewTask />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
