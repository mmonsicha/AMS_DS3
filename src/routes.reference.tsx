import { createBrowserRouter, Navigate } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import AMS_DS3 from "./pages/AMS_DS3";
import AMS_DS3_Register from "./pages/AMS_DS3_Register";
import AMS_DS3_SetPassword from "./pages/AMS_DS3_SetPassword";
import AMS_DS3_SignUp from "./pages/AMS_DS3_SignUp";
import AMS_DS3_CreatePassword from "./pages/AMS_DS3_CreatePassword";
import AMS_DS3_ForgotPassword from "./pages/AMS_DS3_ForgotPassword";
import AMS_DS3_ForgotPasswordCheckEmail from "./pages/AMS_DS3_ForgotPasswordCheckEmail";
import AMS_DS3_LinkExpired from "./pages/AMS_DS3_LinkExpired";
import AMS_DS3_VerifyEmail from "./pages/AMS_DS3_VerifyEmail";
import AMS_DS3_VerifyEmailSuccess from "./pages/AMS_DS3_VerifyEmailSuccess";

export const router = createBrowserRouter([
  { path: "/", Component: () => <Navigate replace to="/ams-ds3" /> },
  { path: "/signup", Component: () => <Navigate replace to="/ams-ds3/signup" /> },
  { path: "/signup/register", Component: () => <Navigate replace to="/ams-ds3/signup/register" /> },
  { path: "/signup/set-password", Component: () => <Navigate replace to="/ams-ds3/signup/set-password" /> },
  { path: "/signup/verify-email", Component: () => <Navigate replace to="/ams-ds3/signup/verify-email" /> },
  { path: "/signup/verify-email/success", Component: () => <Navigate replace to="/ams-ds3/signup/verify-email/success" /> },
  { path: "/forgot-password", Component: () => <Navigate replace to="/ams-ds3/forgot-password" /> },
  { path: "/forgot-password/check-email", Component: () => <Navigate replace to="/ams-ds3/forgot-password/check-email" /> },
  { path: "/forgot-password/create-password", Component: () => <Navigate replace to="/ams-ds3/forgot-password/create-password" /> },
  { path: "/forgot-password/link-expired", Component: () => <Navigate replace to="/ams-ds3/forgot-password/link-expired" /> },
  { path: "/dashboard", Component: DashboardPage },
  { path: "/ams-ds3", Component: AMS_DS3 },
  { path: "/ams-ds3/signup", Component: AMS_DS3_SignUp },
  { path: "/ams-ds3/signup/register", Component: AMS_DS3_Register },
  { path: "/ams-ds3/signup/set-password", Component: AMS_DS3_SetPassword },
  { path: "/ams-ds3/signup/verify-email", Component: AMS_DS3_VerifyEmail },
  { path: "/ams-ds3/signup/verify-email/success", Component: AMS_DS3_VerifyEmailSuccess },
  { path: "/ams-ds3/forgot-password", Component: AMS_DS3_ForgotPassword },
  { path: "/ams-ds3/forgot-password/check-email", Component: AMS_DS3_ForgotPasswordCheckEmail },
  { path: "/ams-ds3/forgot-password/create-password", Component: AMS_DS3_CreatePassword },
  { path: "/ams-ds3/forgot-password/link-expired", Component: AMS_DS3_LinkExpired },
]);
