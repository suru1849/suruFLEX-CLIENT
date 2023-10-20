import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Collections from "../Pages/Collections/Collections";
import Details from "../Pages/Details/Details";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Pages/Error/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://entertainment-and-media-server-eosin.vercel.app/addToCart"
          ),
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
          fetch(
            `https://entertainment-and-media-server-eosin.vercel.app/products/${params.category}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://entertainment-and-media-server-eosin.vercel.app/products"
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://entertainment-and-media-server-eosin.vercel.app/products"
          ),
      },
    ],
  },
]);

export default Router;
