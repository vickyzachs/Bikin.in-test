export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-teal-500">BIKIN.IN</h1>

          <button className="text-teal-500 font-medium">Explore Artwork</button>

          <button className="text-gray-700">Other ▼</button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-500">
            🔍 Search...
          </div>

          <button className="px-5 py-2 rounded-full bg-teal-500 text-white">
            Register
          </button>

          <button className="px-5 py-2 rounded-full border border-teal-500 text-teal-500">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
