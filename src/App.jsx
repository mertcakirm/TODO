import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Urgent from "./Pages/Urgent";
import { createTask } from "./Interfaces/TaskModel";

export default function App() {
  // 1. LocalStorage'dan Veri Okuma (Uygulama ilk açıldığında çalışır)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my-tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [];
  });

  // 2. LocalStorage'a Veri Yazma (tasks state'i her değiştiğinde tetiklenir)
  useEffect(() => {
    localStorage.setItem("my-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // --- CRUD İŞLEMLERİ ---
  
  // Ekle (Create)
  const addTask = (title) => {
    const newTask = createTask(title);
    // Yeni görevi dizinin en başına ekliyoruz (unshift mantığı)
    setTasks([newTask, ...tasks]);
  };

  // Güncelle - Tamamlandı (Update)
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Güncelle - Acil Durumu (Update)
  const toggleUrgent = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isUrgent: !task.isUrgent } : task
      )
    );
  };

  // Sil (Delete)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks}
                  addTask={addTask}
                  toggleComplete={toggleComplete}
                  toggleUrgent={toggleUrgent}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route
              path="/urgent"
              element={
                <Urgent
                  tasks={tasks}
                  toggleComplete={toggleComplete}
                  toggleUrgent={toggleUrgent}
                  deleteTask={deleteTask}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
