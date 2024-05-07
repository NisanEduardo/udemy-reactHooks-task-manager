import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ListTasksItems } from "./ListTasksItems";

export const ListTasks = () => {
  const tasksDB = localStorage["tasks"];
  const parsedTasksDB = tasksDB ? JSON.parse(tasksDB) : [];

  return (
    <div className="text-center">
      <h3>Tarefas a Fazer</h3>

      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <a
                href="/create"
                className="flex justify-between items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
              >
                <FontAwesomeIcon icon={faPlus} />
                Nova Tarefa
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <ListTasksItems tasks={parsedTasksDB} />
        </tbody>
      </table>
    </div>
  );
};
