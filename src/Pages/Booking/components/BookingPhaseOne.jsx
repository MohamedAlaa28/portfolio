import React, { useContext } from "react";
import "../css/_BookingPhaseOne.scss";
import Button from "../../../assets/components/Button";
import { FaGlassCheers } from "react-icons/fa";
import { MdOutlineAlarm } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import CustomSelect from "../../../assets/components/CustomSelect";
import DatePicker from "../../../assets/components/DatePicker";
import bookingLogo from "../../../assets/images/compressed/dogu-tuncer-COda3_JQoWo-unsplash.jpg";
import { BookingContext } from "../../../App.js";
import LazyLoad from "react-lazyload";
import { guestsOptions, occasionOptions } from "../BookingPage";

const BookingPhaseOne = () => {
  const data = useContext(BookingContext);

  return (
    <div className="form-section-phase-one">
      <LazyLoad>
        <img src={bookingLogo} alt="bookingLogo" />
      </LazyLoad>

      <div className="from-sub-section">
        <p className="booking-header h1">Reservations</p>

        <form className="form">
          <div className="form-column">
            <div className="radio-section">
              <label htmlFor="indoor">indoor seating</label>
              <input
                type="radio"
                id="indoor"
                name="seating"
                value="indoor"
                checked={data.seating === "indoor"}
                onChange={(e) =>
                  data.setSeating(() => ({
                    value: e.target.value,
                  }))
                }
              />
            </div>

            <div className="input-section custom-date-input">
              <label htmlFor="res-date" className="custom-label input-label">
                Date
              </label>
              <DatePicker
                id="res-date"
                value={data.date}
                setState={data.setDate}
                dispatch={data.dispatch}
                placeholder="Select Date"
                icon={<HiOutlineCalendar className="icon" />}
              />
              {!data.dateValid && data.dateIsTouched && (
                <span className="error-message">
                  <FiAlertTriangle className="icon" /> {data.dateError}
                </span>
              )}
            </div>

            <div className="input-section">
              <label htmlFor="occasion">Occasion</label>
              <CustomSelect
                id="occasion"
                value={data.occasion}
                setState={data.setOccasion}
                options={occasionOptions}
                placeholder={"Occasion"}
                icon={<FaGlassCheers className="icon" />}
              />
            </div>
          </div>

          <div className="form-column">
            <div className="radio-section">
              <label htmlFor="outdoor">outdoor seating</label>
              <input
                type="radio"
                id="outdoor"
                name="seating"
                value="outdoor"
                checked={data.seating === "outdoor"}
                onChange={(e) =>
                  data.setSeating(() => ({
                    value: e.target.value,
                  }))
                }
              />
            </div>

            <div className="input-section">
              <label htmlFor="guests">Number of diners</label>
              <CustomSelect
                id="guests"
                value={data.guests}
                setState={data.setGuests}
                options={guestsOptions}
                placeholder={"No. of Diners"}
                icon={<AiOutlineUser className="icon" />}
              />
            </div>

            <div className="input-section">
              <label htmlFor="res-time">Time</label>
              <CustomSelect
                id="res-time"
                value={data.time}
                setState={data.setTime}
                options={data.availableTimes}
                placeholder={"Select time"}
                icon={<MdOutlineAlarm className="icon" />}
              />
            </div>
          </div>
        </form>
        <div>
          <Button
            text={
              <>
                reserve <span> a</span> table
              </>
            }
            onClick={() => data.setNumberOfFromPage(2)}
            aria-label="On Click"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPhaseOne;
