import "./FilterPanel.scss";

interface Props {
  types: string[];
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
  sort: string;
  onSortChange: (v: string) => void;
}

const FiltersPanel = ({
  types,
  selectedTypes,
  onTypeChange,
  sort,
  onSortChange,
}: Props) => {
  const toggle = (t: string) => {
    if (selectedTypes.includes(t)) {
      onTypeChange(selectedTypes.filter((x) => x !== t));
    } else {
      onTypeChange([...selectedTypes, t]);
    }
  };

  return (
    <div className="filters-panel">
      {/* SORT */}
      <div className="filter-section">
        <h4>Sort By</h4>
        <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div className="filter-section">
        <h4>Categories</h4>

        <div className="filter-options">
          {types.map((t) => (
            <label key={t} className="filter-option">
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => toggle(t)}
              />
              <span style={{ textTransform: "capitalize" }}>{t}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
