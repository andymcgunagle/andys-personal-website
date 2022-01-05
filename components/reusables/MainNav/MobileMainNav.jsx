import { useState } from "react";

import MainNav from "./MainNav.jsx";
import FixedMenuButton from "./FixedMenuButton.jsx";

export default function MobileMainNav() {
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <>
      {
        showMainNav ?
          <div className="fixed top-0 w-full h-full flex justify-center items-center bg-gray-900 p-4">
            <MainNav />
          </div>
          : null
      }
      <FixedMenuButton showMainNav={showMainNav} setShowMainNav={setShowMainNav} />
    </>
  );
};