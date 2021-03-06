import { skills } from "../../data/index";

import ContentSection from "./ContentSection";
import Skill from "./Skill";

export default function Skills() {
  return (
    <ContentSection icon="code" title="Skills">
      <div className="flex flex-wrap gap-1 md:gap-2">
        {skills.map((item, index) => <Skill key={index} {...item} />)}
      </div>
    </ContentSection>
  );
};