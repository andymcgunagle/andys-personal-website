// import { useEffect, useState } from "react";

export default function FixedMenuButton({ showMainNav, setShowMainNav }: FixedMenuButtonProps) {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [altButtonStyles, setAltButtonStyles] = useState(false);

  // useEffect(() => {
  //   const scrollListener = () => setScrollPosition(window.scrollY);
  //   window.addEventListener('scroll', scrollListener);

  //   scrollPosition > window.innerHeight ?
  //     setAltButtonStyles(true)
  //     : setAltButtonStyles(false);

  //   return () => window.removeEventListener('scroll', scrollListener);
  // }, [scrollPosition]);

  return (
    <button
      onClick={() => setShowMainNav(!showMainNav)}
      // className={`md:hidden flex justify-center items-center bg-blue-500 ${altButtonStyles ? "relative bottom-0 w-full p-2" : "fixed bottom-6 right-6 h-12 w-12 rounded-full"}`}
      className={`md:hidden flex justify-center items-center bg-blue-500 fixed bottom-6 right-6 h-12 w-12 rounded-full`}
    >
      <span className="material-icons">
        {showMainNav ? "close" : "menu"}
      </span>
    </button>
  );
};

interface FixedMenuButtonProps {
  showMainNav: boolean,
  setShowMainNav: React.Dispatch<React.SetStateAction<boolean>>,
};