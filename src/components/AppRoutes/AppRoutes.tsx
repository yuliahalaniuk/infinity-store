import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { appRoutesList } from "./appRoutesList";

export interface AppRoutesProps {}

const router = createBrowserRouter(appRoutesList, {
  basename: "/",
});

export default function AppRoutes(_props: AppRoutesProps) {
  return <RouterProvider router={router} />;
}
