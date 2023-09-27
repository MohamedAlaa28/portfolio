import React, { useContext } from "react";
import { FaGlassCheers } from "react-icons/fa";
import { MdOutlineAlarm } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidExtension } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import "../css/_BookingPhaseTwo.scss";
import Button from "../../../assets/components/Button";
import {
  validateEmailFunction,
  validateNameFunction,
  validatePhoneNumberFunction,
} from "../../../utilities/validationFunctions";
import {
  alertEmailFunction,
  alertNameFunction,
  alertPhoneNumberFunction,
} from "../../../utilities/alertFunctions";

import { Link } from "react-router-dom";
import { BookingContext } from "../../../App.js";
import { handleBlur } from "../../../utilities/handleFunctions";

const BookingPhaseTwo = ({ submitForm }) => {
  const data = useContext(BookingContext);

  return (
    <section className="form-section-phase-two">
      <form onSubmit={(e) => submitForm(e)} className="form">
        <div className="sub-form">
          <div className="form-column">
            <div className="input-section">
              <label htmlFor="first-Name">
                <BiSolidExtension className="icon" />
                <span>First Name</span>
              </label>
              <input
                id="first-Name"
                type="text"
                value={data.firstName}
                placeholder="First name"
                minLength="3"
                maxLength="10"
                onChange={(e) =>
                  data.setFirstName((prevState) => ({
                    ...prevState,
                    value: e.target.value,
                  }))
                }
                onFocus={() =>
                  data.setFirstName((prevState) => ({
                    ...prevState,
                    isTouched: false,
                  }))
                }
                onBlur={handleBlur(
                  data.setFirstName,
                  validateNameFunction,
                  alertNameFunction
                )}
              />
              {data.firstNameValid === false && data.firstNameIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" />
                  {data.firstNameError}
                </span>
              )}
            </div>

            <div className="input-section mobile">
              <label htmlFor="last-Name">
                <BiSolidExtension className="icon" /> <span>Last Name</span>
              </label>
              <input
                id="last-Name"
                type="text"
                value={data.lastName}
                placeholder="Last name"
                minLength="3"
                maxLength="10"
                onChange={(e) =>
                  data.setLastName((prevState) => ({
                    ...prevState,
                    value: e.target.value,
                  }))
                }
                onFocus={() =>
                  data.setLastName((prevState) => ({
                    ...prevState,
                    isTouched: false,
                  }))
                }
                onBlur={handleBlur(
                  data.setLastName,
                  validateNameFunction,
                  alertNameFunction
                )}
              />
              {data.lastNameValid === false && data.lastNameIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" /> {data.lastNameError}
                </span>
              )}
            </div>

            <div className="input-section mobile">
              <label htmlFor="phone-number">
                <BiSolidExtension className="icon" />
                <span>Phone Number</span>
              </label>
              <input
                id="phone-number"
                type="tel"
                value={data.phoneNumber}
                onChange={(e) =>
                  data.setPhoneNumber((prevState) => ({
                    ...prevState,
                    value: e.target.value,
                  }))
                }
                onFocus={() =>
                  data.setPhoneNumber((prevState) => ({
                    ...prevState,
                    isTouched: false,
                  }))
                }
                onBlur={handleBlur(
                  data.setPhoneNumber,
                  validatePhoneNumberFunction,
                  alertPhoneNumberFunction
                )}
              />
              {data.phoneNumberValid === false && data.phoneNumberIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" /> {data.phoneNumberError}
                </span>
              )}
            </div>

            <div className="input-section">
              <label htmlFor="email">
                <BiSolidExtension className="icon" /> <span> Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={data.email}
                onChange={(e) =>
                  data.setEmail((prevState) => ({
                    ...prevState,
                    value: e.target.value,
                  }))
                }
                onFocus={() =>
                  data.setEmail((prevState) => ({
                    ...prevState,
                    isTouched: false,
                  }))
                }
                onBlur={handleBlur(
                  data.setEmail,
                  validateEmailFunction,
                  alertEmailFunction
                )}
              />
              {data.emailValid === false && data.emailIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" /> {data.emailError}
                </span>
              )}
            </div>

            <div className="input-section mobile">
              <label htmlFor="spacial-requests">
                <span>Spacial Requests</span>
              </label>
              <textarea
                id="spacial-requests"
                name="spacial-requests"
                rows="4"
                cols="50"
                placeholder="Comment"
              ></textarea>
            </div>

            <div className="first-column-lower-section">
              <div className="icons-section">
                <div
                  onClick={() => data.setNumberOfFromPage(1)}
                  className={
                    !data.date || !data.dateValid ? "error-message" : ""
                  }
                >
                  <HiOutlineCalendar className="icon" />
                  <span>
                    {!data.date && <FiAlertTriangle className="alert-icon" />}

                    {data.date ? data.date : "Select Date"}
                  </span>
                </div>

                <div
                  onClick={() => data.setNumberOfFromPage(1)}
                  className={!data.guests ? "error-message" : ""}
                >
                  <AiOutlineUser className="icon" />
                  <span>
                    {!data.guests && <FiAlertTriangle className="alert-icon" />}
                    {data.guests ? data.guests : "No. Of Diners"}
                  </span>
                </div>

                <div
                  onClick={() => data.setNumberOfFromPage(1)}
                  className={!data.time ? "error-message" : ""}
                >
                  <MdOutlineAlarm className="icon" />
                  <span>
                    {!data.time && <FiAlertTriangle className="alert-icon" />}
                    {data.time ? data.time : "Select Time"}
                  </span>
                </div>

                <div
                  onClick={() => data.setNumberOfFromPage(1)}
                  className={!data.occasion ? "error-message" : ""}
                >
                  <FaGlassCheers className="icon" />
                  <span>
                    {!data.occasion && (
                      <FiAlertTriangle className="alert-icon" />
                    )}
                    {data.occasion ? data.occasion : "Occasion"}
                  </span>
                </div>
              </div>

              <div
                className={`seating  ${!data.seating ? "error-message" : ""}`}
                onClick={() => data.setNumberOfFromPage(1)}
              >
                {!data.seating && <FiAlertTriangle className="alert-icon" />}
                {data.seating ? `${data.seating} Seating` : "Select Seating"}
              </div>
            </div>

            <div className="radio-section">
              <input
                type="checkbox"
                id="accept"
                name="seating"
                className={` ${data.acceptValid === false && "error"}`}
                checked={data.accept === "accept"}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  data.setAccept(
                    isChecked ? { value: "accept" } : { value: "" }
                  );
                }}
              />
              <label htmlFor="accept">
                You agree to our friendly <Link> privacy policy</Link>
              </label>
            </div>
          </div>

          <div className="form-column">
            <div className="input-section desktop">
              <label htmlFor="last-Name">
                <BiSolidExtension className="icon" /> <span>Last Name</span>
              </label>
              <input
                id="last-Name"
                type="text"
                value={data.lastName}
                placeholder="Last name"
                minLength="3"
                maxLength="10"
                onChange={(e) =>
                  data.setLastName((prevState) => ({
                    ...prevState,
                    value: e.target.value,
                  }))
                }
                onFocus={() =>
                  data.setLastName((prevState) => ({
                    ...prevState,
                    isTouched: false,
                  }))
                }
                onBlur={handleBlur(
                  data.setLastName,
                  validateNameFunction,
                  alertNameFunction
                )}
              />
              {data.lastNameValid === false && data.lastNameIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" /> {data.lastNameError}
                </span>
              )}
            </div>

            <div className="input-section desktop">
              <label htmlFor="phone-number">
                <BiSolidExtension className="icon" />
                <span>Phone Number</span>
              </label>
              <input
                id="phone-number"
                type="tel"
                value={data.phoneNumber}
                onChange={(e) =>
                  data.setPhoneNumber((prevState) => ({
                    ...prevState,
                    value: e.target.value,
                  }))
                }
                onFocus={() =>
                  data.setPhoneNumber((prevState) => ({
                    ...prevState,
                    isTouched: false,
                  }))
                }
                onBlur={handleBlur(
                  data.setPhoneNumber,
                  validatePhoneNumberFunction,
                  alertPhoneNumberFunction
                )}
              />
              {data.phoneNumberValid === false && data.phoneNumberIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" /> {data.phoneNumberError}
                </span>
              )}
            </div>

            <div className="input-section desktop">
              <label htmlFor="spacial-requests">
                <span>Spacial Requests</span>
              </label>
              <textarea
                id="spacial-requests"
                name="spacial-requests"
                rows="4"
                cols="50"
                placeholder="Comment"
              ></textarea>
            </div>
          </div>
        </div>
        <Button type="submit" text={"Confirm Reservation"} />
      </form>
    </section>
  );
};

export default BookingPhaseTwo;
