export default function Navbar() {
  return (
    <nav className="border-b px-8 py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <h1 className="text-2xl font-bold">Bikin.in</h1>

        <div className="flex gap-6 text-sm text-gray-600">
          <button>Explore Artwork</button>
          <button>About</button>
        </div>
      </div>
    </nav>
  );
}
