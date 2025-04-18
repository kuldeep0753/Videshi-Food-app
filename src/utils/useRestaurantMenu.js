import { useEffect, useState } from "react"; // Importing hooks to manage state and side effects
import { CUISINE_API1, CUISINE_API2 } from "./constants"; // Importing constants for API calls and images

const useRestaurantMenu = (resId) => {
    //console.log(resId);
  // State to store the restaurant menu data
  const [restaurantItemList, setRestaurantItemList] = useState([]);

  // Constructing the API URL using the restaurant ID
  const LIST_OF_RESTAURANT = CUISINE_API1 + resId + CUISINE_API2;

   // Fetch restaurant menu data when `resId` changes
  useEffect(() => {
    //console.log("useeffect")
    if (resId) {
        //console.log("fetch call")
      fetchCuisines();  // Fetch data only if resId is available
    }
  }, []);

   // Function to fetch restaurant menu data
  async function fetchCuisines() {
    try {
      const dataFetch = await fetch(LIST_OF_RESTAURANT);
      const jsonData = await dataFetch.json();
      const cuisinesCard = jsonData.data.cards;
      //console.log(cuisinesCard);
      setRestaurantItemList(cuisinesCard);
    } catch (err) {
      //console.log("Failed to fetch the data:", err);
    }
  }
  //console.log(restaurantItemList);

  return restaurantItemList;
};

export default useRestaurantMenu;
