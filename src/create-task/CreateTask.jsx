import { useState } from "react";
import { TaskModel } from "../models/task.model";
import { TaskStatusModal } from "../components/TaskStatusModal";

export const CreateTask = () => {
  const [task, setTask] = useState("");

  const [showModal, setShowModal] = useState(false);

  const taskModel = new TaskModel();

  function createTask(event) {
    event.preventDefault();

    const tasksDB = localStorage["tasks"];
    const tasks = tasksDB ? JSON.parse(tasksDB) : [];

    // persistir tarefa
    tasks.push(taskModel.create(new Date().getTime(), task, false));
    localStorage["tasks"] = JSON.stringify(tasks);
    setShowModal(true);
  }

  function handleTaskInput(event) {
    setTask(event.target.value);
  }

  return (
    <div className="">
      <header className="p-5">
        <h1 className="text-[30px] font-bold">Cadastrar Tarefa</h1>
      </header>
      <section className="bg-gray-100 px-5 py-10">
        <form action="" className="flex justify-between" onSubmit={createTask}>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            className="border b-gray-400 rounded-lg p-2 min-w-[500px]"
            type="text"
            name="tarefa"
            id="tarefa"
            minLength={5}
            maxLength={100}
            placeholder="Digite o nome da tarefa"
            value={task}
            onChange={handleTaskInput}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </section>
      <TaskStatusModal showModal={showModal} />
    </div>
  );
};
