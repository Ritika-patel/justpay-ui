import React from 'react'; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pageRoutes } from "./routeConfig";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {pageRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
