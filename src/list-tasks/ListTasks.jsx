import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ListTasksItems } from "./ListTasksItems";

export const ListTasks = () => {
  const tasksDB = localStorage["tasks"];
  const parsedTasksDB = tasksDB ? JSON.parse(tasksDB) : [];

  return (
    <div className="text-center my-0 mx-[5%]">
      <h3 className="text-3xl font-semibold">Tarefas a Fazer</h3>

      <table className="w-full mt-10">
        <thead>
          <tr className="bg-gray-500">
            <th className="text-white text-xl">Tarefa</th>
            <th className="p-2">
              <a
                href="/create"
                className="flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
              >
                <FontAwesomeIcon icon={faPlus} />
                Nova Tarefa
              </a>
            </th>
          </tr>
        </thead>
        <tbody className="">
          <ListTasksItems tasks={parsedTasksDB} />
        </tbody>
      </table>
    </div>
  );
};
