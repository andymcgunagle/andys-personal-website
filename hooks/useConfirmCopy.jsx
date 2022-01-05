import { useState, useEffect } from "react";

export function useConfirmCopy() {
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

  return { confirmCopy, copyEmailAddress };
};