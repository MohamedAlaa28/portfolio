import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FromButton from "./FromButton";
import "../css/_DatePicker.scss";
import { updateTimes } from "../../Pages/Booking/BookingPage";
import { validateDateFunction } from "../../utilities/validationFunctions";
import { formatDate } from "../../utilities/formatFunctions";
import { alertDateFunction } from "../../utilities/alertFunctions";

const DatePicker = ({ value, setState, dispatch, placeholder, icon }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [formattedCurrentDate, setFormattedCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = () => {
    setIsOpen(!isOpen);
  };

  const prevMonth = (e) => {
    e.preventDefault();
    const prevDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevDate);
  };

  const nextMonth = (e) => {
    e.preventDefault();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextDate);
  };

  const selectDate = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    const formattedCurrentDate = selectedDate.toISOString().split("T")[0];
    setFormattedCurrentDate(formattedCurrentDate);

    const formattedDate = formatDate(selectedDate);
    setIsOpen(false);
    updateTimes(dispatch, selectedDate);
    const isValid = validateDateFunction(selectedDate);
    const error = alertDateFunction();
    setState((prevState) => ({
      ...prevState,
      value: formattedDate,
      unformattedDate: selectedDate,
      isTouched: true,
      isValid: isValid,
      error: error,
    }));
  };

  const renderCalendar = () => {
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    const totalDays = daysInMonth + firstDay;

    const calendarDays = [];

    // Render previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      calendarDays.push(
        <span key={`prev-${day}`} className="calendar-day prev-month">
          {day}
        </span>
      );
    }

    // Render current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected =
        value &&
        new Date(formattedCurrentDate).toDateString() ===
          new Date(currentYear, currentMonth, i - 1).toDateString();

      const isToday =
        i === currentDay &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();

      const classNames = `calendar-day ${isSelected ? "selected" : ""} ${
        isToday ? "today" : ""
      }`;

      calendarDays.push(
        <span key={i} className={classNames} onClick={() => selectDate(i)}>
          {i}
        </span>
      );
    }

    // Render next month days
    for (let i = totalDays; i < 42; i++) {
      const day = i - totalDays + 1;
      calendarDays.push(
        <span key={`next-${day}`} className="calendar-day next-month">
          {day}
        </span>
      );
    }

    return calendarDays;
  };

  const renderValue = value ? (
    <>
      {value}
      <IoIosArrowUp className="icon" />
    </>
  ) : (
    <>
      {icon} {placeholder} <IoIosArrowDown className="icon" />
    </>
  );

  return (
    <main className="custom-select">
      <FromButton
        className="date-picker-input"
        value={value ? value : ""}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClick={handleInputChange}
        renderValue={renderValue}
      />
      {isOpen && (
        <section className="date-picker-calendar">
          <div className="date-picker-header">
            <span className="current-month-year">{`${
              months[currentDate.getMonth()]
            } ${currentDate.getFullYear()}`}</span>
            <div className="nex-prev-section">
              <button className="prev-month-btn" onClick={prevMonth}>
                <MdKeyboardArrowLeft />
              </button>
              <button className="next-month-btn" onClick={nextMonth}>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div className="weekdays">
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>
          <div className="calendar-days">{renderCalendar()}</div>
        </section>
      )}
    </main>
  );
};

export default DatePicker;
