import { useContext, useMemo } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import { JobsContext } from "../../contexts/jobs-context";
import "./JobDetails.scss";

export const JobDetails = () => {
  const { state } = useLocation();
  const { jobs, isLoading } = useContext(JobsContext);

  const clickedJob = useMemo(() => {
    const foundJob = jobs && jobs.find((job) => job.id === state["id"]);
    return foundJob;
  }, [state, jobs]);

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
    <>
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
              <p>{clickedJob.description}</p>
            </div>
            <div className="job-details__info-requirements">
              <h3 className="job-details__info-requirements-title">
                Requirements
              </h3>
              <p className="job-details__info-requirements-description">
                {clickedJob.requirements.content}
              </p>
            </div>
            <ul className="job-details__info-requirements-list">
              {clickedJob.requirements.items.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className="job-details__info-role">
              <h3 className="job-details__info-role-title">What You Will Do</h3>
              <p className="job-details__info-role-description">
                {clickedJob.role.content}
              </p>
            </div>
            <ol className="job-details__info-role-list">
              {clickedJob.role.items.map((item) => {
                return <li>{item}</li>;
              })}
            </ol>
          </article>
        </div>
      </section>
      <footer className="job-details__footer">
        <div className="job-details__footer-content">
          <h4 className="job-details__footer-content-position">
            {clickedJob.position}
          </h4>
          <p className="job-details__footer-content-company">
            {clickedJob.company}
          </p>
        </div>
        <button className="job-details__footer-btn">Apply Now</button>
      </footer>
    </>
  );
};
