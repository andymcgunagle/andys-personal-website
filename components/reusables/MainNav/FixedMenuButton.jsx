export default function FixedMenuButton({ showMainNav, setShowMainNav }) {
  return (
    <button
      onClick={() => setShowMainNav(!showMainNav)}
      className="md:hidden fixed bottom-6 right-6 flex justify-center items-center bg-blue-500 h-12 w-12 rounded-full"
    >
      <span className="material-icons">
        {showMainNav ? "close" : "menu"}
      </span>
    </button>
  );
};