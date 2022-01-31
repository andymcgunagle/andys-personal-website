import ContentSection from './ContentSection/ContentSection';

import { projectsLinks } from '../../data/projectsLinks';

export default function MyProjects() {
  return (
    <ContentSection
      heading="Check out my projects on..."
      items={projectsLinks}
    />
  );
};