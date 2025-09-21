import React from 'react'; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pageRoutes } from "./routeConfig";
import DefaultLayout from '../layout/DefaultLayout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {pageRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
