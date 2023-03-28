import { createBrowserRouter } from "react-router-dom";
import {
  Login,
  Register,
  PublicLayout,
  Home,
  Blogs,
  NewBlog,
  Jobs,
} from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      // Blog Routes
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/new_blog",
        element: <NewBlog />,
      },
      // Job Routes
      {
        path: "/jobs",
        element: <Jobs />,
      },
    ],
  },
]);

export default router;
