import Layout from "../components/reusables/Layout.jsx";
import Avatar from "../components/reusables/Avatar.jsx";
import ContactInfo from "../components/resume/ContactInfo.jsx";
import Education from "../components/resume/Education.jsx";
import Experience from "../components/resume/Experience.jsx";
import Heading from "../components/reusables/Heading.jsx";
import Skills from "../components/resume/Skills.jsx";
import Summary from "../components/resume/Summary.jsx";

export default function Resume() {
  return (
    <Layout
      additionalOuterStyles="grid place-items-center bg-gray-400 md:p-4"
      additionalInnerStyles="bg-gray-900 max-w-[750px] m-auto shadow-2xl md:rounded-b-lg"
      title="Resume"
      content="Andy McGunagle's resume"
    >
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
    </Layout>
  );
};
