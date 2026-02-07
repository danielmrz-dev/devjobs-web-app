import type { IJob } from "./job.interface";

export interface IJobsContext {
  data: IJob[];
  isLoading: boolean;
}
