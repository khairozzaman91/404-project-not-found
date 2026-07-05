interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
}

function AddTaskModal({
  open,
  onClose,
}: AddTaskModalProps) {
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
            className="w-full rounded-lg border border-slate-300 p-3 outline-none"
          />

          <select className="w-full rounded-lg border border-slate-300 p-3 outline-none">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            className="w-full rounded-lg border border-slate-300 p-3 outline-none"
          />

          <input
            type="text"
            placeholder="Enter tags (e.g., Patient, Emergency"
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