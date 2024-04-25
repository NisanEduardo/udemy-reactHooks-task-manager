import { render } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { UpdateTask } from "./UpdateTask";

describe("list tasks component tests", () => {
  it("should render component without errors", () => {
    const wrapper = document.createElement("div");
    render(<UpdateTask id={1} />, wrapper);
    unmountComponentAtNode(wrapper);
  });
});
