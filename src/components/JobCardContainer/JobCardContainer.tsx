import "./JobCardContainer.scss";
import { JobCard } from "./components/JobCard/JobCard";
import { useJobs } from "../../hooks/useJobs";

export const JobCardsContainer = () => {

  const { jobs } = useJobs();

  return (
    <section className="job-card">
      <ul className="job-card__list">
        {
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
            )    
          })
        }
      </ul>
      <button>Load more</button>
    </section>
  );
};
