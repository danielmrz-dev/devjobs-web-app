import { useState } from "react";
import { JobsService } from "../services/jobs-service";
import type { IJob } from "../types/job.interface";
import { useQuery } from "@tanstack/react-query";

export const useJobs = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const fetchJobs = async () => {
    try {
      const { data } = await JobsService.getJobs();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs
  })

  return { jobs, data, isLoading };
};
