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
      <div className="flex flex-col">
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
          <p className="text-xs">
            {startDate} - {endDate}
          </p>
        </div>
        <p className="text-sm">
          {title}
        </p>
      </div>
      <p className="text-sm">
        {description}
      </p>
    </Card>
  );
};