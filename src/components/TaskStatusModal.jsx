export const TaskStatusModal = (props) => {
  let mostrarModal = props.showModal;

  return (
    <div className={`${mostrarModal ? "flex" : "hidden"}`} id="successModal">
      <header>Status da tarefa criada!</header>
      Tarefa adicionada com sucesso!
    </div>
  );
};
