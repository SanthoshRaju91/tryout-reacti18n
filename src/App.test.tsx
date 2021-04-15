import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./i18n";

test("renders learn react link", () => {
  renderApp();
  const linkElement = screen.getByText(/An Application/i);
  expect(linkElement).toBeInTheDocument();
});

function renderApp() {
  const renderOptions = render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  return {
    ...renderOptions,
  };
}
