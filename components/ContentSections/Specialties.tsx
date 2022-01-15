import React from 'react';
import ContentSection from './ContentSection/ContentSection';

const specialtiesImages: SpecialtyImage[] = [
  {
    name: "HTML5",
    src: "/html5-logo.svg.png",
  },
  {
    name: "CSS3",
    src: "/css3-logo.svg.png",
  },
  {
    name: "JavScript",
    src: "/javascript-logo.png",
  },
  {
    name: "React.js",
    src: "/react-logo.svg.png",
  },
  {
    name: "Node.js",
    src: "/node-logo.svg.png",
  },
];

export interface SpecialtyImage {
  name: string;
  src: string;
};

export default function Specialties() {
  return (
    <ContentSection
      heading="Self-taught developer specializing in..."
      items={specialtiesImages}
    />
  );
};