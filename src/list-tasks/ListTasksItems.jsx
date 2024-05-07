import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { CompleteTask } from "./CompleteTask";

export const ListTasksItems = (props) => {
  function checkAsCompleted(task) {
    return task.completed ? "line-through" : "none";
  }

  return props.tasks.map((task) => (
    <tr key={task.id} className="odd:bg-gray-200 even:bg-slate-100">
      <td
        data-testid="taskName"
        className={`${checkAsCompleted(task)}`}
        width="75%"
      >
        {task.name}
      </td>
      <td className="text-right p-5">
        <CompleteTask
          task={task}
          className={task.completed ? "hidden" : "inline-block mr-3"}
        />

        <a
          className={`${
            task.completed ? "hidden" : "inline-block"
          } text-center`}
          href={`/update/${task.id}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </a>
      </td>
    </tr>
  ));
};

ListTasksItems.propTypes = {
  tasks: PropTypes.array.isRequired,
};
