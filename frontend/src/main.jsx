import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import IndexPage from "./pages/IndexPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>
);
