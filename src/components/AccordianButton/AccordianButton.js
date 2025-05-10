import "./accordian.css";
import { useState } from "react";
import AccordianItemList from "../AccordianList/AccordianList";
export const AccordianButton = (props) => {
  const [showItem,setShowItem] = useState(false);
  // console.log(props.value);
  const handleClick = ()=>{
    console.log("show/Hide")
    setShowItem(!showItem);
  }
  return (
    <div>
      <button className="accordion-button" type="button" onClick={handleClick}>
        <span>
          {props.value.title} ({props.value.itemCards.length})
        </span>
        <span>🔻🔽</span>
      </button>
      
        {showItem && <AccordianItemList items={props.value.itemCards} />}
      
    </div>
  );
};
