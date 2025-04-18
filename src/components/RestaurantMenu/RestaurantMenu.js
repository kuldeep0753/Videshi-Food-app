import { useEffect, useState } from "react"; // Importing hooks to manage state and side effects
import { CUISINES_LOGO } from "../../utils/constants"; // Importing constants (like image base URL)
import { Shimmer } from "../Shimmer/Shimmer"; // Importing Shimmer component to show loading UI
import { useParams } from "react-router-dom"; // To get dynamic params from URL
import useRestaurantMenu from "../../utils/useRestaurantMenu.js"; // Custom hook to fetch restaurant data
import "./RestaurantMenu.css"; // Importing styling

const RestaurantMenu = () => {
  // Getting restaurant ID from the route parameters
  const { resId } = useParams();
  //console.log(resId); // Logging restaurantId

  // Fetching restaurant menu using custom hook
  const restaurantItemList = useRestaurantMenu(resId);
  console.log(restaurantItemList); // Logging fetched data

   //console.log("1");

  // Extracting regular menu cards from deeply nested response
  const regularCards =
    restaurantItemList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // find() method: Extracting the first card that contains itemCards
  const selectedCard = regularCards?.find(
    (card) => card?.card?.card?.itemCards
  );

  // Extracting actual menu items array
  const arrayItem = selectedCard?.card?.card?.itemCards;
  console.log(arrayItem); // Logging extracted menu items

  // Extracting restaurant name from API response
  const restaurantName = restaurantItemList[0]?.card?.card?.text;
  //console.log(restaurantName); // Logging restaurant name

     //console.log("2");

  // Show loading shimmer if data is not yet available
  if (restaurantItemList === null) return <Shimmer />;

  // Rendering restaurant name and menu
  return (
    <div className="cuisine-container">
       {/* {//console.log("5")} */}
      <h1 className="restro-name">{restaurantName}</h1> {/* Display restaurant name */}
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {/* Loop through each menu item and render */}
        {arrayItem?.map((res, index) => (
          <div key={index} className="menu-item">
            <li className="menu-item-name">{res?.card?.info?.name}</li>
            <img
              src={CUISINES_LOGO + res?.card?.info?.imageId} // Construct full image URL
              alt={res?.card?.info?.name}
              className="menu-item-image"
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
