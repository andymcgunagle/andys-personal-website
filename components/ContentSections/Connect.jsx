import ContentSection from './ContentSection/ContentSection.jsx';

const sites = [
  {
    name: "LinkedIn",
    src: "/the-linkedin-logo.png",
    url: "https://www.linkedin.com/in/andy-mcgunagle/",
  },
  {
    name: "Twitter",
    src: "/twitter-logo.png",
    url: "https://twitter.com/PastTheArrow",
  },
];

export default function Connect() {
  return (
    <ContentSection
      heading="Connect with me on..."
      items={sites}
    />
  );
};