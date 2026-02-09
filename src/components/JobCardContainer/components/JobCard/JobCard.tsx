import { useNavigate } from "react-router-dom";
import "./JobCard.scss";

type JobCardProps = {
  id: number;
  companyLogo: string;
  postedAt: string;
  contractType: string;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  bgColor: string;
};

export const JobCard = ({
  id,
  companyLogo,
  companyName,
  contractType,
  postedAt,
  jobLocation,
  jobTitle,
  bgColor
}: JobCardProps) => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/jobs/${jobTitle.toLowerCase().replaceAll(" ", "-")}`, {
      state: { id }
    })
  }

  return (
    <li className="job" onClick={handleNavigation}>
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
