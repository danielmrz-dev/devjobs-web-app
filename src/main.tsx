import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JobsContextProvider } from "./contexts/JobsContextProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <JobsContextProvider>
        <App />
      </JobsContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
