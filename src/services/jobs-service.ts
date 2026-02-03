import axios from "axios";

const url = "http://localhost:3001/jobs";

export const JobsService = {
  getJobs: async () => {
    const { data } = await axios.get(url);
    return { data };
  },
};
