import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AppSelectorPage from "./pages/AppSelectorPage";
import AMS_DS3 from "./AMS_DS3";
import AMS_DS3_Register from "./AMS_DS3_Register";
import AMS_DS3_SetPassword from "./AMS_DS3_SetPassword";
import AMS_DS3_SignUp from "./AMS_DS3_SignUp";
import AMS_DS3_CreatePassword from "./AMS_DS3_CreatePassword";
import AMS_DS3_ForgotPassword from "./AMS_DS3_ForgotPassword";
import AMS_DS3_ForgotPasswordCheckEmail from "./AMS_DS3_ForgotPasswordCheckEmail";
import AMS_DS3_LinkExpired from "./AMS_DS3_LinkExpired";
import AMS_DS3_VerifyEmail from "./AMS_DS3_VerifyEmail";
import AMS_DS3_VerifyEmailSuccess from "./AMS_DS3_VerifyEmailSuccess";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate replace to="/ams-ds3" /> },
  { path: "/signup", element: <Navigate replace to="/ams-ds3/signup" /> },
  { path: "/signup/register", element: <Navigate replace to="/ams-ds3/signup/register" /> },
  { path: "/signup/set-password", element: <Navigate replace to="/ams-ds3/signup/set-password" /> },
  { path: "/signup/verify-email", element: <Navigate replace to="/ams-ds3/signup/verify-email" /> },
  { path: "/signup/verify-email/success", element: <Navigate replace to="/ams-ds3/signup/verify-email/success" /> },
  { path: "/forgot-password", element: <Navigate replace to="/ams-ds3/forgot-password" /> },
  { path: "/forgot-password/check-email", element: <Navigate replace to="/ams-ds3/forgot-password/check-email" /> },
  { path: "/forgot-password/create-password", element: <Navigate replace to="/ams-ds3/forgot-password/create-password" /> },
  { path: "/forgot-password/link-expired", element: <Navigate replace to="/ams-ds3/forgot-password/link-expired" /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/app-selector", element: <AppSelectorPage /> },
  { path: "/ams-ds3", element: <AMS_DS3 /> },
  { path: "/ams-ds3/signup", element: <AMS_DS3_SignUp /> },
  { path: "/ams-ds3/signup/register", element: <AMS_DS3_Register /> },
  { path: "/ams-ds3/signup/set-password", element: <AMS_DS3_SetPassword /> },
  { path: "/ams-ds3/signup/verify-email", element: <AMS_DS3_VerifyEmail /> },
  { path: "/ams-ds3/signup/verify-email/success", element: <AMS_DS3_VerifyEmailSuccess /> },
  { path: "/ams-ds3/forgot-password", element: <AMS_DS3_ForgotPassword /> },
  { path: "/ams-ds3/forgot-password/check-email", element: <AMS_DS3_ForgotPasswordCheckEmail /> },
  { path: "/ams-ds3/forgot-password/create-password", element: <AMS_DS3_CreatePassword /> },
  { path: "/ams-ds3/forgot-password/link-expired", element: <AMS_DS3_LinkExpired /> },
]);
