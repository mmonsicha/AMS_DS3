// DS3: CSS import ต้องเป็น FIRST — ก่อน component import ทุกตัว
import "@uxuissk/design-system/styles.css";
import "./tailwind.css";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
