import { types, Instance, flow } from "mobx-state-tree";
import Task, { ITask } from "../models/Task";

const TaskStore = types
  .model("TaskStore", {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask: flow(function* (taskData: ITask) {
      const newTask = Task.create({
        id: Math.random().toString(),
        ...taskData,
      });
      self.tasks.push(newTask);
    }),

    updateTask: flow(function* (updatedTask: ITask) {
      const index = self.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        self.tasks[index] = updatedTask;
      }
    }),

    deleteTask: flow(function* (taskId: string) {
      const index = self.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        self.tasks.splice(index, 1);
      }
    }),
  }));

export default TaskStore;
