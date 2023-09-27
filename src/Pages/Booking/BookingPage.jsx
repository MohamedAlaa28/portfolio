import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utilities/dataAPIs";
import { BookingContext } from "../../App.js";
import BookingPhaseOne from "./components/BookingPhaseOne";
import BookingPhaseTwo from "./components/BookingPhaseTwo";
import { formatTime } from "../../utilities/formatFunctions";

export const initializeTimes = () => {
  const currentDate = new Date();
  const times = fetchAPI(currentDate);
  const availableTimes = times.map(formatTime);
  return availableTimes.length > 0 ? availableTimes : ["No available times"];
};

export const updateTimes = (dispatch, selectedDate) => {
  const times = fetchAPI(selectedDate);
  const updatedTimes = times.map(formatTime);
  dispatch({ type: "UPDATE_TIMES", times: updatedTimes });
};

export const guestsOptions = [...Array(10)].map(
  (_, index) => `${index + 1} ${index === 0 ? "Diner" : "Diners"}`
);

export const occasionOptions = ["Birthday", "Anniversary"];

const BookingPage = () => {
  const data = useContext(BookingContext);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const validated =
      data.firstNameValid &&
      data.lastNameValid &&
      data.dateValid &&
      data.emailValid &&
      data.phoneNumberValid &&
      data.guests !== "" &&
      data.time !== "" &&
      data.guests !== "" &&
      data.occasion !== "" &&
      data.seating !== "" &&
      data.accept;

    data.firstName === "" &&
      data.setFirstName((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
        error: "name required",
      }));

    data.lastName === "" &&
      data.setLastName((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
        error: "name required",
      }));

    data.date === "" &&
      data.setDate((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
        error: "Date required",
      }));

    data.email === "" &&
      data.setEmail((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
        error: "Email required",
      }));

    data.phoneNumber === "" &&
      data.setPhoneNumber((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
        error: "Phone Number required",
      }));

    data.accept === "" &&
      data.setAccept((prevState) => ({
        ...prevState,
        isValid: false,
      }));

    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      date: data.date,
      time: data.time,
      guests: data.guests,
      occasion: data.occasion,
      phoneNumber: data.phoneNumber,
      email: data.email,
      seating: data.seating,
    };

    const success = submitAPI(formData);

    if (success && validated) {
      navigate("/confirm", { state: formData });

      // Reset form fields
      data.setFirstName({ value: "" });
      data.setLastName({ value: "" });
      data.setTime({ value: "" });
      data.setGuests({ value: "" });
      data.setOccasion({ value: "" });
      data.setDate({ value: "" });
      data.setSeating({ value: "" });
      data.setEmail({ value: "" });
      data.setPhoneNumber({ value: "" });
      data.setNumberOfFromPage(1);
    }
  };

  return (
    <section className="booking-section">
      {data.numberOfFromPage === 1 ? (
        //page one
        <BookingPhaseOne />
      ) : (
        //page two
        <BookingPhaseTwo submitForm={submitForm} />
      )}
    </section>
  );
};

export default BookingPage;
