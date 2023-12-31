import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Phones } from "./Component/Phones/Phones.jsx";
import { Favorite } from "./Component/Favorite/Favorite.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://api.npoint.io/088134cc8d8d7a2433cc"),
        element: <Phones />,
      },
      {
        path: "/favorite",
        loader: () => fetch("https://api.npoint.io/088134cc8d8d7a2433cc"),
        element: <Favorite />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
