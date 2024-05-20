import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Home from "../../src/components/Home";
import React from "react";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    const headingElement = screen.getByText(/welocome to nasa/i);
    expect(headingElement).toBeInTheDocument();
  });
});
