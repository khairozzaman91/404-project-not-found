import { useEffect, useState } from "react";

import Board from "../components/task/Board";
import Column from "../components/task/Column";
import TaskCard from "../components/task/TaskCard";
import DateSelector from "../components/task/DateSelector";
import AddTaskModal from "../components/task/AddTaskModal";

import { getTasks } from "../services/task";

interface Task {
  id: number;
  title: string;
  priority: string;
  due_date: string;
  tags: string;
  status: string;
}

function TasksPage() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    try {
      const data = await getTasks();
      setTasks(data.tasks);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Task Board
        </h1>

        <div className="flex items-center gap-4">
          <DateSelector />

          <button
            onClick={() => setOpen(true)}
            className="
              rounded-lg
              bg-blue-600
              px-5
              py-2
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            + Add Task
          </button>
        </div>
      </div>

      {/* Board */}
      <Board>

        <Column title="Todo">
          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
              />
            ))}
        </Column>

        <Column title="In Progress">
          {tasks
            .filter((task) => task.status === "in_progress")
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
              />
            ))}
        </Column>

        <Column title="Done">
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
              />
            ))}
        </Column>

      </Board>

      {/* Modal */}
      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onTaskCreated={loadTasks}
      />
    </div>
  );
}

export default TasksPage;