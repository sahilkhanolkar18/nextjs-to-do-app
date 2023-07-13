import { types, flow, Instance } from "mobx-state-tree";
import Task, { ITask } from "../models/Task";

const TaskStore = types
  .model("TaskStore", {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask: flow(function* (taskData: ITask) {
      const newTask = Task.create(taskData);
      self.tasks.push(newTask);
    }),
    updateTask(updatedTask: ITask) {
      const index = self.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        self.tasks[index] = updatedTask;
      }
    },
    deleteTask(taskId: string) {
      const index = self.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        self.tasks.splice(index, 1);
      }
    },
  }));

export default TaskStore;
