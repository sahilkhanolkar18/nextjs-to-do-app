import { useState } from "react";
import { observer } from "mobx-react-lite";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStore from "../stores/TaskStore";
import Task from "../models/Task";

const taskStore = TaskStore.create({ tasks: [] });

function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddTask = (taskData: {
    title: string;
    description: string;
    status: string;
  }) => {
    const newTask = Task.create({
      id: Math.random().toString(),
      ...taskData,
    });
    taskStore.addTask(newTask);
    setIsFormOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    taskStore.deleteTask(taskId);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    taskStore.updateTask(updatedTask);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-10">
        Task Management App
      </h1>

      <div className="mt-8 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsFormOpen(true)}
        >
          Add Task
        </button>
      </div>

      {isFormOpen && (
        <TaskForm
          onSave={handleAddTask}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

      <TaskList
        tasks={taskStore.tasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
    </div>
  );
}

export default observer(Home);
