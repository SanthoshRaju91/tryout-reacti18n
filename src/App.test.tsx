import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  renderApp();
  const linkElement = screen.getByText(/An Application/i);
  expect(linkElement).toBeInTheDocument();
});

function renderApp() {
  const renderOptions = render(<App />);
  return {
    ...renderOptions,
  };
}
