import Link from "next/link";

export default function NavItem({ path, text, icon }: NavItemProps) {
  return (
    <Link href={path}>
      <li className="flex justify-center items-center gap-2 text-center px-4 py-2 bg-gray-600 rounded-full hover:bg-gray-500 select-none cursor-pointer">
        <span className="material-icons">
          {icon}
        </span>
        <a>{text}</a>
      </li>
    </Link>
  );
};

interface NavItemProps {
  path: string,
  text: string,
  icon: string;
};