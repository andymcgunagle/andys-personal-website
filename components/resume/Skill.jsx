import Link from "./Link.jsx";

export default function Skill({ link, skill }) {
  return (
    <Link
      href={link}
      styles="bg-green-200 text-green-800 border-2 border-green-800 px-2 md:px-4 md:py-1 rounded-full shadow-md"
    >
      {skill}
    </Link>
  );
};