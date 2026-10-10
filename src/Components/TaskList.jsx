import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete, toggleUrgent, deleteTask, emptyMessage }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/20 mt-6 transition-colors">
        <p className="text-slate-500 dark:text-slate-400">{emptyMessage || "Henüz hiç görev yok."}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          toggleUrgent={toggleUrgent}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
