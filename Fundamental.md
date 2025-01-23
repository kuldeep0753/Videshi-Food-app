import React from "react";
import ReactDOM from "react-dom/client";

// const nestEle = React.createElement('p',{id:'child'},'Hi I am ReactJS');
// const nestEle1 = React.createElement('p',{id:'child'},'Hi Bro');
// const heading = React.createElement('div',{id:'parent'},[nestEle,nestEle1]);

const Title =()=>{
    <h1>ReactJs 2025</h1>
}

const Heading = () => (
  <div>
    <Title/>
    <p>Hi now I am original</p>
    <p> Learing react</p>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
