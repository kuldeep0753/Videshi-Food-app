import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Shimmer } from "./components/Shimmer/Shimmer";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <App/>
   {/* <Shimmer/> */}
  </React.StrictMode>,
);

 