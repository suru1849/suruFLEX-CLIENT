import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import DataProvider from "./Provider/DataProvider/DataProvider";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>
);
