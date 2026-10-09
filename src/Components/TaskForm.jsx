import { useState } from "react";
import { Plus } from "lucide-react";

export default function TaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    addTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex gap-2">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Yeni bir görev yaz..."
        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-shadow"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 shadow-sm"
      >
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Ekle</span>
      </button>
    </form>
  );
}
