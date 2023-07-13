import { useState, ChangeEvent, FormEvent } from "react";

interface TaskFormProps {
  onSave: (taskData: {
    title: string;
    description: string;
    status: string;
  }) => void;
  onCancel: () => void;
}

function TaskForm({ onSave, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      description,
      status,
    });
    setTitle("");
    setDescription("");
    setStatus("");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block mb-1">
          Status:
        </label>
        <select
          id="status"
          value={status}
          onChange={handleStatusChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        >
          <option value="">-- Select Status --</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
