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
      <div className="job-details__spinner">
        <RotatingLines visible={true} height="50" width="50" color="#5964E0" />
      </div>
    );
  }

  if (!clickedJob) {
    return <h1>Job not found</h1>;
  }

  return (
    <section className="job-details">
      <div className="job-details__bg-container">
        <article className="job-details__company">
          <img
            src={clickedJob.logo}
            alt={`${clickedJob.company} logo`}
            className="job-details__company-logo"
            style={{
              backgroundColor: `${clickedJob.logoBackground}`,
            }}
          />
          <h2 className="job-details__company-name">{clickedJob.company}</h2>
          <p className="job-details__company-website">{clickedJob.website}</p>
          <a className="job-details__company-website-link">Company website</a>
        </article>
      </div>

      <div className="job-details__bg-container">
        <article className="job-details__info">
          <div className="job-details__info-header">
            <p className="job-details__info-contract">
              {clickedJob.postedAt} <span>•</span> {clickedJob.contract}
            </p>
            <strong className="job-details__info-position">
              {clickedJob.position}
            </strong>
            <p className="job-details__info-location">
              {clickedJob.location}
            </p>
            <button className="job-details__action-btn">Apply Now</button>
          </div>
          <div className="job-details__info-description">
            <p>
              {clickedJob.description}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
