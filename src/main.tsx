import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JobsContextProvider } from "./contexts/JobsContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <JobsContextProvider>
        <RouterProvider router={router} />
      </JobsContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
