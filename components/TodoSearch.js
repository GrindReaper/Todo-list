export default function TodoSearch({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search todos"
      className="w-44 h-5 p-2 ml-2 mb-4 border border-gray-300 rounded-md"
    />
  );
}
