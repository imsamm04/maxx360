import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/common/Layout/MainLayout/MainLayout";
import { HomePage, NotFoundPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
