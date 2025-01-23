import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";

const AppLayout = () => {
  return (
    <div className="restaurant-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
