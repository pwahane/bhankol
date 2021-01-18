import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn Books and Authors", () => {
  render(<App />);
  const linkElement = screen.getByText(/Books and Authors/i);
  expect(linkElement).toBeInTheDocument();
});
