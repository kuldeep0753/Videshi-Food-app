import "./AccordianList.css";
import { CUISINES_LOGO } from "../../utils/constants";

const AccordianItemList = (props) => {
  return (
    <div className="accordion-list-container">
      {props.items.map((data, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-text-content">
            <b className="accordion-item-title">{data.card.info.name}</b>
            <p className="accordion-item-price">
              ₹{data.card.info.defaultPrice ? data.card.info.defaultPrice / 100 : data.card.info.price / 100}
            </p>
            <p className="accordion-item-rating">
              {data.card.info.ratings?.aggregatedRating?.rating ? `⭐ ${data.card.info.ratings.aggregatedRating.rating}` : ''}
            </p>
            <p className="accordion-description">
              {data.card.info.description}
            </p>
          </div>
          <div className="accordion-image-wrapper">
            <img
              className="accordion-item-image"
              src={CUISINES_LOGO + data?.card?.info?.imageId}
              alt={data.card.info.name}
            />
          </div>
          <hr className="accordion-divider" />
        </div>
      ))}
    </div>
  );
};

export default AccordianItemList;
