import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/login/LoginPage";

export const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/auth/login", element: <LoginPage /> },
]);
