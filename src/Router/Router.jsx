import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Collections from "../Pages/Collections/Collections";
import Details from "../Pages/Details/Details";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/collections/:category",
        element: <Collections></Collections>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.category}`),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/products"),
      },
    ],
  },
]);

export default Router;
