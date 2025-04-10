import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]); // List of all restaurants to display
  const [searchText, setSearchText] = useState(""); // State to store the search input value
  const [searchRestaurant, setSearchRestaurant] = useState([]); // Backup list for search functionality

  const onlineStatus = useOnlineStatus(true);

  const RESTAURANT_API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  // Fetch restaurant data from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      const allRestaurantCard =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      // Update state with fetched restaurant data
      setListOfRestaurant(allRestaurantCard);
      setSearchRestaurant(allRestaurantCard);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // Filter restaurants based on search input
  const handleSearch = () => {
    const filteredRestaurants = searchRestaurant.filter((res) =>
      res?.info?.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setListOfRestaurant(filteredRestaurants);
  };

  // Filter top-rated restaurants (rating > 4.5)
  const handleTopRated = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (data) => data.info.avgRating > 4.5
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  // Render loading shimmer if data is not yet available
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  if(onlineStatus === false){
    return (<>
    <h1>
      Looks like you lost internet Connection
    </h1>
    </>)
  }

  return (
    <div className="body">
      <div className="filter">
        {/* Search Functionality */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Item"
            className="item-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            SEARCH
          </button>
        </div>

        {/* Top Rated Filter */}
        <div className="filter-top-rated">
          <button className="filter-btn" onClick={handleTopRated}>
            TOP RATED
          </button>
        </div>
      </div>

      {/* Render restaurant cards */}
      <div className="restaurant-card">
        {listOfRestaurant.map((rescard) => (
          <Link to={"/restaurant/" + rescard.info.id} key={rescard.info.id}>
            <RestaurantCard resData={rescard.info}  />
            {/* {console.log(rescard)} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
