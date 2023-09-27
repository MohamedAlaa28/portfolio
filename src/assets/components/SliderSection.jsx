import React, { useContext, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/_SliderSection.scss";
import { HomeContext } from "../../App.js";
import NotFound from "../images/NotFound.svg";
const SliderSection = ({ type, cardsData, Card }) => {
  const data = useContext(HomeContext);

  const cardsRef = useRef(null);
  const scrollLeft = () => {
    cardsRef.current.scrollBy({
      left: -cardsRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardsRef.current.scrollBy({
      left: cardsRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const ProductCards = () => {
    if (!data.meals || data.meals.length === 0) {
      return <img src={NotFound} alt="NotFound" className="notFound" />;
    }

    return data.meals.map((meal) => (
      <Card
        className="product-card"
        key={meal.idMeal}
        meal={meal}
      />
    ));
  };

  const TestimonialCards = () => {
    if (!cardsData || cardsData.length === 0) {
      return <img src={NotFound} alt="NotFound" className="notFound" />;
    }

    return cardsData.map((cardData) => (
      <Card
        className="product-card"
        key={cardData.id}
        rate={cardData.rateValue}
        image={cardData.Image}
        name={cardData.name}
        comment={cardData.comment}
      />
    ));
  };

  return (
    <section className="cards-section">
      <button className="prev-button" onClick={scrollLeft}>
        <FaArrowLeft />
      </button>

      <div className="cards" ref={cardsRef}>
        {type === "product" ? <ProductCards /> : <TestimonialCards />}
      </div>

      <button className="next-button" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </section>
  );
};

export default SliderSection;
