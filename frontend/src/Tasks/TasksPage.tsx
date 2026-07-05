import Board from "../components/task/Board";
import Column from "../components/task/Column";
import TaskCard from "../components/task/TaskCard";
import DateSelector from "../components/task/DateSelector";

function TasksPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Task Board
        </h1>

        <DateSelector />
      </div>

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

    </div>
  );
}

export default TasksPage;