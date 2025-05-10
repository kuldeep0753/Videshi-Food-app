import { useState } from "react";
import { AccordianButton } from "../AccordianButton/AccordianButton";
import AccordianItemList from "../AccordianList/AccordianList";

const RestaurantAccordian = ({ item_category }) => {
  // console.log(item_category);

  return (
    <div className="">
      {/* Accordian Header */}
      <div className="">
        {item_category && item_category.length > 0 ? (
          item_category.map((item_category, index) => (
            <AccordianButton key={index} value={item_category.card.card} />
          ))
        ) : (
          <p className="">No categories available.</p>
        )}
        
      </div>
         {/* Accordian List */}
    </div>
  );
};

export default RestaurantAccordian;
