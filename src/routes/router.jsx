import { createBrowserRouter } from "react-router";
import Error from "../components/Error";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import DonationRequests from "../pages/DonationRequests/DonationRequests";
import Blogs from "../pages/Blogs/Blogs";



const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error />,
    children: [
      {
        path: "*",
        element: <Error />
      },
      {
        index: true,
        Component: Home,
      },
      {
        path: "donation-requests",
        Component: DonationRequests,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "about",
        element: <div>About Page</div>,
      },
    ],
  },
]);

export default router;