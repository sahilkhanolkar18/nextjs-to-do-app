import { useState, ChangeEvent } from "react";
import Task from "../../models/Task";

interface TaskEditFormProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
}

const TaskEditForm = ({ task, onSave, onCancel }: TaskEditFormProps) => {
  const [updatedTask, setUpdatedTask] = useState<Task>(task);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(updatedTask);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-2">Edit Task</h3>
      <div className="mb-2">
        <label htmlFor="edit-title" className="block mb-1">
          Title:
        </label>
        <input
          type="text"
          id="edit-title"
          name="title"
          value={updatedTask.title}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="edit-description" className="block mb-1">
          Description:
        </label>
        <textarea
          id="edit-description"
          name="description"
          value={updatedTask.description}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskEditForm;
