import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        element: <div>About Page</div>,
      },
    ],
  },
]);

export default router;