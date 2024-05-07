import { render } from "@testing-library/react";
import { ListTasksItems } from "./ListTasksItems";

import { TaskModel } from "../models/task.model";

describe("list tasks items tests", () => {
  const taskName = "Tarefa teste unitario";
  const taskModel = new TaskModel();
  const task = taskModel.create(new Date(), taskName, false);
  const completedTask = taskModel.create(
    new Date(),
    "Tarefa concluida teste",
    true
  );

  test("showld render component without errors", () => {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    table.appendChild(tBody);

    render(<ListTasksItems tasks={[task]} />, {
      container: document.body.appendChild(tBody),
    });
  });

  test("should render created task on test", () => {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    table.appendChild(tBody);

    const { container } = render(<ListTasksItems tasks={[task]} />, {
      container: document.body.appendChild(tBody),
    });

    const tdTaskNameWrapper = container.querySelector(
      "td[data-testid=taskName]"
    );

    expect(tdTaskNameWrapper.textContent).toBe(taskName);
  });

  test("should verify if completed task has the correct style", () => {
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    table.appendChild(tBody);

    const { getByTestId } = render(<ListTasksItems tasks={[completedTask]} />, {
      container: document.body.appendChild(tBody),
    });

    expect(getByTestId("taskName").className).toBe("line-through");
  });
});
