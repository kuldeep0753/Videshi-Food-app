import { useState } from "react";

const FunctionComponent = ({ name, location }) => {
  let [count, setCount] = useState(0);
  let [inc, setInc] = useState(1);
  const handleIncrementClick = () => {
    count += 1;
    setCount(count);
  };
  const handleDecrementClick = () => {
    if(count>0){
        count -= 1;
        setCount(count);
    }
  };
  return (
    <div>
      <h2>Team details</h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: kdsfsd@gmail.com</h4>
     <div style={{display:"flex"}}>
     <button onClick={handleDecrementClick}> Decrement</button>
      <p>{count}</p>
      <button onClick={handleIncrementClick}> Increment</button>
     
     </div>
     <p>{inc}</p>
    </div>
  );
};

export default FunctionComponent;
