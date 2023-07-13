import { useState } from "react";
import Task, { ITask } from "../../models/Task";
import TaskEditForm from "./TaskEditForm";

interface TaskListProps {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onUpdateTask: (updatedTask: ITask) => void;
}

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }: TaskListProps) => {
  const [editedTask, setEditedTask] = useState<ITask | null>(null);

  const handleEditClick = (task: ITask) => {
    setEditedTask(task);
  };

  const handleCancelEdit = () => {
    setEditedTask(null);
  };

  const handleSaveEdit = (updatedTask: ITask) => {
    onUpdateTask(updatedTask);
    setEditedTask(null);
  };

  return (
    <ul className="mt-8">
      {tasks.map((task) => (
        <li key={task.id} className="border rounded-lg p-4 mb-4">
          {editedTask && editedTask.id === task.id ? (
            <TaskEditForm
              task={editedTask}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <h3 className="text-xl font-bold mb-2">{task.title}</h3>
              <p className="mb-2">{task.description}</p>
              <p className="mb-2">Status: {task.status}</p>
              <div>
                <button
                  onClick={() => onUpdateTask({ ...task, status: "To Do" })}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  To Do
                </button>
                <button
                  onClick={() =>
                    onUpdateTask({ ...task, status: "In Progress" })
                  }
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  In Progress
                </button>
                <button
                  onClick={() => onUpdateTask({ ...task, status: "Completed" })}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Completed
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditClick(task)}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
