import axios from "axios";
import type { IJob } from "../types/job.interface";

const url = "http://localhost:3001/jobs";

export const JobsService = {
  getJobs: async () => {
    const { data } = await axios.get<IJob[]>(url);
    return { data };
  },
};
