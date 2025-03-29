import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import { Form } from "./components/Form/Form";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const App = () => {
  return (
    <div className="restaurant-container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Body/>},
      { path: "/about", element: <About /> },
      { path: "/form", element: <Form /> },
      { path: "/restaurant/:refId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
