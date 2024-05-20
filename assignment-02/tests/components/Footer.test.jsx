import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import FooterMain from "../../src/components/FooterMain";

describe("FooterMain", () => {
  it("renders without crashing", () => {
    render(<FooterMain />);
    // Ensure the FooterMain component is rendered properly
    const footerElement = document.querySelector(".footerMain");
    if (!footerElement) {
      throw new Error("FooterMain component is not rendered properly");
    }
  });

  it("renders correct logo", () => {
    render(<FooterMain />);
    // Ensure the FooterMain component is rendered properly
    const footerElement = document.querySelector(".footerMain");
    if (!footerElement) {
      throw new Error("FooterMain component is not rendered properly");
    }

    // Access the logo within the FooterMain component
    const logoElement = footerElement.querySelector(".img-footer");
    if (!logoElement) {
      throw new Error("Logo element is not found within FooterMain component");
    }
    const srcAttribute = logoElement.getAttribute("src");
    if (srcAttribute !== "/public/NASA_logo.svg.png") {
      throw new Error("Logo src attribute is incorrect");
    }
  });
});
