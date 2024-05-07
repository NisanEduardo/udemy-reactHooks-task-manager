import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const CompleteTask = (props) => {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  function handleCompleteTask() {
    const tasksDB = localStorage["tasks"];
    let tasks = tasksDB ? JSON.parse(tasksDB) : [];
    tasks = tasks.map((task) => {
      if (task.id === props.task.id) {
        task.complete = true;
      }

      return task;
    });
    localStorage["tasks"] = JSON.stringify(tasks);
    setShowModal(false);
    props.reloadTask(true);
  }

  return (
    <span className={props.className}>
      <button className="handleOpenModalAction" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faClipboardCheck} />
      </button>
      <section
        className={`${
          props.className === true ? "flex" : "hidden"
        } modalCompleteTask`}
      >
        <header>
          <h3>Concluir Tarefa</h3>
        </header>
        <div>
          <p>Deseja realmente concluir a tarefa?</p>
          <h4>{props.task.name}</h4>
        </div>
        <footer>
          <div>
            <button onClick={handleCompleteTask}>Sim</button>
            <button onClick={handleCloseModal}>Não</button>
          </div>
        </footer>
        <button onClick={handleCloseModal}>x</button>
      </section>
    </span>
  );
};

CompleteTask.propTypes = {
  task: PropTypes.object.isRequired,
  // reloadTask: PropTypes.func.isRequired,
  className: PropTypes.string,
};
