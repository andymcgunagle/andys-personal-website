export default function FixedMenuButton(
  { showMainNav, setShowMainNav }: FixedMenuButtonProps
) {

  return (
    <button
      onClick={() => setShowMainNav(!showMainNav)}
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