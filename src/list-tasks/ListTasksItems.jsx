import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { CompleteTask } from "./CompleteTask";

export const ListTasksItems = (props) => {
  function checkAsCompleted(task) {
    return task.completed ? "line-through" : "none";
  }

  return props.tasks.map((task) => (
    <tr key={task.id} className="teste">
      <td
        data-testId="taskName"
        className={`${checkAsCompleted(task)}`}
        width="75%"
      >
        {task.name}
      </td>
      <td className="text-right">
        <CompleteTask
          task={task}
          className={task.completed ? "hidden" : "flex"}
        />

        <a
          className={task.completed ? "hidden" : "bg-red-500"}
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
