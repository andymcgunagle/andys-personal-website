import { useCopyAndConfirm } from "../../hooks/useCopyAndConfirm";

import { socialLinks } from "../../data/socialLinks";

import ConfirmCopy from "../_reusables/ConfirmCopy";
import ContentSection from './ContentSection/ContentSection';

export default function Connect() {
  const { confirmCopy, copyText } = useCopyAndConfirm("amcgunagle@gmail.com");

  return (
    <div className="flex flex-col items-center gap-4">
      <ContentSection
        heading="Connect with me on..."
        items={socialLinks}
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