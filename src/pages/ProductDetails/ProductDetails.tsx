import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/constants/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToWishlist } from "../../store/wishListSlice";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));
  const dispatch = useDispatch();

  if (!product) return <div style={{ padding: 24 }}>Not found</div>;

  return (
    <div className="product-details-page">
      <div className="image-section">
        <img src={product.image} alt="product_img" />
      </div>

      <div className="info-section">
        <h1>{product.title}</h1>
        <h2>₹{product.price}</h2>
        <p>Premium quality product.</p>

        <div className="actions">
          <button
            className="btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          <button
            className="btn-outline"
            onClick={() => dispatch(addToWishlist(product))}
          >
            ❤️ Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
