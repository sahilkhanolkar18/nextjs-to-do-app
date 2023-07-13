import { types, Instance } from "mobx-state-tree";

const Task = types.model("Task", {
  id: types.identifier,
  title: types.string,
  description: types.string,
  status: types.enumeration(["To Do", "In Progress", "Completed"]),
});

export interface ITask extends Instance<typeof Task> {}

export default Task;
//
