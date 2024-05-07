import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const wrapper = document.createElement("main");
  const { container } = render(<App />, wrapper);

  const mainButton = container.querySelector("button");
  expect(mainButton.textContent).toBe("Nova Tarefa");
});
