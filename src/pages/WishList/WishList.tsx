import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";

const Wishlist = () => {
  const items = useSelector((state: RootState) => state.wishlist.items);

  return (
    <div style={{ padding: 24 }}>
      <h2>Wishlist</h2>
      <ProductGrid products={items} />
    </div>
  );
};

export default Wishlist;
