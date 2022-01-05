import Layout from "../components/reusables/Layout.jsx";
import Heading from "../components/reusables/Heading.jsx";
import Connect from '../components/ContentSections/Connect.jsx';
import MyProjects from '../components/ContentSections/MyProjects.jsx';
import Specialties from '../components/ContentSections/Specialties.jsx';
import Avatar from "../components/reusables/Avatar.jsx";

export default function Home() {
  return (
    <Layout
      additionalOuterStyles="grid"
      additionalInnerStyles="gap-16"
      title="Andy McGunagle"
      content="Andy McGunagle's personal website"
    >
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
    </Layout>
  );
};