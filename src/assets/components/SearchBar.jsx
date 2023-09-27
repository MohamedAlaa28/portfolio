import React, { useContext, useState } from "react";
import "../css/_SearchBar.scss";
import { BiSearch } from "react-icons/bi";
import { NavBarContext } from "../../App.js";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const data = useContext(NavBarContext);

  const [inputFocused, setInputFocused] = useState(false);

  const handleSearchChange = (e) => {
    data.setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setInputFocused(false);
  };

  const removeSearchValue = () => {
    data.setSearchValue("");
    const inputElement = document.querySelector(".search-input");
    if (inputElement) {
      inputElement.focus();
    }
  };

  const navigate = useNavigate();
  const handleClickLink = (meal) => {
    navigate(`/product/${meal.idMeal}`, { state: { meal: meal } });
  };

  const ProductCards = () => {
    return data.searchMeals?.slice(0, 6)?.map((meal) => (
      <button
        key={meal.idMeal}
        onClick={() => handleClickLink(meal)}
        className="sub-search-menu"
      >
        <img src={meal.strMealThumb} alt={`${meal.idMeal} search`} />
        <p>{meal.strMeal}</p>
      </button>
    ));
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        type="search"
        value={data.searchValue}
        onChange={handleSearchChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() =>
          setTimeout(() => {
            setInputFocused(false);
          }, 150)
        }
        placeholder="Search"
        className="search-input"
      />
      {/* {data.searchValue.trim().length > 0 && (
        <AiOutlineClose className="close-icon" onClick={removeSearchValue} />
      )} */}
      <button type="submit" className="search-button">
        <BiSearch />
      </button>
      {inputFocused && (
        <div className={`${data.searchMeals && "search-shadow"} search-menu`}>
          {ProductCards()}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
