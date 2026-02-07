import { createContext } from "react";
import type { IJobsContext } from "../types/jobs-context.interface";

const defaultContextValue = {
  data: [],
  isLoading: false,
} satisfies IJobsContext;

export const JobsContext = createContext<IJobsContext>(defaultContextValue);
