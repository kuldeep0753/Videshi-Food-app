import { AccordianButton } from "../AccordianButton/AccordianButton";
import "./RestaurantCategory.css";

const RestaurantAccordian = ({ item_category }) => {
  return (
    <div className="restaurant-accordion-container">
      <div className="accordion-section">
        {item_category && item_category.length > 0 ? (
          item_category.map((item_category, index) => (
            <AccordianButton key={index} value={item_category.card.card} />
          ))
        ) : (
          <p className="no-category-message">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantAccordian;
