import { useCopyAndConfirm } from "../../hooks/useCopyAndConfirm";
import ConfirmCopy from "../reusables/ConfirmCopy";

import ContentSection from './ContentSection/ContentSection';

const sites: Site[] = [
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

export interface Site {
  name: string,
  src: string,
  url: string,
};

export default function Connect() {
  const { confirmCopy, copyText } = useCopyAndConfirm("amcgunagle@gmail.com");

  return (
    <div className="flex flex-col items-center gap-4">
      <ContentSection
        heading="Connect with me on..."
        items={sites}
      />
      <div className="flex flex-wrap justify-center items-center gap-2">
        <p>...or shoot me an email at</p>
        <div
          onClick={copyText}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p>
            amcgunagle@gmail.com
          </p>
          <span className="material-icons text-sm">
            content_copy
          </span>
        </div>
      </div>
      <ConfirmCopy confirmCopy={confirmCopy} />
    </div>
  );
};