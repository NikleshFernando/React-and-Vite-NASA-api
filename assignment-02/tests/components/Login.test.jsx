import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { vi, it, expect, describe, beforeEach, test } from "vitest";
import axios from "axios";
import Login from "../../src/components/Login";

vi.mock("axios", () => ({
  default: {
    get: vi.fn().mockClear(),
  },
}));

describe("Login", () => {
  beforeEach(() => {
    axios.get.mockClear();
  });

  test("renders the login form", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByRole("heading", { name: "Login" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Username" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Password" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Login" })).toBeDefined();
  });

  test("shows an error message when user is not found", async () => {
    const mockResponse = { data: { status: "User not found" } };
    axios.get.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <Login />
      </Router>
    );

    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    const passwordInput = screen.getByRole("textbox", { name: "Password" });
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("User not found")).toBeDefined();
    });
  });

  test("shows an error message when password is incorrect", async () => {
    const mockResponse = {
      data: { user: { password: "correctpassword" }, status: "success" },
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    render(
      <Router>
        <Login />
      </Router>
    );

    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    const passwordInput = screen.getByRole("textbox", { name: "Password" });
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Incorrect password")).toBeDefined();
    });
  });

  test("navigates to UserProfile when login is successful", async () => {
    const mockUser = { username: "testuser", password: "correctpassword" };
    const mockResponse = { data: { user: mockUser, status: "success" } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const navigateMock = vi.fn();
    render(
      <Router>
        <Login navigate={navigateMock} />
      </Router>
    );

    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    const passwordInput = screen.getByRole("textbox", { name: "Password" });
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "correctpassword" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/UserProfile");
    });
  });
});
