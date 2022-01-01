import Head from 'next/head';
import HeadingAndAvatar from '../components/HeadingAndAvatar/HeadingAndAvatar.jsx';
import Connect from '../components/ContentSections/Connect.jsx';
import MyProjects from '../components/ContentSections/MyProjects.jsx';
import Specialties from '../components/ContentSections/Specialties.jsx';
import FixedMenuButton from "../components/FixedMenuButton.jsx";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col gap-10 justify-evenly font-mono border-t-8 border-blue-500">
      <Head>
        <title>Andy McGunagle</title>
        <meta name="description" content="Andy McGunagle's Personal Website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <header>
        <HeadingAndAvatar />
      </header>

      <main className="flex flex-col font-mono gap-10">
        <Specialties />
        <MyProjects />
        <Connect />
      </main>

      <footer className="flex justify-center">
        <a
          className="text-center cursor-pointer"
          href="https://github.com/andymcgunagle/andys-personal-website"
          rel="noopener noreferrer"
          target="_blank"
        >
          Check out the code for this site!
        </a>
      </footer>

      {/* <FixedMenuButton /> */}
    </div>
  );
};