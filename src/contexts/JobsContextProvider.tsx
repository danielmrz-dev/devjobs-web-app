import { type PropsWithChildren } from "react";
import { useJobs } from "../hooks/useJobs";
import { JobsContext } from "./jobs-context";

export const JobsContextProvider = ({ children }: PropsWithChildren) => {

  const { isLoading, data } = useJobs();

  return (
    <JobsContext.Provider value={{
      isLoading,
      data: data ?? []
    }}>
      { children }
    </JobsContext.Provider>
  )
}