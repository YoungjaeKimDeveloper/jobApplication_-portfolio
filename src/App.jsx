import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element=<HomePage /> />
      <Route path="/jobs" element=<JobsPage /> />
      <Route path="*" element=<NotFoundPage /> />
    </Route>
  )
);

import React from "react";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFound";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
