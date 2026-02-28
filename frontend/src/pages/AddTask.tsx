import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { validateForm } from "../utils/validate";

const AddTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "incomplete" as "completed" | "incomplete",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    if (!validateForm(formData)) return;

    try {
      const res = await api.post("/tasks", formData);
      setFormData({ name: "", description: "", status: "incomplete" });
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Failed to add task.");
    }
  };

  const handleClear = () => {
    setFormData({ name: "", description: "", status: "incomplete" });
  };

  return (
    <div className="app-container">
      <div className="main-content add-task-page">
        <div className="add-task-shell">
          <section className="add-task-intro">
            <Link to="/" className="back-link add-back-link">
              &larr; Back to Home
            </Link>
            <p className="add-task-kicker">Create Task</p>
            <h1 className="add-task-title">Capture your next win</h1>
            <p className="add-task-copy">
              Turn ideas into actionable tasks. Keep titles clear and write a
              short description so future-you can execute faster.
            </p>
            <div className="add-task-tips">
              <span>Use clear verbs</span>
              <span>Keep it specific</span>
              <span>Start in under 2 mins</span>
            </div>
          </section>

          <section className="add-task-form-wrap">
            <form className="add-task-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="taskName" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-input"
                  placeholder="Enter task name..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="taskDescription" className="form-label">
                  Description
                </label>
                <textarea
                  id="taskDescription"
                  name="description"
                  className="form-textarea"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Enter task description..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="taskStatus" className="form-label">
                  Status
                </label>
                <select
                  id="taskStatus"
                  name="status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "completed" | "incomplete",
                    })
                  }
                  className="form-input"
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="form-actions add-task-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Task
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
