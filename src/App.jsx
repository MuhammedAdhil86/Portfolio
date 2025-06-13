// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./router/routes";

export default function App() {
  return (
    <Routes>
      {routes.map(({ path, element, children }, idx) => (
        <Route key={idx} path={path} element={element}>
          {children?.map(({ path, index, element }, i) => (
            <Route
              key={i}
              path={path}
              index={index}
              element={element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
