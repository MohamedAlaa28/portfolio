import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../css/_CustomSelect.scss";
import FromButton from "./FromButton";

const CustomSelect = ({ value, setState, options, placeholder, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    setState({ value: option });
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
     <FromButton value = {value} isOpen = {isOpen} setIsOpen = {setIsOpen} renderValue = {renderValue}/>
      {isOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={option === value ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default CustomSelect;
