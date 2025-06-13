import Layout from "../components/layout";          // wraps all pages
import Home from "../pages/home";
import Introduction from "../pages/introduction";
import NotFound from "../components/error/error";            // catch‑all 404 page

const routes = [
  {
    path: "/",
    element: <Layout />,          // <Outlet/> must be inside Layout
    children: [
      { index: true, element: <Introduction /> },  // renders at "/"
      { path: "home", element: <Home /> },         // renders at "/home"
      { path: "*", element: <NotFound /> },        // anything else → 404
    ],
  },
];

export default routes;
