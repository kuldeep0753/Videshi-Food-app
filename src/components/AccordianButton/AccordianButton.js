import "./AccordianButton.css";
import { useState } from "react";
import AccordianItemList from "../AccordianList/AccordianList";

export const AccordianButton = (props) => {
  // const [showItem, setShowItem] = useState(false);
  // const [flag, setFlag] = useState("🔽");🔼

  //Lifting the state UP; By giving power to parent component , and its is called as a controlled component
  const handleClick = () => {
    props.setShowIndexParent()
    // props.toggleArrowFunc()
  };

  return (
    <div className="accordion-wrapper">
      <button className="accordion-button" type="button" onClick={handleClick}>
        <span className="accordion-title">
          {props.value.title} ({props.value.itemCards.length})
        </span>
        {/* //toggle arrow key */}
        <span className="accordion-icon">{props.toggleArrow}</span>
      </button>

      {props.showItem && (
        <div className="accordion-item-list">
          <AccordianItemList items={props.value.itemCards} />
        </div>
      )}
    </div>
  );
};
