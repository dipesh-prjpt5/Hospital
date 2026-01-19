const NavBar = () => {
  return (
    <header className="relative h-14 bg-[#1C1D21] text-white flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">AIIMS BILASPUR</h1>

      <div className="flex items-center gap-4">
        <span className="cursor-pointer">Profile</span>
      </div>
    </header>
  );
};

export default NavBar;
