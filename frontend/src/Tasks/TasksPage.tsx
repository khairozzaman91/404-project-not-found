import { useState } from "react";

import Board from "../components/task/Board";
import Column from "../components/task/Column";
import TaskCard from "../components/task/TaskCard";
import DateSelector from "../components/task/DateSelector";
import AddTaskModal from "../components/task/AddTaskModal";

function TasksPage() {
  const [open, setOpen] = useState(false);

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
          <TaskCard title="Design Login UI" />
          <TaskCard title="Create Backend API" />
        </Column>

        <Column title="In Progress">
          <TaskCard title="Task Board UI" />
        </Column>

        <Column title="Done">
          <TaskCard title="Login Module" />
        </Column>

      </Board>

      {/* Modal */}
      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}

export default TasksPage;