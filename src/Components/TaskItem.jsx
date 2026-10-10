import { Check, Flame, Trash2 } from "lucide-react";

export default function TaskItem({ task, toggleComplete, toggleUrgent, deleteTask }) {
  return (
    <div
      className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
        task.isCompleted
          ? "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 opacity-75"
          : task.isUrgent
          ? "bg-red-50/50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50"
          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer ${
            task.isCompleted 
              ? "bg-green-500 border-green-500 text-white" 
              : "border-slate-300 dark:border-slate-600 text-transparent hover:border-green-500 dark:hover:border-green-400"
          }`}
        >
          <Check className="w-4 h-4" />
        </button>
        <span
          className={`truncate transition-all ${
            task.isCompleted 
              ? "line-through text-slate-400 dark:text-slate-500" 
              : "text-slate-700 dark:text-slate-200 font-medium"
          }`}
        >
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <button
          onClick={() => toggleUrgent(task.id)}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            task.isUrgent
              ? "bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400"
              : "text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-400"
          }`}
          title="Acil olarak işaretle"
        >
          <Flame className="w-4 h-4" />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-red-100 dark:hover:bg-red-950/60 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
          title="Görevi Sil"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
