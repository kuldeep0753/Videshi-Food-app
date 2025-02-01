import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { restaurantData } from "../../utils/mockData";
import { useEffect, useState } from "react";

let AllRestaurantCard =
  restaurantData.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;

const Body = () => {
  const [filterCard, setFilterCard] = useState(AllRestaurantCard);
  console.log(filterCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5204303&lng=73.8567437&str=Vegan&trackingId=undefined&submitAction=ENTER&queryUniqueId=4636b9b5-9963-d273-79db-c9b6b1afd5ff&selectedPLTab=RESTAURANT"
    );
    const json = await data.json();
    AllRestaurantCard =
      json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;

    console.log(AllRestaurantCard);
    const originalCard = AllRestaurantCard[0].card.card.info;
    setFilterCard(originalCard);
    setFilterCard(AllRestaurantCard);
  };
  // if(filterCard.length === 0){
  //   return <h1>Loading page</h1>
  // }
  return filterCard.length === 0?  <h1>Loading page</h1>:(<div className="body">
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          let filterRatingCard = filterCard.filter(
            (data) => data.card?.card?.info.avgRating > 4.3
          );
          setFilterCard(filterRatingCard);
        }}
      >
        TOP RATED
      </button>
    </div>
    <div className="restaurant-card">
      {filterCard.map((rescard, index) => (
        <RestaurantCard resData={rescard.card?.card?.info} key={index} />
      ))}
    </div>
  </div>)
   
};

export default Body;
