import Head from 'next/head';

import Heading from "../components/reusables/Heading.jsx";
import Connect from '../components/ContentSections/Connect.jsx';
import MyProjects from '../components/ContentSections/MyProjects.jsx';
import Specialties from '../components/ContentSections/Specialties.jsx';
import Avatar from "../components/reusables/Avatar.jsx";
// import FixedMenuButton from "../components/reusables/FixedMenuButton.jsx";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col gap-16 justify-evenly border-t-8 border-blue-500">
      <Head>
        <title>Andy McGunagle</title>
        <meta name="description" content="Andy McGunagle's Personal Website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <header className="space-y-4">
        <Heading />
        <Avatar />
      </header>

      <main className="flex flex-col gap-10">
        <Specialties />
        <MyProjects />
        <Connect />
      </main>

      <footer className="flex justify-center">
        <a
          className="text-center cursor-pointer text-sm font-thin"
          href="https://github.com/andymcgunagle/andys-personal-website"
          rel="noopener noreferrer"
          target="_blank"
        >
          (Click here to check out the code for this site 🤘)
        </a>
      </footer>

      {/* <FixedMenuButton /> */}
    </div>
  );
};