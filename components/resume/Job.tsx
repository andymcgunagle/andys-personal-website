import Link from "./Link";
import Card from "./Card";
import { Job } from "../../data";

export default function Job({
  companyName,
  description,
  endDate,
  link,
  location,
  startDate,
  title,
}: Job) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex flex-wrap items-center gap-1 md:gap-2">
            <Link
              href={link}
              styles="text-lg font-bold w-fit"
            >
              {companyName}
            </Link>
            <span className="material-icons text-sm">
              verified
            </span>
            <div className="text-xs text-gray-300">
              {startDate} - {endDate}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <span className="material-icons text-sm text-gray-300">
              location_on
            </span>
            <div className="flex text-xs text-gray-300">
              {location}
            </div>
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