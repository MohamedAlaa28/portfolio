import React, { useState } from "react";
import "./ProductDetailsPage.scss";
import { useLocation } from "react-router-dom";
import { PiBowlFood } from "react-icons/pi";
import Button from "../../assets/components/Button";
import CardOverlay from "../../assets/components/CardOverlay";
const ProductDetailsPage = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { meal } = location.state || {};

  const ingredientsFunction = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        // Stop if no more ingredients
        break;
      }
    }
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    );
  };

  return (
    <section className="Product-details">
      <div className="details-section">
        <div className="first-section">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <Button
            text="Ingredients"
            icon={<PiBowlFood className="icon" />}
            onClick={() => setToggle(!toggle)}
            aria-label="On Click"
          />
        </div>
        <div className="second-section">
          <p className="h1">{meal.strMeal}</p>
          <p className="p">{meal.strInstructions}</p>
        </div>
        {toggle && (
          <CardOverlay
            className="cardOverlay"
            toggle={toggle}
            setToggle={setToggle}
            title="Ingredients"
            content={ingredientsFunction()}
          />
        )}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
