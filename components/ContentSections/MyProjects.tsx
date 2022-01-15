import React from 'react';
import ContentSection from './ContentSection/ContentSection';

const sites = [
  {
    name: "GitHub",
    src: "/github-logo.svg.png",
    url: "https://github.com/andymcgunagle"
  },
  {
    name: "NPM",
    src: "/npm-logo.svg.png",
    url: "https://www.npmjs.com/settings/amcgunagle/packages"
  },
];

export default function MyProjects() {
  return (
    <ContentSection
      heading="Check out my projects on..."
      items={sites}
    />
  );
};