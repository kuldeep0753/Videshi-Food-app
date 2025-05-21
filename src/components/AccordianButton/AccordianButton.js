import "./AccordianButton.css";
import { useState } from "react";
import AccordianItemList from "../AccordianList/AccordianList";

export const AccordianButton = (props) => {
  const [showItem, setShowItem] = useState(false);
  const [ flag,setFlag] = useState("🔽");

  const handleClick = () => {
    console.log("show/Hide");
    setShowItem(!showItem);
  };

  const handleArrowBtn = ()=>{
    if(flag === "🔼"){
      setFlag("🔽")
    }else{
      setFlag("🔼")
    }
  }

  return (
    <div className="accordion-wrapper">
      <button className="accordion-button" type="button" onClick={handleClick}>
        <span className="accordion-title">
          {props.value.title} ({props.value.itemCards.length})
        </span>
        <span className="accordion-icon" onClick={handleArrowBtn}>{flag}</span>
      </button>

      {showItem && (
        <div className="accordion-item-list">
          <AccordianItemList items={props.value.itemCards} />
        </div>
      )}
    </div>
  );
};
