import Head from 'next/head';

import Avatar from "../components/reusables/Avatar.jsx";
import ContactInfo from "../components/resume/ContactInfo.jsx";
import Education from "../components/resume/Education.jsx";
import Experience from "../components/resume/Experience.jsx";
import Heading from "../components/reusables/Heading.jsx";
import Skills from "../components/resume/Skills.jsx";
import Summary from "../components/resume/Summary.jsx";

export default function Resume() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-400 md:p-4">
      <Head>
        <title>Resume</title>
        <meta name="description" content="Describe content here..." />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div className="flex flex-col gap-4 px-8 py-6 md:px-12 max-w-[750px] m-auto shadow-2xl bg-gray-900 text-gray-50 md:rounded-b-lg border-t-8 border-blue-500">

        <header className="flex flex-col items-center gap-4">
          <Heading />
          <div className="flex flex-wrap-reverse justify-center items-center gap-4">
            <ContactInfo />
            <Avatar additionalStyles="border-2 border-blue-700" />
          </div>
        </header>

        <main className="flex flex-col gap-6">
          <Summary />
          <Experience />
          <Education />
          <Skills />
        </main>

      </div>
    </div>
  );
};
