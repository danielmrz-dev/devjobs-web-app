import "./JobCardContainer.scss";
import { JobCard } from "./components/JobCard/JobCard";
import { RotatingLines } from "react-loader-spinner";
import { useContext } from "react";
import { JobsContext } from "../../contexts/jobs-context";

export const JobCardsContainer = () => {
  const { data: jobs, isLoading } = useContext(JobsContext);
  const isJobsListEmpty = jobs.length === 0;

  return (
    <section className="job-cards-container">
      <ul className="job-cards-container__list">
        {isLoading ? (
          <RotatingLines
            visible={true}
            wrapperClass="job-cards-container__spinner"
            height="50"
            width="50"
            color="#5964E0"
          />
        ) : isJobsListEmpty ? (
          <h3 className="job-cards-container__empty-msg">There are no jobs</h3>
        ) : (
          jobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                companyLogo={job.logo}
                companyName={job.company}
                contractType={job.contract}
                postedAt={job.postedAt}
                jobLocation={job.location}
                jobTitle={job.position}
                bgColor={job.logoBackground}
              />
            );
          })
        )}
      </ul>
      <button
        className="job-cards-container__button"
        disabled={isJobsListEmpty || isLoading}
      >
        Load more
      </button>
    </section>
  );
};
