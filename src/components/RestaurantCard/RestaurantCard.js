export const RestaurantCard = (props) => {
    const { resData } = props;
    //   console.log(resData.aggregatedDiscountInfoV);
    const {
      cloudinaryImageId,
      aggregatedDiscountInfoV,
      name,
      avgRatingString,
      sla,
      cuisines,
      locality,
    } = resData.info;
    return (
      <div className="card-details">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            cloudinaryImageId
          }
          alt="not load"
        />
        <p className="offer">
          {aggregatedDiscountInfoV.header +
            " " +
            aggregatedDiscountInfoV.subHeader}
        </p>
        <b className="restaurant-name">{name}</b>
        <b className="rating">
          Rating: {avgRatingString}
          <span className="time">{sla.deliveryTime}min</span>
        </b>
        <b className="dishes-name">{cuisines}</b>
        <p className="address">{locality}</p>
      </div>
    );
  };