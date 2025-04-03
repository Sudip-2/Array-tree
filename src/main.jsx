import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./auth/Login/Login.jsx";
import Signup from "./auth/Signup/Signup.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UsertypeGoal from "./auth/Usertype/UsertypeGoal.jsx";
import Pricing from "./auth/Pricing/Pricing.jsx";
import Payment from "./auth/Pricing/Payment.jsx";
import Profile from "./User/Profile.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Mylinktree from "./Components/Admin/Arraytree/Arraytree.jsx";
import Anlaytics from "./Components/Admin/Dashboard/Analytics.jsx";
import Userproflie from "./Components/Admin/UserProfile/Userprofile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register/:name" element={<Signup />}></Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<Mylinktree />}></Route>
        <Route path="analytics" element={<Anlaytics />}></Route>
        <Route path="profile" element={<Userproflie />}></Route>
      </Route>
      <Route
        path="register/select-categories"
        element={<UsertypeGoal />}
      ></Route>
      <Route path="register/select-price" element={<Pricing />}></Route>
      <Route path="register/billing" element={<Payment />}></Route>
      <Route path="register/user" element={<Profile />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
