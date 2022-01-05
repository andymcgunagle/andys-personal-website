import Head from 'next/head';

import { experience, skills } from "../data/index.js";

import Avatar from "../components/reusables/Avatar.jsx";
import Card from "../components/resume/Card.jsx";
import ContentSection from "../components/resume/ContentSection.jsx";
import IconAndText from "../components/resume/IconAndText.jsx";
import Job from "../components/resume/Job.jsx";
import Skill from "../components/resume/Skill.jsx";
import Summary from "../components/resume/Summary.jsx";
import Heading from "../components/reusables/Heading.jsx";

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
            <div className="flex flex-col items-center justify-evenly md:flex-row gap-4 w-full">
              <IconAndText icon="place" text="San Diego, CA" />
              <IconAndText icon="email" text="amcgunagle@gmail.com" />
              <IconAndText icon="phone" text="(707) 490-8131" />
            </div>
            <Avatar additionalStyles="border-2 border-blue-700" />
          </div>
        </header>

        <main className="flex flex-col gap-6">
          <Summary />

          <ContentSection icon="work" title="Experience">
            <div className="flex flex-col gap-4">
              {experience.map((item, index) => <Job key={index} {...item} />)}
            </div>
          </ContentSection>

          <ContentSection icon="school" title="Education">
            <Card>
              <div>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-lg font-bold">
                    California Polytechnic State University - San Luis Obispo
                  </h2>
                  <p className="text-xs text-center">
                    Class of 2013
                  </p>
                </div>
                <p className="text-sm">
                  Bachelor of Science in Kinesiology
                </p>
              </div>
            </Card>
          </ContentSection>

          <ContentSection icon="code" title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((item, index) => <Skill key={index} {...item} />)}
            </div>
          </ContentSection>
        </main>

      </div>
    </div>
  );
};
