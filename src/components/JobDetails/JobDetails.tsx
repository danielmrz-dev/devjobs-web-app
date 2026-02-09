import { useLocation } from "react-router-dom";
import "./JobDetails.scss";
import { useContext, useMemo } from "react";
import { JobsContext } from "../../contexts/jobs-context";
import { RotatingLines } from "react-loader-spinner";

export const JobDetails = () => {
  const { state } = useLocation();
  const { data, isLoading } = useContext(JobsContext);

  const clickedJob = useMemo(() => {
    const foundJob = data && data.find((job) => job.id === state["id"]);
    return foundJob;
  }, [state, data]);

  if (isLoading) {
    return (
      <RotatingLines
        visible={true}
        wrapperClass="job-details__spinner"
        height="50"
        width="50"
        color="#5964E0"
      />
    );
  }

  if (!clickedJob) {
    return <h1>Job not found</h1>;
  }

  return (
    <div className="job-details">
      <img src={clickedJob.logo} alt="Teste" />
      <h2>{clickedJob.company}</h2>
      <p>{clickedJob.website}</p>
    </div>
  );
};
