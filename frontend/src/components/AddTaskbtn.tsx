import { Link } from "react-router-dom";
import Select from "react-select";

interface AddTaskbtnProps {
  filter: string;
  onFilterChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

const AddTaskbtn = ({ filter, onFilterChange, onSearchChange }: AddTaskbtnProps) => {
  const options = [
    { value: "all", label: "All" },
    { value: "completed", label: "Completed" },
    { value: "incomplete", label: "Incomplete" },
  ];

  return (
    <div className="add-task-container">
      <div className="filter-section">
        <div>
          <p className="filter-font">Filter By</p>
        </div>
        <Select
          options={options}
          value={options.find((option) => option.value === filter) || options[0]}
          onChange={(selected) => onFilterChange(selected?.value || "all")}
          menuPortalTarget={typeof window !== "undefined" ? document.body : undefined}
          menuPosition="fixed"
          className="task-filter-select"
          classNamePrefix="task-filter"
          styles={{
            container: (base) => ({ ...base, minWidth: 150 }),
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            menu: (base) => ({ ...base, zIndex: 9999 }),
          }}
        />
      </div>
      <div className="search-add-section">
        <div className="search-bar">
          <input type="text" placeholder="Search tasks by name" onChange={(e) => onSearchChange(e.target.value)} />
        </div>
        <div className="add-task">
          <Link to="/add-task" className="add-task-btn">
            + Add Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddTaskbtn;
