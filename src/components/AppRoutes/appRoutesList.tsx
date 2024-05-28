import { Navigate, RouteObject } from "react-router-dom";
import SharedLayout from "../layout/SharedLayout";
import AboutUs from "../AboutUs/AboutUs";
import Support from "../Support/Support";
import Community from "../Community/Community";
import News from "../News/News";
import Store from "../Store/Store";
import Profile from "../Profile/Profile";

export const appRoutesList: RouteObject[] = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/about" replace />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/news",
        element: <News />,
      },
      { path: "/store", element: <Store /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
];
