import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import BookingPhaseTwo from "../components/BookingPhaseTwo";

describe("Booking Form", () => {
  it("form should submit", () => {
    render(
      <BrowserRouter>
        <BookingPhaseTwo />
      </BrowserRouter>
    );

    // Assert that the form fields have the correct attributes
    expect(screen.getByLabelText(/first name/i)).toHaveAttribute(
      "type",
      "text"
    );
    expect(screen.getByLabelText(/last name/i)).toHaveAttribute("type", "text");
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email");
    expect(screen.getByLabelText(/phone number/i)).toHaveAttribute(
      "type",
      "tel"
    );
    expect(screen.getByLabelText(/spacial requests/i).tagName).toBe("TEXTAREA");
    expect(screen.getByLabelText(/choose time/i).tagName).toBe("SELECT");
    expect(screen.getByLabelText(/number of diners/i).tagName).toBe("INPUT");
    expect(screen.getByLabelText(/occasion/i).tagName).toBe("SELECT");
    expect(screen.getByLabelText(/select seating/i).classList).toContain("seating");

    // You can add more assertions for other form elements here
  });

  it("disables the submit button when the form is invalid", () => {
    render(<BookingPhaseTwo />);

    const submitButton = screen.getByText("Confirm Reservation");
    expect(submitButton).toBeDisabled();
  });

  it("enables the submit button when the form is valid", () => {
    render(<BookingPhaseTwo />);

    const submitButton = screen.getByText("Confirm Reservation");
    expect(submitButton).toBeEnabled();
  });
});
