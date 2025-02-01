import React from "react";
import "../src/App.css"
import { Header } from "./components/Header/Header";
import Body from "./components/Body/Body"

 const App = () => {
  return (
    <div className="restaurant-container">
      <Header />
      <Body /> 
    </div>
  );
};
export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
