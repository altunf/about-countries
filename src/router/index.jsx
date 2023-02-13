import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/details/:name",
        element: <DetailPage />,
      },
    ],
  },
]);
