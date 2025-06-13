import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Introduction from "../pages/introduction";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <Layout />
      
    ),
    children: [
      { path: "/", element: <Introduction /> },
      { path: "home", element: <Home /> },

      

      
    ],
  },
]);

export default router;
