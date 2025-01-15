export function Navbar() {
  return (
    <nav className="bg-zinc-700  w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
            <a href="/" className="text-2xl font-bold">
                My App
            </a>
        </div>

        <div className="text-white  flex justify-center order-3 w-full md:w-auto md:order-2"></div>
      </div>
    </nav>
  );
}
