import { useEffect, useState } from "react";
import { CUISINES_LOGO } from "../../utils/constants";
import { Shimmer } from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu.js";
import "./RestaurantMenu.css";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantItemList = useRestaurantMenu(resId);

  const accordianCards =
    restaurantItemList[4]?.groupedCard?.cardGroupMap?.REGULAR;

  let itemCategory;

  if (accordianCards) {
    itemCategory = accordianCards.cards.filter((item) => {
      return (
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  }

  const restaurantName = restaurantItemList[0]?.card?.card?.text;

  if (restaurantItemList === null) return <Shimmer />;

  return (
    <div className="restaurant-item-container">
      <h1 className="restaurant-name">{restaurantName}</h1>
      <h2 className="menu-heading">Menu</h2>
      <div className="category-list">
        <RestaurantCategory item_category={itemCategory} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
