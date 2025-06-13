import { useRoutes } from "react-router-dom";
import routes from "./router/routes";      // ← the array we export below

export default function App() {
  const element = useRoutes(routes); // React‑Router builds the tree for us
  return element;
}
