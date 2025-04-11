// Importing necessary modules from React and ReactDOM
import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";

// Importing global CSS file
import "../src/App.css";

// Importing component files
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Body from "./components/Body/Body";
import { Form } from "./components/Form/Form";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Error from "./components/Error/Error";

// Importing routing-related components from React Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";

// ✅ **App Component**
// Acts as the root component for the app layout
const App = () => {
  return (
    <React.StrictMode>
      <div className="restaurant-container">
        {/* Header component displayed at the top of every page */}
        <Header />
        {/* Outlet acts as a placeholder for nested route components */}
        <Outlet />
      </div>
    </React.StrictMode>
  );
};

// Lazy loading concept
const Grocery = lazy(()=>import("./components/Lazy-Loading/Grocery/Grocery"))


// ✅ **Router Configuration**
// Define routes and nested structure using `createBrowserRouter`
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root route, rendering the `App` component
    children: [
      { path: "/", element: <Body /> }, // Default route displaying `Body`
      { path: "/about", element: <About /> }, // Route for `About` page
      { path: "/form", element: <Form /> },
      { path: "/menu", element: <Menu /> },
      { path: "/grocery", element: <Suspense fallback={<h1>Suspended due to taking more time here. Wait for a while Loading...</h1>}><Grocery /> </Suspense>},
      { path: "/restaurant/:resId", element: <RestaurantMenu /> }, // Dynamic route for `RestaurantMenu`
    ],
    errorElement: <Error />, // Fallback component for unknown routes or errors
  },
]);

// ✅ **Root Rendering**
// Creating the root DOM node and rendering the `RouterProvider` with defined routes
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// ❌ **Commented-Out Code**
// The commented-out code is an alternate way to render the `App` component directly without routing
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
