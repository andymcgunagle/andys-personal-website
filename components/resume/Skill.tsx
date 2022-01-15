import Link from "./Link";

export default function Skill({ link, skill }: SkillProps) {
  return (
    <Link
      href={link}
      styles="bg-green-200 text-green-800 border-2 border-green-800 px-2 md:px-4 md:py-1 rounded-full shadow-md"
    >
      {skill}
    </Link>
  );
};

interface SkillProps {
  link: string,
  skill: string,
}