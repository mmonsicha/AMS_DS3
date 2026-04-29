import { createBrowserRouter } from "react-router";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpRegisterPage from "./pages/SignUpRegisterPage";
import SignUpSetPasswordPage from "./pages/SignUpSetPasswordPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import VerifyEmailSuccessPage from "./pages/VerifyEmailSuccessPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPasswordCheckEmailPage from "./pages/ForgotPasswordCheckEmailPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import DashboardPage from "./pages/DashboardPage";
import LinkExpiredPage from "./pages/LinkExpiredPage";
import AMS_DS3 from "./pages/AMS_DS3";
import AMS_DS3_Register from "./pages/AMS_DS3_Register";
import AMS_DS3_SetPassword from "./pages/AMS_DS3_SetPassword";
import AMS_DS3_SignUp from "./pages/AMS_DS3_SignUp";
import AMS_DS3_VerifyEmail from "./pages/AMS_DS3_VerifyEmail";
import AMS_DS3_VerifyEmailSuccess from "./pages/AMS_DS3_VerifyEmailSuccess";

export const router = createBrowserRouter([
  { path: "/", Component: SignInPage },
  { path: "/signup", Component: SignUpPage },
  { path: "/signup/register", Component: SignUpRegisterPage },
  { path: "/signup/set-password", Component: SignUpSetPasswordPage },
  { path: "/signup/verify-email", Component: VerifyEmailPage },
  { path: "/signup/verify-email/success", Component: VerifyEmailSuccessPage },
  { path: "/forgot-password", Component: ForgotPasswordPage },
  { path: "/forgot-password/check-email", Component: ForgotPasswordCheckEmailPage },
  { path: "/forgot-password/create-password", Component: CreatePasswordPage },
  { path: "/forgot-password/link-expired", Component: LinkExpiredPage },
  { path: "/dashboard", Component: DashboardPage },
  { path: "/ams-ds3", Component: AMS_DS3 },
  { path: "/ams-ds3/signup", Component: AMS_DS3_SignUp },
  { path: "/ams-ds3/signup/register", Component: AMS_DS3_Register },
  { path: "/ams-ds3/signup/set-password", Component: AMS_DS3_SetPassword },
  { path: "/ams-ds3/signup/verify-email", Component: AMS_DS3_VerifyEmail },
  { path: "/ams-ds3/signup/verify-email/success", Component: AMS_DS3_VerifyEmailSuccess },
]);
