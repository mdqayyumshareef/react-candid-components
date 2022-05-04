import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Input from "./Input";

describe("Running Test for Input component", () => {
  test("Check placeholder in Input", () => {
    render(<Input placeholder="Hello world" />);
    expect(screen.getByPlaceholderText("Hello world")).toHaveAttribute(
      "placeholder",
      "Hello world"
    );
  });
});
