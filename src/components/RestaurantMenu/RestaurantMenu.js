import { useEffect, useState } from "react"; // Importing hooks to manage state and side effects
import { CUISINES_LOGO } from "../../utils/constants"; // Importing constants for API calls and images
import { Shimmer } from "../Shimmer/Shimmer"; // Importing Shimmer component for loading state
import { useParams } from "react-router-dom"; // Importing useParams to get dynamic route parameters
import useRestaurantMenu from "../../utils/useRestaurantMenu.js";
import "./RestaurantMenu.css"; // Importing CSS for styling

const RestaurantMenu = () => {
  // Getting restaurant ID from the URL parameters
  const { resId } = useParams();
  console.log(resId); //restaurantId

  const restaurantItemList = useRestaurantMenu(resId);
  console.log(restaurantItemList);
  // console.log("1");

  // Extracting the menu items from the API response (nested structure)
  const regularCards =
    restaurantItemList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //TODO find() is an array method that returns the first element that matches a condition.
  const selectedCard = regularCards?.find(
    (card) => card?.card?.card?.itemCards
  );

  const arrayItem = selectedCard?.card?.card?.itemCards;

  console.log(arrayItem);

  // Extracting restaurant name from the data
  const restaurantName = restaurantItemList[0]?.card?.card?.text;
  console.log(restaurantName);
  // console.log("2");
  if (restaurantItemList === null) <Shimmer></Shimmer>;

  // Conditional rendering: Show Shimmer while data is loading, show menu after loading
  return (
    <div className="cuisine-container">
      {/* {console.log("5")} */}
      {/* Display restaurant name */}
      <h1 className="restro-name">{restaurantName}</h1>
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {/* Mapping through menu items and displaying each */}
        {arrayItem?.map((res, index) => (
          <div key={index} className="menu-item">
            <li className="menu-item-name">{res?.card?.info?.name}</li>
            <img
              src={CUISINES_LOGO + res?.card?.info?.imageId} // Displaying item image
              alt={res.card.info.name}
              className="menu-item-image"
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
