import { Check, Flame, Trash2 } from "lucide-react";

export default function TaskItem({ task, toggleComplete, toggleUrgent, deleteTask }) {
  return (
    <div
      className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
        task.isCompleted
          ? "bg-slate-50 border-slate-200 opacity-75"
          : task.isUrgent
          ? "bg-red-50/50 border-red-200"
          : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            task.isCompleted ? "bg-green-500 border-green-500 text-white" : "border-slate-300 text-transparent hover:border-green-500"
          }`}
        >
          <Check className="w-4 h-4" />
        </button>
        <span
          className={`truncate transition-all ${
            task.isCompleted ? "line-through text-slate-400" : "text-slate-700 font-medium"
          }`}
        >
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <button
          onClick={() => toggleUrgent(task.id)}
          className={`p-2 rounded-lg transition-colors ${
            task.isUrgent
              ? "bg-red-100 text-red-600"
              : "text-slate-400 hover:bg-slate-100 hover:text-red-500"
          }`}
          title="Acil olarak işaretle"
        >
          <Flame className="w-4 h-4" />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 rounded-lg text-slate-400 hover:bg-red-100 hover:text-red-600 transition-colors"
          title="Görevi Sil"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
