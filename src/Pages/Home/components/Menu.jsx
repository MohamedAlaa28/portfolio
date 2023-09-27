import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/_Menu.scss";
import { MdDeliveryDining } from "react-icons/md";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [categoryMeals, setCategoryMeals] = useState([]);
  const [categoryValue, setCategoryValue] = useState("Vegetarian");

  useEffect(() => {
    const fetchMealsAndCategories = async () => {
      try {
        const mealsResponse = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const mealsData = mealsResponse.data.meals;
        setMeals(mealsData);

        const categoriesResponse = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const categoriesData = categoriesResponse.data.categories;
        setCategories(categoriesData);
      } catch (error) {
        console.log("Error fetching meals and categories:", error);
      }
    };

    fetchMealsAndCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setCategoryValue(category);
  };

  const categoriesWithMeals = categories.filter((category) =>
    meals.some(
      (meal) =>
        meal.strCategory === category.strCategory &&
        category.strCategory !== "Miscellaneous"
    )
  );

  const filteredMeals = meals.filter(
    (meal) => meal.strCategory === categoryValue
  );
  const categoryMeals = (selectedMeals) => {
    return filteredMeals.filter((meal) => meal.strCategory === selectedMeals);
  };

  return (
    <main id="main" className="menu-section">
      <h1 className="h1">Menu</h1>
      <section className="menu-sub-section">
        {categoriesWithMeals.map((category) => (
          <div
            key={category.idCategory}
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            <div className="button-row">
              <button
                className={` ${
                  category.strCategory === categoryValue && "select "
                }  category-button h3 `}
              >
                {category.strCategory}
              </button>
            </div>
            <div className="meals">
              {categoryValue === category.strCategory &&
                categoryMeals(category.strCategory).map((meal) => (
                  <div key={meal.idMeal} className="meal">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />

                    <div>
                      <p className="h3">{meal.strMeal}</p>
                      <p className="price h3">30 $</p>
                    </div>

                    <button className="icon-button">
                      <MdDeliveryDining className="icon" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Menu;
