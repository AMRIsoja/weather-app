function SearchBar({
  city,
  setCity,
  onSearch,
  loading,
  onKeyDown,
}) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={onKeyDown}
      />

      <button
        onClick={onSearch}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
