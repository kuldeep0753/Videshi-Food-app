import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import restaurantData from "./../../Api/mock.json";
console.log(restaurantData);

const Body = () => {
  return (
    <div className="body">
      <div className="search-box"></div>
      <div className="restaurant-card">
        {restaurantData.restaurants.map((rescard) => (
          <RestaurantCard resData={rescard} key={rescard.info.id}/>
        ))}
      </div>
    </div>
  );
};

export default Body;