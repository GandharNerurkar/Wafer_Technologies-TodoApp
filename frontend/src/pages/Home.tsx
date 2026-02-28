import { useState, useEffect, useContext } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import AddTaskbtn from "../components/AddTaskbtn";
import Card from "../components/Card";
import type { Task } from "../types/types";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks"); // GET /api/tasks
        setTasks(res.data.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const completedTasks = tasks.filter((task) => task.status === "completed");
  const incompleteTasks = tasks.length - completedTasks.length;
  const completionRate =
    tasks.length === 0 ? 0 : Math.round((completedTasks.length / tasks.length) * 100);

  const filteredTasks = tasks.filter((task) => {
    const normalizedFilter = filter.toLowerCase();
    const normalizedStatus = task.status.toLowerCase();

    if (normalizedFilter === "completed") return normalizedStatus === "completed";
    if (normalizedFilter === "incomplete") return normalizedStatus === "incomplete";
    return true; 
  });

  const searchAndFilterTasks = filteredTasks.filter((task) => {
    return task.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="home-shell">
          <div className="home-topbar">
            <span className="home-label">Wafer Todo Workspace</span>
            <button className="logout-btn home-logout-btn" onClick={logout}>
              Logout
            </button>
          </div>

          <section className="home-hero">
            <div className="home-hero-copy">
              <h1 className="home-title">Plan clean. Execute fast.</h1>
              <p className="home-subtitle">
                Keep your workload visible, search quickly, and move tasks from
                pending to done with less friction.
              </p>
            </div>

            <div className="home-metrics">
              <article className="home-metric-card">
                <p className="home-metric-label">Total Tasks</p>
                <p className="home-metric-value">{tasks.length}</p>
              </article>
              <article className="home-metric-card">
                <p className="home-metric-label">Completed</p>
                <p className="home-metric-value">{completedTasks.length}</p>
              </article>
              <article className="home-metric-card">
                <p className="home-metric-label">In Progress</p>
                <p className="home-metric-value">{incompleteTasks}</p>
              </article>
              <article className="home-metric-card">
                <p className="home-metric-label">Completion</p>
                <p className="home-metric-value">{completionRate}%</p>
              </article>
            </div>
          </section>

          <div className="home-controls-panel">
            <AddTaskbtn
              filter={filter}
              onFilterChange={setFilter}
              onSearchChange={setSearchTerm}
            />
          </div>

          <Card
            tasks={searchAndFilterTasks}
            loading={loading}
            completedTasks={completedTasks}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
