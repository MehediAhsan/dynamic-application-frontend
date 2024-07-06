import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes.jsx";
import SiveNavOpenProvider from "./context/SiveNavOpenProvider";
import ThemeProvider from "./context/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiveNavOpenProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </SiveNavOpenProvider>
  </React.StrictMode>
);
