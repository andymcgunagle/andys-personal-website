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
      <div className="flex flex-wrap justify-center items-center gap-2">
        <p>...or shoot me an email at</p>
        <div
          onClick={copyEmailAddress}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p>
            amcgunagle@gmail.com
          </p>
          <span class="material-icons text-sm">
            content_copy
          </span>
        </div>
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