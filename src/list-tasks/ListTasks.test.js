import { render } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { ListTasks } from "./ListTasks";

describe("list tasks component tests", () => {
  it("should render component without errors", () => {
    const wrapper = document.createElement("div");
    render(<ListTasks />, wrapper);
    unmountComponentAtNode(wrapper);
  });
});
