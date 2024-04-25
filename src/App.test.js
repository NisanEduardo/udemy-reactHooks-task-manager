import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const mainText = screen.getByText(/meu component/i);
  expect(mainText).toBeInTheDocument();
});
