import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/add-product",
        element: <div>add product</div>,
      },
    ],
  },
]);

export default Router;
