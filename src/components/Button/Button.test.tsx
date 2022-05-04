import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("Running test for Button component", () => {
  test("should render the button", () => {
    render(
      <Button primary disabled={false} label="Hello" onClick={() => {}} />
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("check button disabled", () => {
    render(
      <Button
        primary
        disabled={true}
        label="Disabled Button"
        onClick={() => {}}
      />
    );
    expect(
      screen.getByRole("button", { name: "Disabled Button" })
    ).toBeDisabled();
  });
});
