import { create } from "zustand";

type TaskProps = {
  taskName: string,
  id: string,
  completed: boolean,
};

type StateProps = {
  tasks: Array<TaskProps>,
};

type ActionProps = {
  add: (task: TaskProps) => void
};

export const useTasksStore = create<StateProps & ActionProps>((set) => ({
  tasks: [],
  add: (task: TaskProps) => set((state) => (
    {
      ...state,
      task
    }
  )),
}));
