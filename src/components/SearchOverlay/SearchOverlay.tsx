import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchOverlay.scss";

const trendingSearches = ["Kurti", "Saree", "Dress", "Bags", "Tops"];

const mockProducts = [
  { id: 1, title: "Kurti Floral", category: "women" },
  { id: 2, title: "Red Saree", category: "women" },
  { id: 3, title: "Summer Dress", category: "women" },
  { id: 4, title: "Leather Bag", category: "accessories" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("cw_recent_searches");
    if (saved) setRecent(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const saveRecent = (q: string) => {
    const updated = [q, ...recent.filter((r) => r !== q)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem("cw_recent_searches", JSON.stringify(updated));
  };

  const handleSearch = (q: string) => {
    if (!q.trim()) return;
    saveRecent(q);
    onClose();
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const suggestions = query
    ? mockProducts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!open) return null;

  return (
    <div className="search-overlay">
      <div className="backdrop" onClick={onClose} />

      <div className="search-panel">
        <div className="search-header">
          <input
            autoFocus
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
          />
          <button onClick={onClose}>✕</button>
        </div>

        <div className="search-body">
          {!query && (
            <>
              {recent.length > 0 && (
                <div className="section">
                  <h4>Recent Searches</h4>
                  <div className="chips">
                    {recent.map((r) => (
                      <span key={r} onClick={() => handleSearch(r)}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="section">
                <h4>Trending</h4>
                <div className="chips">
                  {trendingSearches.map((t) => (
                    <span key={t} onClick={() => handleSearch(t)}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {query && (
            <div className="section">
              <h4>Suggestions</h4>
              <ul className="suggestions">
                {suggestions.length === 0 && (
                  <li className="empty">No results found</li>
                )}
                {suggestions.map((p) => (
                  <li key={p.id} onClick={() => handleSearch(p.title)}>
                    🔍 {p.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
