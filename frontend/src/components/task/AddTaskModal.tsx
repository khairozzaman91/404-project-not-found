import { useState } from "react";

import { createTask } from "../../services/task";

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onTaskCreated: () => Promise<void>;
}

function AddTaskModal({
  open,
  onClose,
  onTaskCreated,
}: AddTaskModalProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState("");

  async function handleSave() {
    try {
      await createTask({
        title,
        priority,
        due_date: dueDate,
        tags,
        status: "todo",
      });

      // Clear form
      setTitle("");
      setPriority("low");
      setDueDate("");
      setTags("");

      // Close modal
      onClose();

      // Reload board
      await onTaskCreated();
    } catch (error) {
      console.error(error);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Create Task
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none"
          />

          <input
            type="text"
            placeholder="Enter tags (e.g. Patient, Emergency)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 outline-none"
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddTaskModal;