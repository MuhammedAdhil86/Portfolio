// src/router/routes.js
import Layout from "../components/layout";
import Home from "../pages/home";
import Introduction from "../pages/introduction";
import NotFound from "../components/error/error";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Introduction /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
