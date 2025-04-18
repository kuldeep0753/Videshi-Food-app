import { CARD_LOGO } from "../../utils/constants"; // Importing constants for image URL
import { Link } from "react-router-dom"; // Importing Link for client-side navigation
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";

// Functional component to display restaurant details
export const RestaurantCard = (props) => {
  // Destructuring props to extract restaurant data
  const { resData } = props;
  console.log(props);

  // Further destructuring to extract specific fields from restaurant data
  const {
    cloudinaryImageId, // Image ID for restaurant image
    aggregatedDiscountInfoV3, // Discount info object
    name, // Restaurant name
    avgRatingString, // Average rating
    sla, // Service Level Agreement object (contains delivery time)
    cuisines, // List of cuisines offered
    locality, // Location or address of the restaurant
  } = resData;

  return (
    <>
      {/* Restaurant details container */}
      <div className="card-details">
        {/* Displaying restaurant image */}
        <img src={CARD_LOGO + cloudinaryImageId} alt="not load" />

        {/* Displaying discount info */}
        <p
          className="offer"
          style={{
            display: "flex", // Flexbox for alignment
            justifyContent: "center", // Center align horizontally
            alignItems: "center", // Center align vertically
          }}
        >
          {/* Discount header */}
          {aggregatedDiscountInfoV3?.header}
          <span style={{ paddingLeft: "5px" }}>
            {/* Display subHeader if available, else show fallback text */}
            {aggregatedDiscountInfoV3?.subHeader?.trim() ||
              "No Discount Available"}
          </span>
        </p>

        {/* Display restaurant name */}
        <b className="restaurant-name">{name}</b>

        {/* Display rating and delivery time */}
        <b className="rating">
          Rating: {avgRatingString}
          <span className="time">{sla.deliveryTime}min</span>
        </b>

        {/* Display cuisines */}
        <b className="dishes-name">{cuisines.join(" ,")}</b>

        {/* Display locality/address */}
        <p className="address">{locality}</p>
      </div>
    </>
  );
};

export const WithPromotedRestaturantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="" style={{color:"green"}}>Vegetarian</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
