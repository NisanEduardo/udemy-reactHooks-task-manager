import { render } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { CreateTask } from "./CreateTask";

describe("list tasks component tests", () => {
  it("should render component without errors", () => {
    const wrapper = document.createElement("div");
    render(<CreateTask />, wrapper);
    unmountComponentAtNode(wrapper);
  });
});
