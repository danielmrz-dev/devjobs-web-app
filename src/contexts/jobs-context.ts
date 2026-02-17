import { createContext } from "react";
import type { IJob } from "../types/job.interface";

interface IJobsContext {
  jobs: IJob[];
  setJobs: React.Dispatch<React.SetStateAction<IJob[] | undefined>>,
  isLoading: boolean;
}

const defaultContextValue = {
  jobs: [],
  setJobs: () => {},
  isLoading: false,
} satisfies IJobsContext;

export const JobsContext = createContext<IJobsContext>(defaultContextValue);
