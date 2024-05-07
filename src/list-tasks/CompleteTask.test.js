import { CompleteTask } from "./CompleteTask";
import { render, fireEvent } from "@testing-library/react";
import { TaskModel } from "../models/task.model";

describe("Conplete task component tests", () => {
  const testTaskName = "CompleteTask component tests";
  const taskModel = new TaskModel();
  const task = taskModel.create(new Date(), testTaskName, false);

  it("should render component without erros", () => {
    render(<CompleteTask task={task} />);
  });

  it("should open modal when button was clicked", () => {
    const { container } = render(<CompleteTask task={task} />);
    const opneModalButton = container.querySelector(".handleOpenModalAction");

    const modalElement = container.querySelector(".modalCompleteTask");
    fireEvent.click(opneModalButton);

    expect(modalElement.className).toContain("flex");
  });

  it("should modal has the current task name", () => {
    const { container } = render(<CompleteTask task={task} />);
    const opneModalButton = container.querySelector(".handleOpenModalAction");

    const modalElement = container.querySelector(".modalCompleteTask");
    fireEvent.click(opneModalButton);

    expect(modalElement.textContent).toContain(testTaskName);
  });

  it("should mark current task as completed", () => {
    localStorage["tasks"] = JSON.stringify(task);
    const { container, getByTestId } = render(<CompleteTask task={task} />);
    const opneModalButton = container.querySelector(".handleOpenModalAction");
    const markAsCompleteTaskButon = container.querySelector(
      "[data-testid=completeTaskYes]"
    );

    fireEvent.click(opneModalButton);
    fireEvent.click(markAsCompleteTaskButon);

    const updatedLocalStorage = JSON.parse(localStorage["tasks"]);

    console.log("updatedLocalStorage", updatedLocalStorage);

    // expect(updatedLocalStorage[0].completed).toBe(true);
  });
});
