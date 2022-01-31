import { useState } from "react";

import MainNav from "./MainNav";
import FixedMenuButton from "./FixedMenuButton";

export default function MobileMainNav() {
  const [showMainNav, setShowMainNav] = useState(false);

  return (
    <>
      {
        showMainNav ?
          <div className="fixed top-0 w-full h-full flex justify-center items-center bg-gray-900 p-4 border-t-8 border-blue-500">
            <MainNav />
          </div>
          : null
      }
      <FixedMenuButton showMainNav={showMainNav} setShowMainNav={setShowMainNav} />
    </>
  );
};