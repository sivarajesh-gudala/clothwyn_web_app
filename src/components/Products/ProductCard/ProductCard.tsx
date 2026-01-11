import "./ProductCard.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { addToWishlist } from "../../../store/wishListSlice";

const ProductCard = ({
  product,
  onClick,
}: {
  product: any;
  onClick: () => void;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card" onClick={onClick}>
      {/* IMAGE */}
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>

      {/* INFO */}
      <div className="product-info">
        <h4>{product.title}</h4>
        <p className="price">₹{product.price}</p>
      </div>

      {/* ACTIONS (ON HOVER) */}
      <div className="product-actions">
        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToWishlist(product));
          }}
        >
          ♡ Wishlist
        </button>

        <button
          className="cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
