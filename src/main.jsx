import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./sass/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Pages/ErrorPage";
import Landing from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import ProgramPage from "./components/Pages/ProgramPage";
import FavouritesPage from "./components/Pages/FavouritesPage";
import BandPage from "./components/Pages/BandPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/log-in",
        element: <LoginPage />,
      },
      {
        path: "/landing-page",
        element: <Landing />,
      },
      {
        path: "/program-page",
        element: <ProgramPage />,
      },
      {
        path: "/favourites-page",
        element: <FavouritesPage />,
      },
      {
        path: "/band-page",
        element: <BandPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
