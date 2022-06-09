import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostidPage from "../pages/PostidPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: () => <About />, exact: true },
  { path: "/posts", component: () => <Posts />, exact: true },
  { path: "/posts/:id", component: () => <PostidPage />, exact: true },
  { path: "/error", component: () => <Error />, exact: true },
  {
    path: "*",
    component: () => <Navigate to="/posts" replace />,
    exact: false,
  },
];

export const publicRoutes = [
  { path: "/login", component: () => <Login />, exact: true },
];
