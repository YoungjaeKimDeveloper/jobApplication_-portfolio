import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./components/AddJobPage";

const App = () => {
  // Add New Job
  const addJob = async (newjob) => {
    const res = await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newjob),
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element=<HomePage /> />
        <Route path="/jobs" element=<JobsPage /> />
        <Route path="/add-job" element=<AddJobPage addJobSumit={addJob} /> />
        <Route
          path="/jobs/:id"
          element=<JobPage deleteJob={deleteJob} />
          loader={jobLoader}
        />
        <Route path="*" element=<NotFoundPage /> />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
