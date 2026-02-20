import { JobsService } from "../services/jobs-service";
import { useQuery } from "@tanstack/react-query";

export const useJobs = () => {
  const fetchJobs = async () => {
    try {
      const { data } = await JobsService.getJobs();
      return data ?? [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs
  })

  return { data, isLoading, isError, error };
};
