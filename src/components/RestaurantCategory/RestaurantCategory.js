import { useState } from "react";
import { AccordianButton } from "../AccordianButton/AccordianButton";
import "./RestaurantCategory.css";

const RestaurantAccordian = ({ item_category }) => {
  // console.log(item_category)
  const [showIndex, setShowIndex] = useState(null);
  const [flag, setFlag] = useState("🔽");

  const handleToggleBtn = () => {
    console.log("checj")
    // Arrow button logic
    if (showIndex == true) {
      setShowIndex(null);
      setFlag("🔽");
    } else {
      setFlag("🔼");
      // setShowIndex(index);
      // console.log(showIndex);
      //  props.setShowIndexParent()
    }
  };

  return (
    <div className="restaurant-accordion-container">
      <div className="accordion-section">
        {item_category && item_category.length > 0 ? (
          item_category.map((item_category, index) => (
            <AccordianButton
              key={item_category.card.card.title}
              value={item_category.card.card}
              showItem={index === showIndex ? true : false}
              setShowIndexParent={() => {
                setShowIndex(index);
              }}
              toggleArrow={flag}
              // toggleArrowFunc = {()=>setFlag("🔼")}
              onClick={handleToggleBtn}
            />
          ))
        ) : (
          <p className="no-category-message">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantAccordian;
