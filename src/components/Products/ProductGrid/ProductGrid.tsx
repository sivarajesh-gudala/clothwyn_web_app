import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.scss";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onClick={() => navigate(`/product/${p.id}`)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
