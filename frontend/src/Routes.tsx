import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { FresherTop } from "./pages/FresherTop";
import { ElderTop } from "./pages/ElderTop";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { App } from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "fresherTop", element: <FresherTop /> },
  { path: "elderTop", element: <ElderTop /> },
]);