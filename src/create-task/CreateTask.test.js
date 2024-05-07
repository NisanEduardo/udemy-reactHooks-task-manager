import { fireEvent, render } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { CreateTask } from "./CreateTask";

describe("list tasks component tests", () => {
  it("should render component without errors", () => {
    const wrapper = document.createElement("div");
    render(<CreateTask />, wrapper);
    unmountComponentAtNode(wrapper);
  });

  it("should test if task was create", () => {
    const wrapper = document.createElement("div");
    const { container } = render(<CreateTask />, wrapper);

    const inputTaskName = container.querySelector('input[name="tarefa"]');
    const btnCreate = container.querySelector('button[type="submit"]');
    const successModal = container.querySelector("#successModal");

    fireEvent.change(inputTaskName, {
      target: {
        value: "Testar component",
      },
    });

    fireEvent.click(btnCreate);

    expect(successModal.className).toBe("flex");

    unmountComponentAtNode(wrapper);
  });
});
