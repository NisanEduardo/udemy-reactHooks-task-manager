import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CreateTask } from "./create-task/CreateTask";
import { ListTasks } from "./list-tasks/ListTasks";
import reportWebVitals from "./reportWebVitals";

import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UpdateTask } from "./update-task/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "create",
    element: <CreateTask />,
  },
  {
    path: "list",
    element: <ListTasks />,
  },
  {
    path: "update/:taskId",
    element: <UpdateTask />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
