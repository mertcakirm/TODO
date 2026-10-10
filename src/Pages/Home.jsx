import StatCard from "../Components/StatCard";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import { ListTodo, CheckCircle2, Flame } from "lucide-react";

export default function Home({ tasks, addTask, toggleComplete, toggleUrgent, deleteTask }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.isCompleted).length;
  const urgentTasks = tasks.filter((t) => t.isUrgent && !t.isCompleted).length;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard 
          title="Toplam Görev" 
          value={totalTasks} 
          icon={ListTodo} 
          colorClass="bg-indigo-100 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400" 
        />
        <StatCard 
          title="Tamamlanan" 
          value={completedTasks} 
          icon={CheckCircle2} 
          colorClass="bg-green-100 text-green-600 dark:bg-green-950/80 dark:text-green-400" 
        />
        <StatCard 
          title="Acil Bekleyen" 
          value={urgentTasks} 
          icon={Flame} 
          colorClass="bg-red-100 text-red-600 dark:bg-red-950/80 dark:text-red-400" 
        />
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Görev Listesi</h2>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          toggleUrgent={toggleUrgent}
          deleteTask={deleteTask}
          emptyMessage="Bugün için planlanmış bir görevin yok, harika!"
        />
      </div>
    </div>
  );
}
