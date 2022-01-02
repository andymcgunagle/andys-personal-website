import { useEffect, useState } from "react";
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
  const [confirmCopy, setConfirmCopy] = useState(false);

  const copyEmailAddress = (e) => {
    navigator.clipboard.writeText("amcgunagle@gmail.com");
    setConfirmCopy(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setConfirmCopy(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [confirmCopy]);

  return (
    <div className="flex flex-col items-center gap-4">
      <ContentSection
        heading="Connect with me on..."
        items={sites}
      />
      <div className="flex flex-wrap gap-2">
        <p>...or shoot me an email at</p>
        <span
          onClick={copyEmailAddress}
          className="cursor-pointer"
        >
          amcgunagle@gmail.com
        </span>
      </div>
      {
        confirmCopy ?
          <p className="fixed top-4 bg-green-100 border-2 border-green-700 text-green-700 p-2 rounded-md animate-fade-out text-center">
            Email address copied 👍
          </p>
          : null
      }
    </div>
  );
};