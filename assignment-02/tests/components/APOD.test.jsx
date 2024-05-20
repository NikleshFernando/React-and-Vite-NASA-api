import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import APOD from "../../src/components/APOD";

describe("APOD", () => {
  it("renders loading state initially", async () => {
    render(<APOD />);
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });
});
