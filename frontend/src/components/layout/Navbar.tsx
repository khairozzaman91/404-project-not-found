interface NavbarProps {
  title: string;
}

function Navbar({ title }: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <h1 className="text-2xl font-bold text-slate-800">
        🏥 404 Project Not Found
      </h1>

      <h2 className="text-lg font-semibold text-slate-600">
        {title}
      </h2>

    </header>
  );
}

export default Navbar;