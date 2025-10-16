import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUs } from "./screens/AboutUs";
import { ContactUs } from "./screens/ContactUs";
import { Home } from "./screens/Home";
import { Services } from "./screens/Services";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/home-3",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
