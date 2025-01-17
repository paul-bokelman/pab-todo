import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import App from "./App.tsx";
import "./styles/globals.css";
import { ThemeProvider } from "@/components/";
import { Toaster } from "@/components/ui";
import { TaskProvider } from "@/components/context/";
import { qc } from "@/lib/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TaskProvider>
          <RouterProvider router={router} />
        </TaskProvider>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
