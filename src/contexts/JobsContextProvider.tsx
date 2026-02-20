import { useEffect, useState, type PropsWithChildren } from "react";
import { useJobs } from "../hooks/useJobs";
import { JobsContext } from "./jobs-context";
import type { IJob } from "../types/job.interface";

export const JobsContextProvider = ({ children }: PropsWithChildren) => {

  const { isLoading, data, error, isError } = useJobs();
  const [jobs, setJobs] = useState<IJob[]>();

  useEffect(() => {
    setJobs(data)
  }, [data])

  return (
    <JobsContext.Provider value={{
      isLoading,
      jobs: jobs ?? [],
      setJobs
    }}>
      { children }
    </JobsContext.Provider>
  )
}