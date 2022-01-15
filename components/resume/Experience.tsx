import { experience } from "../../data/index.js"

import ContentSection from "./ContentSection";
import Job from "./Job";

export default function Experience() {
  return (
    <ContentSection icon="work" title="Experience">
      <div className="flex flex-col gap-4">
        {experience.map((item, index) => <Job key={index} {...item} />)}
      </div>
    </ContentSection>
  );
};