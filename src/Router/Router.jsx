import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/my-cart",
        element: <div>my cart</div>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
