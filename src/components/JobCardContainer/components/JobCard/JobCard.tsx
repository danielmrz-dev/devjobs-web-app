import "./JobCard.scss";

type JobCardProps = {
  companyLogo: string;
  postedAt: string;
  contractType: string;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  bgColor: string;
};

export const JobCard = ({
  companyLogo,
  companyName,
  contractType,
  postedAt,
  jobLocation,
  jobTitle,
  bgColor
}: JobCardProps) => {

  return (
    <li className="job">
      <img 
        src={companyLogo} 
        alt="" 
        style={{ backgroundColor: bgColor }} 
      />
      <div className="job__info">
        <p className="job__info-createdAt">
          {postedAt} <span>•</span> {contractType}
        </p>
        <strong className="job__info-title">{jobTitle}</strong>
        <p className="job__info-company">{companyName}</p>
        <p className="job__info-location">{jobLocation}</p>
      </div>
    </li>
  );
};
