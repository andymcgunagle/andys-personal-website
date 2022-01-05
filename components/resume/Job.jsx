import Link from "./Link.jsx";
import Card from "./Card.jsx";

export default function Job({
  companyName,
  description,
  endDate,
  link,
  startDate,
  title,
}) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Link
            href={link}
            styles="text-lg font-bold"
          >
            {companyName}
          </Link>
          <span className="material-icons text-sm">
            verified
          </span>
          <div className="flex flex-wrap text-xs text-gray-300">
            <span>{startDate} -</span> <span>{endDate}</span>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          {title}
        </p>
      </div>
      <p className="text-sm">
        {description}
      </p>
    </Card>
  );
};