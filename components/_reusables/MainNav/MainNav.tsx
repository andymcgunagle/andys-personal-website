import { useRouter } from 'next/router'

import NavItem from "./NavItem";

const navItems = [
  {
    path: "/",
    text: "Home",
    icon: "home",
  },
  {
    path: "/resume",
    text: "Resume",
    icon: "description",
  },
  {
    path: "/articles-and-notes",
    text: "Articles & Notes",
    icon: "local_library",
  },
];

export default function MainNav() {
  const router = useRouter();

  return (
    <nav className="flex justify-center items-center print:hidden">
      <ol className="flex flex-col gap-4">
        {navItems.map(item => item.path !== router.pathname ? <NavItem key={item.path} {...item} /> : null)}
      </ol>
    </nav>
  );
};