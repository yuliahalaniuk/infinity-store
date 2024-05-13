import { RouteObject } from "react-router-dom";
import SharedLayout from "../layout/SharedLayout";
import AboutUs from "../AboutUs/AboutUs";
import Support from "../Support/Support";

export const appRoutesList: RouteObject[] = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },

  // children: [
  //   {
  //     path: "/register",
  //     element: <RegisterPage />,
  //     children: [
  //       { path: "/register/success", element: <SuccessRegisterPage /> },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <LogInPage />,
  //   },
  // ],

  //   {
  //     path: "/",
  //     element: <PrivateLayout />,
  //     children: [
  //       {
  //         // label: "Dashboard",
  //         path: "/transactions",
  //         element: <Transactions />,
  //       },
  //       { path: "/invoices", element: <InvoicesPage /> },
  //       { path: "/users", element: <UsersPage /> },
  //       { path: "/profile", element: <ProfilePage /> },
  //       { path: "/events", element: <EventsPage /> },
  //     ],
  //   },
  //   {
  //     path: "/admin",
  //     element: <AdminLayout isDevMode={ConfigService.isDevMode} />,
  //     children: [
  //       {
  //         path: "mlm-rules",
  //         element: <MlmRulesPage />,
  //       },
  //     ],
  //   },
  //   { path: "*", element: <NotFoundPage /> },
];
