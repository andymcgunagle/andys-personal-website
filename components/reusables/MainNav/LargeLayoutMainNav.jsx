import MainNav from "./MainNav.jsx";

export default function LargeLayoutMainNav() {
  return (
    <div className="hidden fixed top-4 left-4 md:flex justify-center items-center p-4">
      <MainNav />
    </div>
  );
};