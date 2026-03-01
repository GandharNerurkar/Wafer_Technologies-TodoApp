import type { Task } from "../types/types";
import TaskCardActions from "./TaskCardActions";

interface CardProps {
  tasks: Task[];
  loading: boolean;
  completedTasks: Task[];
  navigate: (path: string) => void;
}

const Card = ({ tasks, loading, navigate }: CardProps) => {
  return (
    <section className="tasks-section">
      {loading ? (
        <div className="task-skeleton-list" aria-live="polite" aria-busy="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <article className="task-skeleton-row" key={`task-skeleton-${index}`}>
              <div className="task-skeleton-main">
                <div className="task-skeleton-line task-skeleton-title" />
                <div className="task-skeleton-line task-skeleton-text" />
                <div className="task-skeleton-line task-skeleton-text short" />
              </div>
              <div className="task-skeleton-actions">
                <div className="task-skeleton-pill" />
                <div className="task-skeleton-pill" />
              </div>
            </article>
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">Tasks</div>
          <h3 className="empty-state-title">No tasks yet</h3>
          <p className="empty-state-description">
            Create your first task to get started with your productivity
            journey!
          </p>
        </div>
      ) : (
        <>
          <div className="text-center mb-6">
            <h2 className="section-title">Total Tasks added: {tasks.length}</h2>
          </div>
          <div className="tasks-list">
            {tasks.map((task) => (
              <TaskCardActions
                key={task._id}
                task={task}
                onView={() => navigate(`/view-tasks/${task._id}`)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Card;

