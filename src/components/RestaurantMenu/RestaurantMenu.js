import { useEffect, useState } from "react"; // Importing hooks to manage state and side effects
import { CUISINES_LOGO } from "../../utils/constants"; // Importing constants (like image base URL)
import { Shimmer } from "../Shimmer/Shimmer"; // Importing Shimmer component to show loading UI
import { useParams } from "react-router-dom"; // To get dynamic params from URL
import useRestaurantMenu from "../../utils/useRestaurantMenu.js"; // Custom hook to fetch restaurant data
import "./RestaurantMenu.css"; // Importing styling
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory.js";

const RestaurantMenu = () => {
  // Getting restaurant ID from the route parameters
  const { resId } = useParams();
  //console.log(resId); // Logging restaurantId

  // Fetching restaurant menu using custom hook
  const restaurantItemList = useRestaurantMenu(resId);

  //Accordian data
  const accordianCards =
    restaurantItemList[4]?.groupedCard?.cardGroupMap?.REGULAR;

  let itemCategory;

  if (accordianCards) {
    // console.log(accordianCards.cards[0]?.card?.card?.["@type"]);

    itemCategory = accordianCards.cards.filter((item) => {
      return (
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

    // console.log(itemCategory);
  }

  // Extracting restaurant name from API response
  const restaurantName = restaurantItemList[0]?.card?.card?.text;
  //console.log(restaurantName); // Logging restaurant name

  // Show loading shimmer if data is not yet available
  if (restaurantItemList === null) return <Shimmer />;

  // Rendering restaurant name and menu
  return (
    <div className="cuisine-container">
      {/* console.log("5") */}
      <h1 className="restro-name">{restaurantName}</h1>{" "}
      {/* Display restaurant name */}
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        <RestaurantCategory item_category={itemCategory} />
      </ul>
    </div>
  );
};

export default RestaurantMenu;
