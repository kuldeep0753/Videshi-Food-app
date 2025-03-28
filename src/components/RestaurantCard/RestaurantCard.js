import { CARD_LOGO } from "../../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props; //Destructuring the object
    const {
        cloudinaryImageId,
        aggregatedDiscountInfoV3,
      name,
      avgRatingString,
      sla,
      cuisines,
      locality,
    } = resData;
  
  return (
    <>
      <div className="card-details">
        <img src={CARD_LOGO + cloudinaryImageId} alt="not load" />
        <p className="offer" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{aggregatedDiscountInfoV3?.header }<span style={{paddingLeft:"5px"}}>{aggregatedDiscountInfoV3?.subHeader?.trim() || "No Discount Available"}</span></p>
        <b className="restaurant-name">{name}</b>
        <b className="rating">
          Rating: {avgRatingString}
          <span className="time">{sla.deliveryTime}min</span>
        </b>
        <b className="dishes-name">{cuisines.join(" ,")}</b>
        <p className="address">{locality}</p>
      </div>
    </>
  );
};
