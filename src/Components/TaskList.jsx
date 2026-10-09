import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete, toggleUrgent, deleteTask, emptyMessage }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl border-2 border-dashed border-slate-200 mt-6">
        <p className="text-slate-500">{emptyMessage || "Henüz hiç görev yok."}</p>
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
