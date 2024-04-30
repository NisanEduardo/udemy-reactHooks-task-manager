import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export const ListTasksItems = (props) => {
  function checkAsCompleted(task) {
    return task.completed ? "line-through" : "none";
  }

  return props.tasks.map((task) => (
    <tr key={task.id}>
      <td width="75%" style={{ textDecoration: checkAsCompleted(task) }}>
        {task.name}
      </td>
      <td className="text-right">
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
