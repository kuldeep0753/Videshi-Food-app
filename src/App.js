import React from "react";
import ReactDOM from "react-dom/client";
import "../src/App.css";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import { Form } from "./components/Form/Form";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="restaurant-container">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about",
    element: <About /> },
    
  { path: "/form",
    element: <Form /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
