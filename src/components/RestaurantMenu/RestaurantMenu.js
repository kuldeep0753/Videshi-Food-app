import { useEffect, useState } from "react"; // Importing hooks to manage state and side effects
import {
  CUISINES_LOGO,
  CUISINE_API1,
  CUISINE_API2,
} from "../../utils/constants"; // Importing constants for API calls and images
import { Shimmer } from "../Shimmer/Shimmer"; // Importing Shimmer component for loading state
import { useParams } from "react-router-dom"; // Importing useParams to get dynamic route parameters
import "./RestaurantMenu.css"; // Importing CSS for styling

const RestaurantMenu = () => {
  // State to store the restaurant menu data
  const [restaurantItemList, setRestaurantItemList] = useState([]);

  // Extracting the menu items from the API response (nested structure)
  const arrayItem =
    restaurantItemList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  // Getting restaurant ID from the URL parameters
  const { resId } = useParams();
  console.log(resId);

  // Constructing the API URL using the restaurant ID
  const LIST_OF_RESTAURANT = CUISINE_API1 + resId + CUISINE_API2;

  // Fetch restaurant menu data when `resId` changes
  useEffect(() => {
    if (resId) fetchCuisines(); // Fetch data only if resId is available
  }, [resId]);

  // Function to fetch restaurant menu data
  async function fetchCuisines() {
    try {
      const dataFetch = await fetch(LIST_OF_RESTAURANT); // API call to fetch data
      const jsonData = await dataFetch.json(); // Parsing response as JSON
      const cuisinesCard = jsonData.data.cards; // Extracting relevant data from response
      setRestaurantItemList(cuisinesCard); // Updating state with fetched data
    } catch (err) {
      console.log("Failed to fetch data:", err); // Error handling
    }
  }

  // Extracting restaurant name from the data
  const restaurantName = restaurantItemList[0]?.card?.card?.text;
  console.log(restaurantName);

  // Conditional rendering: Show Shimmer while data is loading, show menu after loading
  return restaurantItemList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="cuisine-container">
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