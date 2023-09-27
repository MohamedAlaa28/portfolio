import React from "react";
import profile_1 from "../../../assets/images/300-0.png";
import profile_2 from "../../../assets/images/300-1.jpg";
import profile_3 from "../../../assets/images/300-2.jpg";
import profile_4 from "../../../assets/images/300-3.jpg";
import profile_5 from "../../../assets/images/300-4.jpg";
import profile_6 from "../../../assets/images/08c5772c481233a30a46aeca552132053604e2a8.svg";
import profile_7 from "../../../assets/images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.svg";
import TestimonialCard from "../../../assets/components/TestimonialCard";
import SliderSection from "../../../assets/components/SliderSection";
import "../css/_Testimonials.scss";

const cards = [
  {
    id: 1,
    name: "Mohamed Alaa",
    rateValue: 5,
    comment:
      "Loved Little Lemon! Great atmosphere, impeccable service, and delicious food. Highly recommended!",
    Image: profile_1,
  },
  {
    id: 2,
    name: "Max Johnson",
    rateValue: 5,
    comment:
      "I can't get enough of Little Lemon! From the cozy ambiance to the mouthwatering flavors, everything is top-notch.",
    Image: profile_2,
  },
  {
    id: 3,
    name: "Liam Parker",
    rateValue: 5,
    comment:
      "Little Lemon never fails to impress! The attentive staff, flavorful dishes, and overall dining experience are consistently outstanding",
    Image: profile_3,
  },
  {
    id: 4,
    name: "Mia Sullivan",
    rateValue: 4,
    comment:
      "Delightful experience at Little Lemon! Cozy ambiance, diverse menu, and attentive staff. A new favorite!",
    Image: profile_4,
  },
  {
    id: 5,
    name: "Ethan Mitchell",
    rateValue: 5,
    comment:
      "Absolutely loved my dining experience at Little Lemon! The food was incredibly flavorful and beautifully presented.",
    Image: profile_5,
  },
  {
    id: 6,
    name: "Ava Collins",
    rateValue: 4,
    comment:
      "Fantastic time at Little Lemon! Great atmosphere, tasty food, and friendly staff. Will definitely be back for more!",
    Image: profile_6,
  },
  {
    id: 7,
    name: "Henry Davis",
    rateValue: 5,
    comment:
      "The flavors at Little Lemon are a symphony for the taste buds. Every bite is a perfect balance of textures and tastes.",
    Image: profile_7,
  },
];

const Testimonials = () => {

  return (
    <section className="testimonials">
      <p className="h1">testimonials</p>
      <SliderSection type="testimonials" cardsData={cards} Card={TestimonialCard}/>
    </section>
  );
};

export default Testimonials;