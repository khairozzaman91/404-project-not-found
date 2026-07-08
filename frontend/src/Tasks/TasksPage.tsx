import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";

import Board from "../components/task/Board";
import Column from "../components/task/Column";
import TaskCard from "../components/task/TaskCard";
import DateSelector from "../components/task/DateSelector";
import AddTaskModal from "../components/task/AddTaskModal";

import {
  getTasks,
  deleteTask,
  updateTask,
} from "../services/task";

interface Task {
  id: number;
  title: string;
  priority: string;
  due_date: string;
  tags: string;
  status: string;
}

function TasksPage() {
  const today = new Date().toISOString().split("T")[0];

  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedDate, setSelectedDate] = useState(today);

  async function loadTasks() {
    try {
      const data = await getTasks(selectedDate);
      setTasks(data.tasks);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await deleteTask(id);
      await loadTasks();
    } catch (error) {
      console.error(error);
    }
  }

  function handleEdit(id: number) {
    const task = tasks.find((t) => t.id === id);

    if (!task) return;

    setSelectedTask(task);
    setOpen(true);
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id.toString();

    const task = tasks.find((t) => t.id === taskId);

    if (!task) return;

    if (task.status === newStatus) return;

    try {
      await updateTask(taskId, {
        title: task.title,
        priority: task.priority,
        due_date: task.due_date,
        tags: task.tags,
        status: newStatus,
      });

      await loadTasks();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadTasks();
  }, [selectedDate]);

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in_progress"
  );

  const doneTasks = tasks.filter(
    (task) => task.status === "done"
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Task Board
        </h1>

        <div className="flex items-center gap-4">
          <DateSelector
            value={selectedDate}
            onChange={setSelectedDate}
          />

          <button
            onClick={() => {
              setSelectedTask(null);
              setOpen(true);
            }}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          >
            + Add Task
          </button>
        </div>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <Board>

          <Column id="todo" title="Todo">
            {todoTasks.length === 0 ? (
              <div className="rounded-lg border-2 border-dashed border-slate-300 py-10 text-center text-slate-500">
                No tasks available
              </div>
            ) : (
              todoTasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  serial={index + 1}
                  id={task.id}
                  title={task.title}
                  dueDate={task.due_date}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </Column>

          <Column id="in_progress" title="In Progress">
            {inProgressTasks.length === 0 ? (
              <div className="rounded-lg border-2 border-dashed border-slate-300 py-10 text-center text-slate-500">
                No tasks available
              </div>
            ) : (
              inProgressTasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  serial={index + 1}
                  id={task.id}
                  title={task.title}
                  dueDate={task.due_date}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </Column>

          <Column id="done" title="Done">
            {doneTasks.length === 0 ? (
              <div className="rounded-lg border-2 border-dashed border-slate-300 py-10 text-center text-slate-500">
                No tasks available
              </div>
            ) : (
              doneTasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  serial={index + 1}
                  id={task.id}
                  title={task.title}
                  dueDate={task.due_date}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </Column>

        </Board>
      </DndContext>

      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onTaskCreated={loadTasks}
        task={selectedTask}
      />
    </div>
  );
}

export default TasksPage;