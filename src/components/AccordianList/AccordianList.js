import "./AccordianList.css";
import { CUISINES_LOGO } from "../../utils/constants";
const AccordianItemList = (props) => {
//   console.log(props);
  return (
    <div>
      {props.items.map((data, index) => (
        <div key={index} className="accordian-data">
          <div>
            <b className="listItems">{data.card.info.name}</b>
            <p>₹{data.card.info.defaultPrice?data.card.info.defaultPrice / 100:data.card.info.price/100}</p>
            <p>{data.card.info.ratings?.aggregatedRating?.rating ? `⭐ ${data.card.info.ratings.aggregatedRating.rating}` : ''}</p>
            <p className="accordian-description">
              {data.card.info.description}
            </p>
          </div>
            {/*TODO: Add button  */}
          <img src={CUISINES_LOGO + data?.card?.info?.imageId} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AccordianItemList;
