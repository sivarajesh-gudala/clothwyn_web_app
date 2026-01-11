import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Category.scss";
import FiltersPanel from "../../components/FilterPanel/FilterPanel";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import { PRODUCTS } from "../../data/constants/products";

const CategoryPage = () => {
  const { category, subCategory } = useParams();

  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    subCategory ? [subCategory] : []
  );
  const [sort, setSort] = useState("price-asc");

  const categoryProducts = PRODUCTS.filter((p) => p.category === category);

  const typeOptions = Array.from(new Set(categoryProducts.map((p) => p.type)));

  let filtered = categoryProducts.filter(
    (p) => selectedTypes.length === 0 || selectedTypes.includes(p.type)
  );

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="category-page">
      <h2 style={{ textTransform: "capitalize" }}>{category} Collection</h2>

      <div className="category-layout">
        {/* LEFT: Filters */}
        <aside>
          <FiltersPanel
            types={typeOptions}
            selectedTypes={selectedTypes}
            onTypeChange={setSelectedTypes}
            sort={sort}
            onSortChange={setSort}
          />
        </aside>

        {/* RIGHT: Products */}
        <div>
          <div className="category-header">
            <span>{filtered.length} products</span>
          </div>

          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
