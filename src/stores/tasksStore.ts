import { create } from "zustand";

type TaskProps = {
  taskName: string,
  id: string,
  completed: boolean,
};

type State = {
  tasks: Array<TaskProps>,
};

type Action = {
  add: (task: TaskProps) => void
};

const useTasksStore = create<State & Action>((set) => ({
  tasks: [],
  add: (task: TaskProps) => set((state: TaskProps[]) => ([
    task
  ]))
}))
