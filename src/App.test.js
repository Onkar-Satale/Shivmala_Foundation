import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders foundation name in header", () => {
  render(<App />);
  expect(screen.getByText(/SHIVMALA FOUNDATION/i)).toBeInTheDocument();
});
