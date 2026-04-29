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
]);
