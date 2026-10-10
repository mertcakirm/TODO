import TaskList from "../Components/TaskList";
import { Flame } from "lucide-react";

export default function Urgent({ tasks, toggleComplete, toggleUrgent, deleteTask }) {
  // Sadece acil olan görevleri filtrele
  const urgentTasks = tasks.filter((t) => t.isUrgent);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-red-100 dark:border-red-950/60 transition-colors">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-100 dark:bg-red-950/80 p-3 rounded-xl">
            <Flame className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Acil İşler</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Öncelikli olarak ilgilenmen gereken görevler.</p>
          </div>
        </div>

        <TaskList
          tasks={urgentTasks}
          toggleComplete={toggleComplete}
          toggleUrgent={toggleUrgent}
          deleteTask={deleteTask}
          emptyMessage="Şu an için acil bir görevin bulunmuyor."
        />
      </div>
    </div>
  );
}
