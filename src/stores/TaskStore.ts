import { types, Instance } from "mobx-state-tree";
import Task from "../models/Task";

const TaskStore = types
  .model("TaskStore", {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask(task: Instance<typeof Task>) {
      self.tasks.push(task);
    },
    updateTask(updatedTask: Instance<typeof Task>) {
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
